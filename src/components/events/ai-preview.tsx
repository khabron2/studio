'use client';

import type { Event } from '@/lib/types';
import { generateEventPreview } from '@/ai/flows/generate-event-preview';
import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Wand2, Loader2, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

type AIPreviewProps = {
  event: Event;
};

export function AIPreview({ event }: AIPreviewProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleGeneratePreview = async () => {
    startTransition(async () => {
      setPreview(null);
      try {
        const result = await generateEventPreview({
          eventName: event.type === 'PPV' ? event.name || 'PPV' : event.type,
          eventDate: event.date,
          eventLocation: event.location,
        });
        setPreview(result.previewText);
      } catch (e) {
        console.error(e);
        toast({
          variant: 'destructive',
          title: 'Error de IA',
          description: 'No se pudo generar el avance. Por favor, inténtelo de nuevo.',
        });
      }
    });
  };

  return (
    <div className="space-y-4 rounded-lg border bg-card/30 p-4">
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
            <Wand2 className="h-6 w-6 text-primary" />
            <div>
                <h4 className="font-semibold">Avance del Evento con IA</h4>
                <p className="text-sm text-muted-foreground">
                    Genere un resumen histórico del evento.
                </p>
            </div>
        </div>
        <Button onClick={handleGeneratePreview} disabled={isPending} className="w-full sm:w-auto">
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generando...
            </>
          ) : (
            <>
              Generar Avance
            </>
          )}
        </Button>
      </div>

      {isPending && (
         <div className="flex items-center justify-center rounded-lg bg-muted p-6">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
         </div>
      )}
      
      {preview && !isPending && (
        <Card className="bg-background/50">
          <CardContent className="p-4">
            <p className="text-sm text-foreground/90">{preview}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
