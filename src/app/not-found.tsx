import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="pt-16 md:pt-28 min-h-screen">
      <div className="container flex flex-col items-center justify-center h-full max-w-3xl px-4 py-16 md:py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-serif mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-serif mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-lg">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-background" asChild>
          <Link href="/">Return to homepage</Link>
        </Button>
      </div>
    </div>
  );
}
