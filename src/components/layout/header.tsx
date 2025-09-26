import Image from 'next/image';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center">
        <div className="mr-4 flex items-center">
          <Image
            src="https://storage.googleapis.com/studiopanda-assets/wwe-logo-scratch.png"
            width={48}
            height={48}
            alt="Logo WWF"
            className="dark:invert"
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
