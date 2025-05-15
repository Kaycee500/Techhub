import { BuildingIcon, HeartPulseIcon, StoreIcon, BankIcon } from "@/lib/icons";

const industries = [
  {
    icon: <BuildingIcon className="text-3xl text-white h-8 w-8" />,
    name: "Professional Services"
  },
  {
    icon: <HeartPulseIcon className="text-3xl text-white h-8 w-8" />,
    name: "Healthcare"
  },
  {
    icon: <StoreIcon className="text-3xl text-white h-8 w-8" />,
    name: "Retail & Franchise"
  },
  {
    icon: <BankIcon className="text-3xl text-white h-8 w-8" />,
    name: "Financial Services"
  }
];

const clients = ["CompanyOne", "TechFirm", "GlobalCorp", "InnovateInc"];

export default function ClientsSection() {
  return (
    <section className="py-16 md:py-20 bg-neutral-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-medium">TRUSTED BY</span>
          <h2 className="text-3xl md:text-4xl font-bold font-inter mt-2 mb-4">Helping Businesses Across Industries</h2>
          <p className="text-neutral-300 text-lg">We provide tailored IT solutions for diverse industries, from healthcare to finance, retail to professional services.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="h-20 w-20 rounded-full bg-white bg-opacity-10 flex items-center justify-center mb-4">
                {industry.icon}
              </div>
              <h3 className="text-lg font-semibold text-center">{industry.name}</h3>
            </div>
          ))}
        </div>
        
        <div className="mt-20 pt-12 border-t border-white border-opacity-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-12">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <span className="font-bold text-xl text-white opacity-70">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
