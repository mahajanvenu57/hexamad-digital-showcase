import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const EcommerceSeo = () => {
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
            E-commerce SEO <span className="text-gradient">Transformation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            How we increased organic traffic by 300% for a leading fashion brand through strategic SEO optimization.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden mb-16 animate-fade-in-up shadow-elegant">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
            alt="E-commerce SEO"
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-12">
            <section className="animate-fade-in-up">
              <h2 className="text-3xl font-display font-bold mb-6">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                A leading fashion e-commerce brand was struggling with low organic visibility and poor search rankings. Their website had great products but wasn't reaching potential customers through search engines. We implemented a comprehensive SEO strategy that transformed their online presence.
              </p>
            </section>

            <section className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-3xl font-display font-bold mb-6">The Challenge</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Website ranking on page 3-4 for target keywords</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Poor technical SEO foundation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Minimal organic traffic and conversions</span>
                </li>
              </ul>
            </section>

            <section className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-display font-bold mb-6">Our Solution</h2>
              <div className="space-y-6">
                <div className="bg-gradient-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold mb-3">Technical SEO Audit</h3>
                  <p className="text-muted-foreground">Fixed critical issues including site speed, mobile responsiveness, and crawlability.</p>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold mb-3">Keyword Strategy</h3>
                  <p className="text-muted-foreground">Developed comprehensive keyword mapping and optimized product pages for high-intent searches.</p>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold mb-3">Content Optimization</h3>
                  <p className="text-muted-foreground">Created SEO-optimized category descriptions and product content.</p>
                </div>
              </div>
            </section>

            <section className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl font-display font-bold mb-6">Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-card p-6 rounded-xl border border-border text-center">
                  <p className="text-4xl font-bold text-gradient mb-2">300%</p>
                  <p className="text-muted-foreground">Increase in Organic Traffic</p>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border text-center">
                  <p className="text-4xl font-bold text-gradient mb-2">150+</p>
                  <p className="text-muted-foreground">Keywords in Top 10</p>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border text-center">
                  <p className="text-4xl font-bold text-gradient mb-2">250%</p>
                  <p className="text-muted-foreground">Revenue Growth</p>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border text-center">
                  <p className="text-4xl font-bold text-gradient mb-2">3 months</p>
                  <p className="text-muted-foreground">To First Page Rankings</p>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-card p-6 rounded-xl border border-border animate-fade-in-up sticky top-8">
              <h3 className="text-xl font-display font-bold mb-6">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Industry</p>
                  <p className="font-semibold">Fashion E-commerce</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Duration</p>
                  <p className="font-semibold">3 months</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Services</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Technical SEO
                    </span>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Content Strategy
                    </span>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Link Building
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-card p-12 rounded-2xl border border-border animate-fade-in">
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to Boost Your <span className="text-gradient">Search Rankings</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you achieve similar results with our proven SEO strategies.
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

export default EcommerceSeo;