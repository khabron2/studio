import type { MonthData } from '@/lib/types';
import { EventCard } from './event-card';

type MonthSectionProps = {
  monthData: MonthData;
};

export function MonthSection({ monthData }: MonthSectionProps) {
  return (
    <section>
      <h2 className="mb-8 font-headline text-5xl font-bold text-primary-foreground/90" style={{ textShadow: '2px 2px 4px hsl(var(--primary))' }}>
        {monthData.month}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {monthData.events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
