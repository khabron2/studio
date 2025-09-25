import Image from 'next/image';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center">
        <div className="mr-4 flex items-center">
          <Image
            src="https://picsum.photos/seed/logo/40/40"
            width={40}
            height={40}
            alt="Logo"
            className="rounded-full"
            data-ai-hint="logo"
          />
          <h1 className="ml-3 font-headline text-2xl font-bold tracking-tight">
            WWF Cronología 2000
          </h1>
        </div>
      </div>
    </header>
  );
}
