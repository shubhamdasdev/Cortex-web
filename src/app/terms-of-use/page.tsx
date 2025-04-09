import Link from "next/link";

export default function TermsOfUsePage() {
  return (
    <div className="pt-16 md:pt-20 lg:pt-28">
      <div className="container py-16 md:py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif mb-8">Terms of Use</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground mb-8">
            Last updated: March 14, 2023
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">Acceptance of Terms</h2>
          <p className="text-muted-foreground mb-4">
            These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Cortex AI, Inc. ("Cortex," "we," "us," or "our"), concerning your access to and use of the Cortex platform and associated services (collectively, the "Services"). By accessing or using the Services, you agree to be bound by these Terms of Use. If you do not agree to these Terms of Use, you must not access or use the Services.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">Services Description</h2>
          <p className="text-muted-foreground mb-4">
            Cortex provides an AI-powered platform designed for financial services professionals to automate and enhance various analytical and research tasks. Our Services may include, but are not limited to:
          </p>
          <ul className="text-muted-foreground mb-4 list-disc pl-6 space-y-2">
            <li>AI-assisted financial analysis and research;</li>
            <li>Document processing and information extraction;</li>
            <li>Data visualization and report generation;</li>
            <li>Workflow automation tools;</li>
            <li>Integration with external data sources and systems.</li>
          </ul>

          <h2 className="text-2xl font-serif mt-8 mb-4">User Accounts</h2>
          <p className="text-muted-foreground mb-4">
            When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
          </p>
          <p className="text-muted-foreground mb-4">
            You are responsible for safeguarding the password that you use to access the Services and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">Intellectual Property</h2>
          <p className="text-muted-foreground mb-4">
            The Services and their original content, features, and functionality are and will remain the exclusive property of Cortex and its licensors. The Services are protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Cortex.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">User Content</h2>
          <p className="text-muted-foreground mb-4">
            By uploading, submitting, or otherwise making available any content to the Services ("User Content"), you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, perform, display, distribute, and otherwise disclose to third parties any such material for the purpose of providing and improving the Services.
          </p>
          <p className="text-muted-foreground mb-4">
            You represent and warrant that: (i) the User Content is yours or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your User Content on or through the Services does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-muted-foreground mb-4">
            In no event shall Cortex, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Services; (ii) any conduct or content of any third party on the Services; (iii) any content obtained from the Services; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">Governing Law</h2>
<p className="text-muted-foreground mb-4">
  These Terms shall be governed by and construed in accordance with the laws of the State of Illinois, United States, without regard to its conflict of law provisions. Any legal action or proceeding relating to your access to or use of Cortex's services or these Terms shall be instituted exclusively in a state or federal court located in Cook County, Illinois. You agree to submit to the jurisdiction of, and agree that venue is proper in, these courts for any such legal action or proceeding.
</p>

          <h2 className="text-2xl font-serif mt-8 mb-4">Changes to Terms</h2>
          <p className="text-muted-foreground mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">Contact Information</h2>
          <p className="text-muted-foreground mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="text-muted-foreground mb-4">
            <Link href="mailto:legal@Cortex.ai" className="text-secondary hover:underline">legal@Cortex.info</Link><br />
            Cortex AI, Inc.<br />
            123 Financial Avenue<br />
            Chicago, IL 60606
          </p>
        </div>
      </div>
    </div>
  );
}
