import { CustomerServiceIcon, TeamIcon, ScalesIcon, TimerIcon, UserSmileIcon } from "@/lib/icons";

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-medium">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-4xl font-bold font-inter mt-2 mb-6">We Make Technology Work for Your Business</h2>
            <p className="text-neutral-600 text-lg mb-8">At TechSphere, we understand that technology should enable your business growth, not hinder it. Our approach combines enterprise-grade solutions with the personalized service that SMBs deserve.</p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-secondary bg-opacity-10 flex items-center justify-center mr-4">
                  <CustomerServiceIcon className="text-secondary text-2xl h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-inter mb-2">24/7 Proactive Support</h3>
                  <p className="text-neutral-600">We address issues before they impact your business with round-the-clock monitoring and support.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-secondary bg-opacity-10 flex items-center justify-center mr-4">
                  <TeamIcon className="text-secondary text-2xl h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-inter mb-2">Dedicated IT Team</h3>
                  <p className="text-neutral-600">Get access to a full team of IT specialists for less than the cost of one in-house hire.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-secondary bg-opacity-10 flex items-center justify-center mr-4">
                  <ScalesIcon className="text-secondary text-2xl h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-inter mb-2">Scalable Solutions</h3>
                  <p className="text-neutral-600">Our services grow with your business, ensuring your technology always matches your needs.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=900" 
              alt="IT professional helping a client" 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                  <TimerIcon className="text-primary text-2xl h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">15-minute</h4>
                  <p className="text-neutral-600">Average response time</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-secondary bg-opacity-10 flex items-center justify-center mr-4">
                  <UserSmileIcon className="text-secondary text-2xl h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">98%</h4>
                  <p className="text-neutral-600">Client satisfaction rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
