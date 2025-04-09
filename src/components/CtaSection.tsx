import Link from "next/link";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-cortex-dark-blue">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Start with one workflow. Scale to the whole firm.</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8">
          Cortex automates research, modeling, and reporting <br />all from a single, intelligent system.
          </h2>
          <Button
            variant="outline"
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary hover:text-background"
            asChild
          >
            <Link href="/contact">Book A Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
