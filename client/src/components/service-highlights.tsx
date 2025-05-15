import { Button } from "@/components/ui/button";
import { ServerIcon, CloudIcon, ShieldCheckIcon, LineChartIcon, ArrowRightIcon } from "@/lib/icons";

const services = [
  {
    icon: <ServerIcon className="text-primary text-2xl h-6 w-6" />,
    title: "Network Management",
    description: "Complete monitoring, maintenance, and optimization of your business network infrastructure.",
  },
  {
    icon: <CloudIcon className="text-primary text-2xl h-6 w-6" />,
    title: "Cloud Services",
    description: "Secure, scalable cloud solutions with migration, management, and optimization support.",
  },
  {
    icon: <ShieldCheckIcon className="text-primary text-2xl h-6 w-6" />,
    title: "Cybersecurity",
    description: "Comprehensive protection against threats with monitoring, testing, and incident response.",
  },
  {
    icon: <LineChartIcon className="text-primary text-2xl h-6 w-6" />,
    title: "Business Analytics",
    description: "Data-driven insights and reporting tools to help optimize your business operations.",
  },
];

export default function ServiceHighlights() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium">OUR SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold font-inter mt-2 mb-4">Comprehensive IT Solutions for SMBs</h2>
          <p className="text-neutral-600 text-lg">From network management to cybersecurity, we provide the technology backbone your business needs to thrive in the digital age.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card bg-neutral-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-lg bg-primary bg-opacity-10 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold font-inter mb-3">{service.title}</h3>
              <p className="text-neutral-600 mb-4">{service.description}</p>
              <a href="#" className="flex items-center text-primary font-medium hover:underline">
                Learn More
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            variant="outline" 
            className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          >
            View All Services
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
