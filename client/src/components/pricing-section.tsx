import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CheckIcon } from "@/lib/icons";

const pricingPlans = [
  {
    name: "Bronze",
    description: "Essential IT support for small businesses",
    price: "$799",
    priceDetail: "/month",
    priceSubtext: "Starting price for up to 10 devices",
    popular: false,
    features: [
      "Network monitoring & maintenance",
      "Help desk support (8am-5pm, M-F)",
      "Basic security protection",
      "Email & productivity tools",
      "Monthly system health reports"
    ]
  },
  {
    name: "Silver",
    description: "Complete IT management for growing teams",
    price: "$1,499",
    priceDetail: "/month",
    priceSubtext: "Starting price for up to 25 devices",
    popular: true,
    features: [
      "Everything in Bronze, plus:",
      "24/7 priority support",
      "Advanced security package",
      "Cloud storage & backup solutions",
      "Quarterly business technology reviews",
      "Basic CRM implementation & support"
    ]
  },
  {
    name: "Gold",
    description: "Enterprise-grade IT for established businesses",
    price: "$2,499",
    priceDetail: "/month",
    priceSubtext: "Starting price for up to 50 devices",
    popular: false,
    features: [
      "Everything in Silver, plus:",
      "Dedicated account manager",
      "Custom security protocols & compliance",
      "Advanced analytics & BI solutions",
      "IT strategy & roadmap planning",
      "Complete Dynamics 365 implementation"
    ]
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium">PRICING</span>
          <h2 className="text-3xl md:text-4xl font-bold font-inter mt-2 mb-4">Plans That Scale With Your Business</h2>
          <p className="text-neutral-600 text-lg">Choose from our flexible service tiers designed to meet the unique needs of your organization.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`transition-all hover:shadow-lg overflow-hidden ${
                plan.popular 
                  ? "border-primary relative z-10 scale-105" 
                  : "border-neutral-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-sm font-medium py-1 px-4 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <CardHeader className={`p-6 border-b border-neutral-200 ${
                plan.popular ? "bg-primary text-white" : "bg-neutral-50"
              }`}>
                <h3 className="text-2xl font-bold font-inter mb-2">{plan.name}</h3>
                <p className={`${plan.popular ? "text-white text-opacity-90" : "text-neutral-600"} mb-4`}>
                  {plan.description}
                </p>
                <div className="flex items-end">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`${plan.popular ? "text-white text-opacity-80" : "text-neutral-600"} ml-2`}>
                    {plan.priceDetail}
                  </span>
                </div>
                <p className={`${
                  plan.popular ? "text-white text-opacity-70" : "text-neutral-500"
                } text-sm mt-2`}>
                  {plan.priceSubtext}
                </p>
              </CardHeader>
              
              <CardContent className={`p-6 ${plan.popular ? "bg-white" : ""}`}>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckIcon className="text-secondary text-xl mr-2 mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className={`p-6 border-t border-neutral-200 ${
                plan.popular ? "bg-white" : "bg-neutral-50"
              }`}>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "bg-primary hover:bg-primary-dark" 
                      : "bg-white border border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <a href="#contact">Get Started</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-neutral-600 mb-4">Need a custom solution for your specific business needs?</p>
          <a href="#contact" className="inline-flex items-center font-medium text-primary hover:underline">
            Contact us for custom pricing
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
