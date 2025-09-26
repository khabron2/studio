'use client';

import type { MonthData } from '@/lib/types';
import { EventCard } from './event-card';
import useLocalStorage from '@/hooks/use-local-storage';

type MonthSectionProps = {
  monthData: MonthData;
};

export function MonthSection({ monthData }: MonthSectionProps) {
  const [watchedEvents, setWatchedEvents] = useLocalStorage<Set<string>>(
    `watchedEvents-${monthData.month}`,
    new Set()
  );

  const toggleWatched = (eventId: string) => {
    setWatchedEvents((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(eventId)) {
        newSet.delete(eventId);
      } else {
        newSet.add(eventId);
      }
      return newSet;
    });
  };

  return (
    <section>
      <h2 className="mb-6 font-headline text-2xl font-bold text-primary-foreground/90" style={{ textShadow: '1px 1px 1px hsl(var(--primary))' }}>
        {monthData.month}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {monthData.events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            isWatched={watchedEvents.has(event.id)}
            toggleWatched={toggleWatched}
          />
        ))}
      </div>
    </section>
  );
}
