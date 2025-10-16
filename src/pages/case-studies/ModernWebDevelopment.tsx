import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import fitnessGadhImage from "@/assets/fitness-gadh.jpeg";

const ModernWebDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <Link 
          to="/portfolio" 
          className="inline-flex items-center text-primary hover:text-primary-glow mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </Link>

        {/* Hero Section */}
        <div className="mb-12 animate-fade-in">
          <div className="mb-6">
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              Web Development
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Fitness Gadh: <span className="text-gradient">Digital Transformation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Fitness Gadh approached Hexamad Digital to elevate their digital presence and attract a wider audience for their premier fitness center located in India. Through a comprehensive website development and social media strategy, Hexamad Digital transformed Fitness Gadh into a standout brand in the competitive fitness industry.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up bg-card/50">
          <img 
            src={fitnessGadhImage} 
            alt="Fitness Gadh Website" 
            className="w-full h-[400px] object-contain"
          />
        </div>

        {/* Project Overview */}
        <section className="mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-display font-bold mb-6">Project Overview</h2>
          <div className="bg-gradient-card p-8 rounded-2xl border border-border">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fitness Gadh is renowned for its state-of-the-art gym equipment, outdoor turf training, yoga studios, and expert personal trainers, serving over 1,000 active members and boasting more than 10 certified trainers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The client sought a dynamic, user-friendly website and growth in their online reach to engage both potential and existing members.
            </p>
          </div>
        </section>

        {/* Objectives */}
        <section className="mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-display font-bold mb-6">Objectives</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Create a professional and visually impactful website representing Fitness Gadh's brand values",
              "Highlight unique offerings such as specialized training zones and holistic wellness programs",
              "Drive membership signups and free trial bookings",
              "Grow and engage their social media audience across major platforms"
            ].map((objective, index) => (
              <div key={index} className="flex items-start gap-3 bg-card p-6 rounded-xl border border-border">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                <p className="text-foreground">{objective}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Solution */}
        <section className="mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-display font-bold mb-6">Solution</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-display font-semibold mb-4 text-primary">
              Website Design & Development
            </h3>
            <div className="bg-gradient-card p-8 rounded-2xl border border-border">
              <p className="text-muted-foreground mb-6">
                Hexamad Digital crafted a website that seamlessly blends traditional strength training with outdoor functional fitness and wellness content. Key features included:
              </p>
              <ul className="space-y-4">
                {[
                  "An intuitive and mobile-responsive design tailored for easy navigation and conversion",
                  "Dedicated sections for facilities, trainers, transformation stories, class schedules, and membership plans",
                  "Clear calls-to-action for free trial registration and membership sign-ups, contributing to lead generation"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-display font-semibold mb-4 text-primary">
              Social Media Growth
            </h3>
            <div className="bg-gradient-card p-8 rounded-2xl border border-border">
              <p className="text-muted-foreground mb-6">
                To boost Fitness Gadh's visibility, Hexamad Digital executed a targeted social media strategy involving:
              </p>
              <ul className="space-y-4">
                {[
                  "Consistent branding and creative content across all platforms, highlighting member success stories and expert trainers",
                  "Engaging posts featuring live training sessions, facility walkthroughs, fitness tips, and special events to foster community interaction",
                  "Strategic use of hashtags, influencer collaborations, and tailored ad campaigns to reach new audiences and drive active engagement"
                ].map((strategy, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-foreground">{strategy}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-display font-bold mb-6">Results</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Website Traffic",
                description: "Significant increase in website traffic and membership inquiries, converting visitors into active members"
              },
              {
                title: "Social Growth",
                description: "Notable growth in social media following and engagement, expanding Fitness Gadh's online community"
              },
              {
                title: "Lead Generation",
                description: "Enhanced lead generation through integrated digital channels, driving measurable business growth"
              }
            ].map((result, index) => (
              <div key={index} className="bg-gradient-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-display font-semibold mb-3 text-primary">
                  {result.title}
                </h3>
                <p className="text-muted-foreground">{result.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-12 animate-fade-in-up">
          <div className="bg-primary/5 p-8 md:p-12 rounded-2xl border border-primary/20">
            <h2 className="text-2xl font-display font-bold mb-6">Client Testimonial</h2>
            <blockquote className="text-lg text-foreground italic mb-4">
              "Hexamad Digital delivered beyond our expectations, creating a website and social media presence that truly reflects the energy and professionalism of Fitness Gadh. Our membership and community engagement have soared since the launch."
            </blockquote>
            <p className="text-muted-foreground font-medium">— Fitness Gadh Management</p>
          </div>
        </section>

        {/* Visit Website CTA */}
        <section className="text-center animate-fade-in-up">
          <a 
            href="https://fitnessgadh.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary"
          >
            Visit Fitness Gadh Website
            <ExternalLink size={18} />
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ModernWebDevelopment;
