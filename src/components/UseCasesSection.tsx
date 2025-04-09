import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const UseCasesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-cortex-dark to-cortex-dark/95">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Scale your workforce,
            <span className="block mt-2">multiply your results</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Use Cortex to launch multiple tasks that will continue working in the background, like having an AI workforce 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Card className="bg-muted/20 border-muted backdrop-blur-sm transition-all duration-300 hover:bg-muted/30 hover:shadow-lg hover:-translate-y-1 group overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-bl-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>
                </div>
                <CardTitle className="text-xl font-serif">Hedge Funds</CardTitle>
              </div>
              <CardDescription className="text-muted-foreground/90">
                Expand your coverage universe by accelerating the learning curve on new opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Search over hundreds of transcripts and filings to surface market trends and refine investment theses.
              </p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/90 font-medium group-hover:underline">Learn more</Button>
            </CardFooter>
          </Card>

          <Card className="bg-muted/20 border-muted backdrop-blur-sm transition-all duration-300 hover:bg-muted/30 hover:shadow-lg hover:-translate-y-1 group overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-bl-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1"/><path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1"/></svg>
                </div>
                <CardTitle className="text-xl font-serif">Private Equity</CardTitle>
              </div>
              <CardDescription className="text-muted-foreground/90">
                Accelerate workflows by analyzing market data, company data, and financials.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Surface actionable insights and deal opportunities. Streamline due diligence and investment memo preparation while leveraging your firm's historical knowledge.
              </p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/90 font-medium group-hover:underline">Learn more</Button>
            </CardFooter>
          </Card>

          <Card className="bg-muted/20 border-muted backdrop-blur-sm transition-all duration-300 hover:bg-muted/30 hover:shadow-lg hover:-translate-y-1 group overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-bl-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 21V3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2Z"/><path d="M6 21V3"/><path d="M14 9h1"/><path d="M14 17h1"/><path d="M14 13h1"/></svg>
                </div>
                <CardTitle className="text-xl font-serif">Banking</CardTitle>
              </div>
              <CardDescription className="text-muted-foreground/90">
                Streamline investment banking workflows with automated pitch creation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Analyze data rooms, due diligence reports, and legal documents. Centralize precedent materials while maintaining consistent branding to compile deliverables efficiently.
              </p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/90 font-medium group-hover:underline">Learn more</Button>
            </CardFooter>
          </Card>

          <Card className="bg-muted/20 border-muted backdrop-blur-sm transition-all duration-300 hover:bg-muted/30 hover:shadow-lg hover:-translate-y-1 group overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-bl-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/><path d="M2 12h20"/><path d="m5 17 3-5-3-5"/><path d="m19 17-3-5 3-5"/></svg>
                </div>
                <CardTitle className="text-xl font-serif">Asset Management</CardTitle>
              </div>
              <CardDescription className="text-muted-foreground/90">
                Transform portfolio management with integrated data collection and analysis.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Synthesize market data and research to identify opportunities, optimize allocations, and enhance client communications across asset classes.
              </p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/90 font-medium group-hover:underline">Learn more</Button>
            </CardFooter>
          </Card>

          <Card className="bg-muted/20 border-muted backdrop-blur-sm transition-all duration-300 hover:bg-muted/30 hover:shadow-lg hover:-translate-y-1 group overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-bl-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9Z"/><path d="M7 10h.01"/><path d="M11 10h2"/><path d="M7 14h10"/></svg>
                </div>
                <CardTitle className="text-xl font-serif">Investment Advisors</CardTitle>
              </div>
              <CardDescription className="text-muted-foreground/90">
                Enhance RIA workflows with automated research and portfolio analysis.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Centralize firm knowledge and scale your practice with automated portfolio monitoring and streamlined document generation while ensuring compliance.
              </p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/90 font-medium group-hover:underline">Learn more</Button>
            </CardFooter>
          </Card>

          <Card className="bg-muted/20 border-muted backdrop-blur-sm transition-all duration-300 hover:bg-muted/30 hover:shadow-lg hover:-translate-y-1 group overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-bl-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <CardTitle className="text-xl font-serif">Enterprise Security</CardTitle>
              </div>
              <CardDescription className="text-muted-foreground/90">
                Bank-grade security with end-to-end encryption for all your sensitive data.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                All customer data is encrypted both in transit and at rest, utilizing the most robust encryption standards: AES-256 for storage and TLS 1.2/1.3 for secure communication.
              </p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/90 font-medium group-hover:underline">Learn more</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Button asChild className="bg-primary/90 hover:bg-primary text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 px-8 py-6 h-auto text-base">
            <Link href="/contact">Schedule a demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
