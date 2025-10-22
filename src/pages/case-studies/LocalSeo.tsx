import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const LocalSeo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <Link 
          to="/portfolio" 
          className="inline-flex items-center text-primary hover:text-primary-glow transition-colors mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </Link>

        <div className="mb-12 animate-fade-in">
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
            SEO
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-bold mt-6 mb-6">
            Local SEO <span className="text-gradient">Domination</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            How we helped a restaurant chain achieve #1 local rankings across multiple locations and increase foot traffic significantly.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden mb-16 animate-fade-in-up shadow-elegant">
          <img 
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&h=600&fit=crop"
            alt="Local SEO"
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-12">
            <section className="animate-fade-in-up">
              <h2 className="text-3xl font-display font-bold mb-6">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                A growing restaurant chain with 8 locations was struggling to appear in local search results. Despite excellent food and service, they were losing customers to competitors who dominated local search. We implemented a comprehensive local SEO strategy that transformed their online visibility and drove significant foot traffic.
              </p>
            </section>

            <section className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-3xl font-display font-bold mb-6">The Challenge</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Poor visibility in Google Maps and local pack results</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Inconsistent NAP (Name, Address, Phone) information across web</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Limited online reviews and reputation management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Competitors dominating "near me" searches</span>
                </li>
              </ul>
            </section>

            <section className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-display font-bold mb-6">Our Solution</h2>
              <div className="space-y-6">
                <div className="bg-gradient-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold mb-3">Google Business Profile Optimization</h3>
                  <p className="text-muted-foreground">Optimized all 8 location profiles with complete information, high-quality images, and regular posts.</p>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold mb-3">Citation Building</h3>
                  <p className="text-muted-foreground">Created consistent NAP information across 50+ relevant directories and local listings.</p>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold mb-3">Review Management</h3>
                  <p className="text-muted-foreground">Implemented review generation system and reputation management strategy.</p>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold mb-3">Local Content Creation</h3>
                  <p className="text-muted-foreground">Developed location-specific landing pages and local content strategy.</p>
                </div>
              </div>
            </section>

            <section className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl font-display font-bold mb-6">Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-card p-6 rounded-xl border border-border text-center">
                  <p className="text-4xl font-bold text-gradient mb-2">#1</p>
                  <p className="text-muted-foreground">Local Ranking Achieved</p>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border text-center">
                  <p className="text-4xl font-bold text-gradient mb-2">275%</p>
                  <p className="text-muted-foreground">Increase in Map Views</p>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border text-center">
                  <p className="text-4xl font-bold text-gradient mb-2">420+</p>
                  <p className="text-muted-foreground">5-Star Reviews Generated</p>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border text-center">
                  <p className="text-4xl font-bold text-gradient mb-2">185%</p>
                  <p className="text-muted-foreground">Increase in Direction Requests</p>
                </div>
              </div>
            </section>

            <section className="animate-fade-in-up bg-gradient-card p-8 rounded-xl border border-border" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-3xl font-display font-bold mb-6">Client Testimonial</h2>
              <blockquote className="text-lg text-muted-foreground italic leading-relaxed">
                "The impact on our business has been phenomenal. We've seen a dramatic increase in walk-ins and reservations directly from Google searches. Hexamad Digital's local SEO expertise has given us a competitive edge."
              </blockquote>
              <p className="mt-4 font-semibold">— Restaurant Chain Owner</p>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-card p-6 rounded-xl border border-border animate-fade-in-up sticky top-8">
              <h3 className="text-xl font-display font-bold mb-6">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Industry</p>
                  <p className="font-semibold">Restaurant & Hospitality</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Duration</p>
                  <p className="font-semibold">5 months</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Locations</p>
                  <p className="font-semibold">8 Locations</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Services</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Local SEO
                    </span>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      GBP Optimization
                    </span>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Citation Building
                    </span>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Reputation Management
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-card p-12 rounded-2xl border border-border animate-fade-in">
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to Dominate <span className="text-gradient">Local Search</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you achieve top rankings in local searches and drive more foot traffic to your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Start Your Project
            </Link>
            <Link to="/portfolio" className="btn-secondary">
              View More Case Studies
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LocalSeo;