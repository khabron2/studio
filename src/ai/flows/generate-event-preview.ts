'use server';

/**
 * @fileOverview A flow for generating a preview of a WWF event based on its historical data.
 *
 * - generateEventPreview - A function that generates the event preview.
 * - GenerateEventPreviewInput - The input type for the generateEventPreview function.
 * - GenerateEventPreviewOutput - The return type for the generateEventPreview function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateEventPreviewInputSchema = z.object({
  eventName: z.string().describe('The name of the event (e.g., RAW, SmackDown, Royal Rumble).'),
  eventDate: z.string().describe('The date of the event (e.g., January 23, 2000).'),
  eventLocation: z.string().describe('The location of the event (e.g., New York, NY).'),
});
export type GenerateEventPreviewInput = z.infer<typeof GenerateEventPreviewInputSchema>;

const GenerateEventPreviewOutputSchema = z.object({
  previewText: z.string().describe('Un breve avance del evento generado por IA.'),
});
export type GenerateEventPreviewOutput = z.infer<typeof GenerateEventPreviewOutputSchema>;

export async function generateEventPreview(input: GenerateEventPreviewInput): Promise<GenerateEventPreviewOutput> {
  return generateEventPreviewFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateEventPreviewPrompt',
  input: {schema: GenerateEventPreviewInputSchema},
  output: {schema: GenerateEventPreviewOutputSchema},
  prompt: `Eres un historiador de la lucha libre profesional. Genera un breve avance del siguiente evento basándote en sus datos históricos. La respuesta debe ser en español.

Nombre del Evento: {{{eventName}}}
Fecha del Evento: {{{eventDate}}}
Lugar del Evento: {{{eventLocation}}}

Escribe un resumen breve y atractivo (alrededor de 50-75 palabras) destacando las historias clave o los sucesos notables que podrían haber ocurrido durante el evento. Concéntrate en lo que hace que este evento sea único o memorable dentro del contexto más amplio de la historia de la lucha libre profesional.`,
});

const generateEventPreviewFlow = ai.defineFlow(
  {
    name: 'generateEventPreviewFlow',
    inputSchema: GenerateEventPreviewInputSchema,
    outputSchema: GenerateEventPreviewOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
