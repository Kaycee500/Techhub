import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/lib/icons";

export default function AboutSection() {
  const stats = [
    { value: "200+", label: "Active Clients" },
    { value: "50+", label: "IT Specialists" },
    { value: "24/7", label: "Support Availability" },
    { value: "15+", label: "Industry Certifications" }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500" 
                alt="IT professional in a suit" 
                className="rounded-xl shadow-md h-auto w-full object-cover"
              />
              
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
                alt="Digital security concept" 
                className="rounded-xl shadow-md h-auto w-full object-cover"
              />
              
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
                alt="Data analytics dashboard" 
                className="rounded-xl shadow-md h-auto w-full object-cover"
              />
              
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500" 
                alt="Cloud computing concept" 
                className="rounded-xl shadow-md h-auto w-full object-cover"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-primary font-medium">ABOUT US</span>
            <h2 className="text-3xl md:text-4xl font-bold font-inter mt-2 mb-6">Your Trusted Technology Partner Since 2010</h2>
            <p className="text-neutral-600 text-lg mb-6">TechSphere was founded with a simple mission: to provide enterprise-grade IT solutions that are accessible and affordable for small and medium-sized businesses.</p>
            <p className="text-neutral-600 text-lg mb-8">Today, we serve over 200 clients across the country, helping them leverage technology to drive growth, improve efficiency, and stay secure in an increasingly complex digital landscape.</p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-neutral-600">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <Button 
              className="inline-flex items-center px-6 py-3"
              asChild
            >
              <a href="#contact">
                Learn More About Our Approach
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
