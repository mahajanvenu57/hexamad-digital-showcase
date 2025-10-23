import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-display font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using Hexamad Digital's services, you accept and agree to be bound by the terms 
                and provisions of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold mb-4">2. Services Description</h2>
              <p className="text-muted-foreground mb-4">
                Hexamad Digital provides digital marketing services including but not limited to SEO optimization, 
                social media marketing, PPC advertising, content strategy, web development, and analytics reporting.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold mb-4">3. Client Responsibilities</h2>
              <p className="text-muted-foreground mb-4">
                Clients are responsible for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Providing accurate and complete information</li>
                <li>Timely payment for services rendered</li>
                <li>Providing necessary access to accounts and platforms</li>
                <li>Reviewing and approving deliverables in a timely manner</li>
                <li>Ensuring content provided does not violate any laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold mb-4">4. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                Payment terms will be outlined in individual service agreements. Unless otherwise specified, 
                payments are due upon receipt of invoice. Late payments may result in suspension of services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                All intellectual property rights in deliverables will be transferred to the client upon full 
                payment, unless otherwise specified in the service agreement. Hexamad Digital retains the right 
                to showcase completed work in portfolios and marketing materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold mb-4">6. Confidentiality</h2>
              <p className="text-muted-foreground mb-4">
                Both parties agree to maintain confidentiality of proprietary information shared during the 
                course of the business relationship.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                Hexamad Digital shall not be liable for any indirect, incidental, special, or consequential 
                damages arising out of or related to the use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold mb-4">8. Termination</h2>
              <p className="text-muted-foreground mb-4">
                Either party may terminate services with written notice as specified in the service agreement. 
                Clients remain responsible for payment of all services rendered prior to termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold mb-4">9. Changes to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify these terms at any time. Continued use of our services following 
                any changes constitutes acceptance of those changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For questions about these terms, please contact us at:
              </p>
              <p className="text-muted-foreground">
                Email: <a href="mailto:contact@hexamad.in" className="text-primary hover:underline">contact@hexamad.in</a><br />
                Phone: <a href="tel:+918087507773" className="text-primary hover:underline">+91-8087507773</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
