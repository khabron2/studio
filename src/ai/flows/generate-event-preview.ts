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
  previewText: z.string().describe('A short AI-generated preview of the event.'),
});
export type GenerateEventPreviewOutput = z.infer<typeof GenerateEventPreviewOutputSchema>;

export async function generateEventPreview(input: GenerateEventPreviewInput): Promise<GenerateEventPreviewOutput> {
  return generateEventPreviewFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateEventPreviewPrompt',
  input: {schema: GenerateEventPreviewInputSchema},
  output: {schema: GenerateEventPreviewOutputSchema},
  prompt: `You are a professional wrestling historian. Generate a short preview of the following event based on its historical data.

Event Name: {{{eventName}}}
Event Date: {{{eventDate}}}
Event Location: {{{eventLocation}}}

Write a brief and engaging summary (around 50-75 words) highlighting key storylines or notable occurrences that might have transpired during the event. Focus on what makes this event unique or memorable within the broader context of professional wrestling history.`, 
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
