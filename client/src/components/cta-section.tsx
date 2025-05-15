import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-inter leading-tight mb-6">Ready to Transform Your Business Technology?</h2>
              <p className="text-white text-opacity-90 text-lg mb-8">Get a free technology assessment and learn how our managed IT services can help your business thrive in the digital age.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="px-8 py-3 bg-white text-primary hover:bg-neutral-100 font-medium text-lg h-auto"
                  asChild
                >
                  <a href="#contact">Schedule a Consultation</a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-3 bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10 font-medium text-lg h-auto"
                >
                  View Success Stories
                </Button>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Business analytics dashboard" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
