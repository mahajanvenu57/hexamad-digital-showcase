import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-display font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information you provide directly to us, including name, email address, phone number, 
                and any other information you choose to provide when you contact us or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Communicate with you about our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without 
                your consent, except as described in this policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold mb-4">5. Cookies and Tracking</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to collect information about your browsing 
                activities and improve your experience on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to access, correct, or delete your personal information. You may also object 
                to or restrict certain processing of your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold mb-4">7. Changes to This Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting 
                the new policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this privacy policy, please contact us at:
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

export default PrivacyPolicy;
