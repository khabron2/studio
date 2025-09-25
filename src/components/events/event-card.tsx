'use client';

import type { Event } from '@/lib/types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { EventDetails } from './event-details';
import { cn } from '@/lib/utils';
import { Tv, Ticket, CheckCircle2, XCircle } from 'lucide-react';
import { useState } from 'react';

type EventCardProps = {
  event: Event;
};

export function EventCard({ event }: EventCardProps) {
  const [open, setOpen] = useState(false);

  const eventName = event.type === 'PPV' ? event.name : event.type;

  const eventIcon =
    event.type === 'PPV' ? (
      <Ticket className="h-4 w-4" />
    ) : (
      <Tv className="h-4 w-4" />
    );

  const cardColorClass =
    event.type === 'RAW'
      ? 'border-primary/30 hover:border-primary/80 hover:shadow-primary/20'
      : event.type === 'SmackDown'
      ? 'border-accent/30 hover:border-accent/80 hover:shadow-accent/20'
      : 'border-yellow-500/30 hover:border-yellow-500/80 hover:shadow-yellow-500/20';
  
  const isAvailable = event.matches.length > 0;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Card
          className={cn(
            'flex h-full cursor-pointer flex-col bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
            cardColorClass
          )}
        >
          <CardHeader className="flex-row items-start gap-4 p-4">
            <div className="flex h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-background/80">
              <span className="font-headline text-4xl font-bold text-primary">
                {event.day}
              </span>
            </div>
            <div className="flex-1 truncate pt-1">
              <h3 className="truncate font-headline text-base font-bold">
                {eventName}
              </h3>
              <p className="truncate text-xs text-muted-foreground">
                {event.location}
              </p>
            </div>
          </CardHeader>
          <CardContent className="flex flex-1 items-end justify-between p-4 pt-0">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              {eventIcon}
              <span>{event.type}</span>
            </div>
            {isAvailable ? (
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            ) : (
              <XCircle className="h-4 w-4 text-red-500" />
            )}
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
        <EventDetails event={event} />
      </DialogContent>
    </Dialog>
  );
}
