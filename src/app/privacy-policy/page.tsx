import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-16 md:pt-20 lg:pt-28">
      <div className="container py-16 md:py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif mb-8">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground mb-8">
            Last updated: March 14, 2023
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">Introduction</h2>
          <p className="text-muted-foreground mb-4">
            Cortex AI, Inc. ("Cortex," "we," "us," or "our") respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you use our services, website, and platform (collectively, the "Services") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">Information We Collect</h2>
          <p className="text-muted-foreground mb-4">
            We collect several types of information from and about users of our Services, including information:
          </p>
          <ul className="text-muted-foreground mb-4 list-disc pl-6 space-y-2">
            <li>By which you may be personally identified, such as name, email address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information");</li>
            <li>About your internet connection, the equipment you use to access our Services, and usage details;</li>
            <li>Content and data provided through your use of the Services.</li>
          </ul>

          <h2 className="text-2xl font-serif mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We use information that we collect about you or that you provide to us, including any personal information:
          </p>
          <ul className="text-muted-foreground mb-4 list-disc pl-6 space-y-2">
            <li>To provide, maintain, and improve our Services;</li>
            <li>To process and complete transactions, and send you related information, including confirmations;</li>
            <li>To send you technical notices, updates, security alerts, and support and administrative messages;</li>
            <li>To respond to your comments, questions, and requests, and provide customer service;</li>
            <li>To communicate with you about products, services, offers, promotions, and events, and provide other news or information about us;</li>
            <li>To monitor and analyze trends, usage, and activities in connection with our Services;</li>
            <li>To detect, prevent, and address fraud, unauthorized access, and other illegal activity;</li>
            <li>To personalize and improve the Services and provide content or features that match user profiles or interests.</li>
          </ul>

          <h2 className="text-2xl font-serif mt-8 mb-4">Data Security</h2>
          <p className="text-muted-foreground mb-4">
            We implement appropriate security measures designed to protect your information from unauthorized access, alteration, or disclosure. These measures include:
          </p>
          <ul className="text-muted-foreground mb-4 list-disc pl-6 space-y-2">
            <li>Encryption of sensitive data both in transit and at rest;</li>
            <li>Strict access controls and authentication requirements for our personnel;</li>
            <li>Regular security assessments and monitoring;</li>
            <li>Employee training on security best practices.</li>
          </ul>
          <p className="text-muted-foreground mb-4">
            However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your personal information.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">Your Rights and Choices</h2>
          <p className="text-muted-foreground mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="text-muted-foreground mb-4 list-disc pl-6 space-y-2">
            <li>The right to access personal information we hold about you;</li>
            <li>The right to request correction of inaccurate personal information;</li>
            <li>The right to request deletion of your personal information;</li>
            <li>The right to restrict or object to processing of your personal information;</li>
            <li>The right to data portability.</li>
          </ul>
          <p className="text-muted-foreground mb-4">
            To exercise any of these rights, please contact us at <Link href="mailto:privacy@cortex.ai" className="text-secondary hover:underline">privacy@cortex.ai</Link>.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">Contact Information</h2>
          <p className="text-muted-foreground mb-4">
            If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <p className="text-muted-foreground mb-4">
            <Link href="mailto:privacy@cortex.ai" className="text-secondary hover:underline">privacy@cortex.ai</Link><br />
            Cortex AI, Inc.<br />
            123 Financial Avenue<br />
            San Francisco, CA 94103
          </p>
        </div>
      </div>
    </div>
  );
}
