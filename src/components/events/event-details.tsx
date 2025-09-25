import type { Event } from '@/lib/types';
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, ListOrdered } from 'lucide-react';
import { AIPreview } from './ai-preview';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';

type EventDetailsProps = {
  event: Event;
};

export function EventDetails({ event }: EventDetailsProps) {
  const eventName = event.type === 'PPV' ? event.name : event.type;
  
  let badgeVariant: 'default' | 'secondary' | 'destructive' | 'outline' | null | undefined = 'default';
  let badgeClassName = '';

  switch (event.type) {
    case 'RAW':
      badgeVariant = 'default';
      break;
    case 'SmackDown':
      badgeVariant = 'default';
      badgeClassName = 'bg-accent text-accent-foreground hover:bg-accent/80 border-accent/50';
      break;
    case 'PPV':
      badgeVariant = 'secondary';
      badgeClassName = 'bg-yellow-400/80 text-yellow-900 border-yellow-500/80 hover:bg-yellow-400/70';
      break;
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle className="font-headline text-3xl">{eventName}</DialogTitle>
        <DialogDescription>
          {event.date} &middot; {event.location}
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-6 py-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Badge variant={badgeVariant} className={cn('text-sm', badgeClassName)}>
            {event.type}
          </Badge>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{event.venue ? `${event.venue}, ${event.location}`: event.location}</span>
          </div>
        </div>

        <AIPreview event={event} />

        <Separator />
        
        <div>
          <h3 className="mb-4 flex items-center gap-2 font-headline text-xl font-semibold">
            <ListOrdered className="h-5 w-5 text-primary" />
            Cartelera de Luchas
          </h3>
          {event.matches.length > 0 ? (
            <ul className="space-y-3">
              {event.matches.map((match, index) => (
                <li key={index} className="rounded-lg border bg-card p-3 shadow-sm transition-colors hover:bg-muted/50">
                  <p className="font-semibold">{match.participants.join(' vs. ')}</p>
                  {match.title && <p className="text-sm text-muted-foreground">{match.title}</p>}
                  {match.stipulation && <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary">{match.stipulation}</p>}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-muted-foreground py-4">La cartelera para este evento no está disponible.</p>
          )}
        </div>

        <Separator />
        
        <div className="mt-2 flex justify-end">
            <Button asChild variant="outline">
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.venue ? `${event.venue}, ${event.location}` : event.location)}`} target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-4 w-4" />
                    Ver en Mapa
                </a>
            </Button>
        </div>
      </div>
    </>
  );
}
