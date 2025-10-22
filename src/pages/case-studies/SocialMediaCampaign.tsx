import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import saajLogo from "@/assets/saaj-logo.png";

const SocialMediaCampaign = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <Link 
          to="/portfolio" 
          className="inline-flex items-center text-primary hover:text-primary-glow transition-colors mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
            Social Media Campaign
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-bold mt-6 mb-6">
            Social Media Campaign <span className="text-gradient">Success</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Hexamad Digital partnered with Saaj by Gargee—a contemporary saree and accessories brand led by a prominent fashion influencer—to develop a distinguished online presence, cultivating both brand and personal recognition in the competitive world of ethnic fashion.
          </p>
        </div>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden mb-16 animate-fade-in-up shadow-elegant bg-[#1a3838] flex items-center justify-center p-12">
          <img 
            src={saajLogo}
            alt="Saaj by Gargee Logo"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Overview */}
            <section className="animate-fade-in-up">
              <h2 className="text-3xl font-display font-bold mb-6">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Saaj by Gargee offers exclusive saree collections, elegant draping tutorials, and personalized fashion inspiration for modern women. As the brand's owner is a renowned fashion influencer, the project demanded a dual focus: establishing a user-friendly e-commerce platform and amplifying her personal brand alongside business growth.
              </p>
            </section>

            {/* Objectives */}
            <section className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-3xl font-display font-bold mb-6">Objectives</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Create a visually striking, intuitive website to showcase Saaj's contemporary saree collection and accessories.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Integrate interactive tutorials and fashion galleries to inspire site visitors.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Expand brand awareness and drive online sales.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Boost the owner's personal brand visibility and her influence on social media.</span>
                </li>
              </ul>
            </section>

            {/* Solution */}
            <section className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-display font-bold mb-6">Solution</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Website Design & Development</h3>
                  <p className="text-muted-foreground mb-4">The Hexamad Digital team delivered a modern, mobile-friendly website highlighting:</p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-muted-foreground">Dedicated pages for curated saree collections, style tips, and draping tutorials, blending commerce with education.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-muted-foreground">Seamless shopping experience with clear calls-to-action, encouraging visitor engagement and purchases.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-muted-foreground">Integrated contact options for personalized support and inquiries.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Personal Branding & Social Media Growth</h3>
                  <p className="text-muted-foreground mb-4">Leveraging the owner's fashion influencer status, Hexamad Digital implemented:</p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-muted-foreground">A cohesive content strategy aligning social media visuals, posts, and stories with the website brand message.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-muted-foreground">Collaboration with micro- and macro-influencers to extend reach and credibility in the ethnic fashion community.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-muted-foreground">Regular campaign initiatives—such as styling challenges and tutorial teasers—to build authentic engagement and foster community growth.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-muted-foreground">Personal branding support for the owner, positioning her as a key opinion leader through consistent content, collaborations, and feature stories.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Results */}
            <section className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl font-display font-bold mb-6">Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-card p-6 rounded-xl border border-border">
                  <div className="flex items-start">
                    <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Strong surge in website traffic and increased online sales for saree collections and accessories.</span>
                  </div>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border">
                  <div className="flex items-start">
                    <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Expanded social media following across platforms, raising both brand and personal visibility in the target market.</span>
                  </div>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border">
                  <div className="flex items-start">
                    <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">High engagement rates on tutorials, styling tips, and influencer-driven campaigns, resulting in a growing, loyal audience.</span>
                  </div>
                </div>
                <div className="bg-gradient-card p-6 rounded-xl border border-border">
                  <div className="flex items-start">
                    <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Elevated recognition of the owner as an influential figure in the contemporary saree styling space.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Client Testimonial */}
            <section className="animate-fade-in-up bg-gradient-card p-8 rounded-xl border border-border" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-3xl font-display font-bold mb-6">Client Testimonial</h2>
              <blockquote className="text-lg text-muted-foreground italic leading-relaxed">
                "Hexamad Digital has transformed the way Saaj by Gargee connects with fashion enthusiasts online. Their strategic approach to web design, social media, and personal branding brought new energy to our digital presence and contributed greatly to our business growth."
              </blockquote>
              <p className="mt-4 font-semibold">— Gargee Ganesh, Founder</p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Details */}
            <div className="bg-gradient-card p-6 rounded-xl border border-border animate-fade-in-up sticky top-8">
              <h3 className="text-xl font-display font-bold mb-6">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Client</p>
                  <p className="font-semibold">Saaj by Gargee</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Industry</p>
                  <p className="font-semibold">Fashion & E-commerce</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Duration</p>
                  <p className="font-semibold">2 months</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Services</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Social Media Marketing
                    </span>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Web Development
                    </span>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Personal Branding
                    </span>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Content Strategy
                    </span>
                  </div>
                </div>
                <div>
                  <a 
                    href="https://saajbygargee.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary-glow transition-colors mt-4"
                  >
                    Visit Website
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card p-12 rounded-2xl border border-border animate-fade-in">
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to Transform Your <span className="text-gradient">Digital Presence</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            This case study demonstrates Hexamad Digital's expertise in merging e-commerce, influencer marketing, and personal branding to achieve outstanding growth for emerging fashion brands.
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

export default SocialMediaCampaign;