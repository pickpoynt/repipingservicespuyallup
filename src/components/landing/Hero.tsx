import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Droplets, Search, Zap } from "lucide-react";
import React from "react";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  image?: string;
}

const Hero = ({
  title = (
    <>
      slab leak repair asheville nc
      <span className="block text-blue-400 mt-2">Asheville Foundation Plumbing: Precision Leak Detection</span>
    </>
  ),
  subtitle = "Expert slab leak detection and non-invasive repair services in Asheville, North Carolina. We use advanced acoustic technology to pinpoint leaks under your concrete foundation and fix them with minimal disruption to your home. Licensed, insured, and locally trusted specialists.",
  image = "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80"
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Slab Leak Repair Asheville"
          className="w-full h-full object-cover"
        />
        {/* Unique Image Overlay as requested */}
        <div className="absolute inset-0 opacity-30 mix-blend-multiply">
          <img
            src="https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?auto=format&fit=crop&q=80"
            alt="Water Texture Overlay"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-blue-900/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-3/5 text-left animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
            <Droplets className="w-4 h-4" />
            <span>Asheville's #1 Leak Detection Specialists</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight tracking-tight">
            {title}
          </h1>

          <p className="text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed animate-fade-in-delay-1">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-none h-14 px-8 text-lg font-bold shadow-xl shadow-blue-900/40" asChild>
              <a href="tel:8777921410" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (877) 792-1410
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 h-14 px-8 text-lg font-semibold" asChild>
              <a href="#services" className="flex items-center gap-2">
                Our Services
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-in-delay-3 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
                <Search className="w-5 h-5 text-blue-300" />
              </div>
              <span className="text-sm font-medium text-slate-300">Acoustic Detect</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
                <Shield className="w-5 h-5 text-blue-300" />
              </div>
              <span className="text-sm font-medium text-slate-300">Licensed Experts</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
                <Droplets className="w-5 h-5 text-blue-300" />
              </div>
              <span className="text-sm font-medium text-slate-300">Minimal Digging</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
                <Zap className="w-5 h-5 text-blue-300" />
              </div>
              <span className="text-sm font-medium text-slate-300">Rapid Response</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Badge */}
      <div className="absolute right-[-5%] bottom-[-5%] w-[40%] h-[80%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Hero;
