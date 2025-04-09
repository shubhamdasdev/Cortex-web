import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/HeroSection"), { ssr: true });
const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"), { ssr: true });
const UseCasesSection = dynamic(() => import("@/components/UseCasesSection"), { ssr: true });
const CtaSection = dynamic(() => import("@/components/CtaSection"), { ssr: true });

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <CtaSection />
    </>
  );
}
