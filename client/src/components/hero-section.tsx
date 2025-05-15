import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1000')` }}
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-20 md:py-28 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-inter leading-tight mb-6">
            Transforming IT Management for Growing Businesses
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 opacity-90">
            Comprehensive IT services and SaaS solutions designed to power your business forward. No technical headaches, just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-accent hover:bg-accent-dark text-white font-medium px-8 py-3 text-lg h-auto"
              asChild
            >
              <a href="#pricing">View Service Plans</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white hover:bg-neutral-200 text-primary font-medium px-8 py-3 text-lg h-auto border-white"
              asChild
            >
              <a href="#contact">Get a Free Consultation</a>
            </Button>
          </div>
          <div className="mt-10 pt-6 border-t border-white border-opacity-20">
            <div className="flex flex-wrap items-center gap-6">
              <span className="text-sm font-medium">Trusted by businesses like:</span>
              <div className="flex flex-wrap gap-8 items-center opacity-80">
                <span className="font-bold text-lg">ACME Corp</span>
                <span className="font-bold text-lg">GlobalTech</span>
                <span className="font-bold text-lg">FutureSoft</span>
                <span className="font-bold text-lg">InnovateCo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
