import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const PpcRoi = () => {
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
            PPC
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-bold mt-6 mb-6">
            PPC ROI <span className="text-gradient">Optimization</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Achieving 400% ROI improvement for a B2B client through strategic PPC campaign management and optimization.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden mb-16 animate-fade-in-up shadow-elegant">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
            alt="PPC Campaign"
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-12">
            <section className="animate-fade-in-up">
              <h2 className="text-3xl font-display font-bold mb-6">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                A B2B software company was spending significant budget on PPC campaigns with minimal returns. High cost-per-click, poor quality scores, and low conversion rates were draining their marketing budget. We restructured their entire PPC strategy to deliver exceptional ROI.
              </p>
            </section>

            <section className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-3xl font-display font-bold mb-6">The Challenge</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">High CPC with low conversion rates (below 2%)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Poor quality scores affecting ad performance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Inefficient budget allocation across campaigns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Lack of proper tracking and attribution</span>
                </li>
              </ul>
            </section>

            <section className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-display font-bold mb-6">Our Solution</h2>
              <div className="space-y-6">
                <div className="bg-gradient-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold mb-3">Campaign Restructuring</h3>
                  <p className="text-muted-foreground">Complete overhaul of campaign structure, ad groups, and keyword targeting to improve quality scores and relevance.</p>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold mb-3">Landing Page Optimization</h3>
                  <p className="text-muted-foreground">Created dedicated landing pages optimized for conversion with clear CTAs and value propositions.</p>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold mb-3">Advanced Bidding Strategies</h3>
                  <p className="text-muted-foreground">Implemented smart bidding strategies and automated rules for optimal budget allocation.</p>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold mb-3">Conversion Tracking</h3>
                  <p className="text-muted-foreground">Set up comprehensive conversion tracking and attribution modeling for data-driven decisions.</p>
                </div>
              </div>
            </section>

            <section className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl font-display font-bold mb-6">Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-card p-6 rounded-xl border border-border text-center">
                  <p className="text-4xl font-bold text-gradient mb-2">400%</p>
                  <p className="text-muted-foreground">ROI Improvement</p>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border text-center">
                  <p className="text-4xl font-bold text-gradient mb-2">65%</p>
                  <p className="text-muted-foreground">Reduction in CPC</p>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border text-center">
                  <p className="text-4xl font-bold text-gradient mb-2">8.5%</p>
                  <p className="text-muted-foreground">Conversion Rate Achieved</p>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border text-center">
                  <p className="text-4xl font-bold text-gradient mb-2">9.2</p>
                  <p className="text-muted-foreground">Average Quality Score</p>
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
                  <p className="font-semibold">B2B Software</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Duration</p>
                  <p className="font-semibold">4 months</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Services</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Google Ads
                    </span>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      LinkedIn Ads
                    </span>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Landing Pages
                    </span>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Analytics
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-card p-12 rounded-2xl border border-border animate-fade-in">
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to Maximize Your <span className="text-gradient">PPC ROI</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us optimize your paid advertising campaigns for maximum returns on your investment.
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

export default PpcRoi;