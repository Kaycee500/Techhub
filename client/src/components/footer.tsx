import { CloudIcon, LinkedInIcon, TwitterIcon, FacebookIcon } from "@/lib/icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Would typically call an API here to handle newsletter subscription
    toast({
      title: "Thanks for subscribing!",
      description: "You'll now receive our newsletter with the latest technology trends.",
    });
    
    setEmail("");
  };

  const services = [
    "Network Management",
    "Cloud Solutions",
    "Cybersecurity",
    "Business Analytics",
    "CRM Implementation",
    "IT Consulting"
  ];

  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "Leadership Team", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact Us", href: "#contact" }
  ];

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <CloudIcon className="text-white text-3xl h-8 w-8" />
              <span className="font-inter font-bold text-2xl">TechSphere</span>
            </div>
            <p className="text-neutral-400 mb-6">Enterprise-grade IT solutions for small and medium-sized businesses. We help you leverage technology for growth and security.</p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-colors">
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-neutral-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Subscribe to Our Newsletter</h3>
            <p className="text-neutral-400 mb-4">Stay updated with the latest technology trends and news.</p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-neutral-700 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-white" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full px-4 py-3">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} TechSphere. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
