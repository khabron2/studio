import { Header } from '@/components/layout/header';
import { chronology } from '@/lib/events-data';
import { MonthSection } from '@/components/events/month-section';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1 p-4 md:p-8 lg:p-10">
        <div className="mx-auto grid max-w-7xl gap-16">
          {chronology.map((monthData) => (
            <MonthSection key={monthData.month} monthData={monthData} />
          ))}
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} WWF Cronología 2000. Todos los derechos reservados.
      </footer>
    </div>
  );
}
