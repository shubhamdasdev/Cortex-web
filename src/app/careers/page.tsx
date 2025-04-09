import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CareersPage() {
  return (
    <div className="pt-16 md:pt-20 lg:pt-28">
      {/* Hero section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto md:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
              Join the team building the future of financial AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              At Cortex, we're bringing AI to financial services. Join us to build products that transform how the financial industry works.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary hover:text-background"
              asChild
            >
              <Link href="https://jobs.ashbyhq.com/cortex" target="_blank" rel="noopener noreferrer">
                View open positions
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
            Benefits & perks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-muted/30 border-muted">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Remote-first culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Work from anywhere in the world. We believe in hiring the best talent regardless of location.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/30 border-muted">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Competitive compensation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer competitive salaries and equity packages to ensure our team members share in our success.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/30 border-muted">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Health & wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive health insurance, mental health support, and wellness stipends.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/30 border-muted">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Flexible PTO</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We trust our team to manage their time effectively and take the breaks they need.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/30 border-muted">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Learning & development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Budget for courses, conferences, and resources to help you grow professionally.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/30 border-muted">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Team retreats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Regular opportunities to meet your colleagues in person and build stronger connections.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/10">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              No open positions that match your skills?
            </h2>
            <p className="text-muted-foreground mb-8">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep it on file for future opportunities.
            </p>
            <Button
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-background"
              asChild
            >
              <Link href="mailto:careers@cortex.ai">
                Contact us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
