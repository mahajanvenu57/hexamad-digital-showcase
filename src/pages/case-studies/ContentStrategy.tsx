import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const ContentStrategy = () => {
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
            Content Strategy
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-bold mt-6 mb-6">
            Content Strategy <span className="text-gradient">Overhaul</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            How a comprehensive content strategy doubled engagement rates and established thought leadership for a tech startup.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden mb-16 animate-fade-in-up shadow-elegant">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
            alt="Content Strategy"
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-12">
            <section className="animate-fade-in-up">
              <h2 className="text-3xl font-display font-bold mb-6">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                A fast-growing tech startup had valuable insights to share but lacked a cohesive content strategy. Their blog posts were sporadic, social media presence was inconsistent, and engagement was minimal. We developed and executed a comprehensive content strategy that transformed their digital presence.
              </p>
            </section>

            <section className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-3xl font-display font-bold mb-6">The Challenge</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Inconsistent content publishing schedule</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Low engagement across all channels</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Lack of clear brand voice and messaging</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">No content optimization for SEO</span>
                </li>
              </ul>
            </section>

            <section className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-display font-bold mb-6">Our Solution</h2>
              <div className="space-y-6">
                <div className="bg-gradient-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold mb-3">Content Audit & Strategy</h3>
                  <p className="text-muted-foreground">Conducted comprehensive audit and developed data-driven content strategy aligned with business goals.</p>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold mb-3">Editorial Calendar</h3>
                  <p className="text-muted-foreground">Created 3-month rolling editorial calendar with topics, formats, and distribution channels.</p>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold mb-3">Content Production</h3>
                  <p className="text-muted-foreground">Produced high-quality blog posts, whitepapers, infographics, and video content optimized for each platform.</p>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold mb-3">Distribution & Promotion</h3>
                  <p className="text-muted-foreground">Implemented multi-channel distribution strategy including social media, email, and partnerships.</p>
                </div>
              </div>
            </section>

            <section className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl font-display font-bold mb-6">Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-card p-6 rounded-xl border border-border text-center">
                  <p className="text-4xl font-bold text-gradient mb-2">2x</p>
                  <p className="text-muted-foreground">Engagement Rate</p>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border text-center">
                  <p className="text-4xl font-bold text-gradient mb-2">180%</p>
                  <p className="text-muted-foreground">Organic Traffic Growth</p>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border text-center">
                  <p className="text-4xl font-bold text-gradient mb-2">45+</p>
                  <p className="text-muted-foreground">Content Pieces Published</p>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border text-center">
                  <p className="text-4xl font-bold text-gradient mb-2">350%</p>
                  <p className="text-muted-foreground">Social Media Growth</p>
                </div>
              </div>
            </section>

            <section className="animate-fade-in-up bg-gradient-card p-8 rounded-xl border border-border" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-3xl font-display font-bold mb-6">Client Testimonial</h2>
              <blockquote className="text-lg text-muted-foreground italic leading-relaxed">
                "Hexamad Digital didn't just create content—they built a content engine that positions us as industry leaders. The strategic approach and consistent execution have transformed our brand presence."
              </blockquote>
              <p className="mt-4 font-semibold">— Marketing Director, Tech Startup</p>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-card p-6 rounded-xl border border-border animate-fade-in-up sticky top-8">
              <h3 className="text-xl font-display font-bold mb-6">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Industry</p>
                  <p className="font-semibold">Technology</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Duration</p>
                  <p className="font-semibold">3 months</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Services</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Content Strategy
                    </span>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Content Production
                    </span>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      SEO Writing
                    </span>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Social Media
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-card p-12 rounded-2xl border border-border animate-fade-in">
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to Elevate Your <span className="text-gradient">Content Strategy</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us create a comprehensive content strategy that drives engagement and establishes your thought leadership.
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

export default ContentStrategy;