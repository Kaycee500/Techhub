import { Card, CardContent } from "@/components/ui/card";
import { StarIcon, UserIcon, ArrowLeftIcon, ArrowRightIcon } from "@/lib/icons";
import { useState } from "react";

const testimonials = [
  {
    content: "TechSphere transformed our IT infrastructure. Their team is responsive, knowledgeable, and genuinely cares about our business success. We've seen major improvements in our system reliability.",
    author: "Sarah Johnson",
    position: "CEO, Johnson Accounting",
    rating: 5
  },
  {
    content: "Moving to TechSphere's managed services was the best decision we made. Their cloud migration expertise helped us scale operations across our five locations while improving security.",
    author: "Michael Rodriguez",
    position: "Operations Director, Pacific Healthcare",
    rating: 5
  },
  {
    content: "What sets TechSphere apart is their strategic approach. They don't just fix problems—they help us use technology to gain a competitive advantage. Their CRM implementation revolutionized our sales process.",
    author: "Jennifer Thompson",
    position: "VP of Sales, ThompsonTech Solutions",
    rating: 5
  },
  {
    content: "We've reduced our IT downtime by 95% since partnering with TechSphere. Their proactive approach to system maintenance has saved us countless hours and dollars.",
    author: "Robert Chen",
    position: "COO, Innovate Manufacturing",
    rating: 5
  },
  {
    content: "The cybersecurity solutions provided by TechSphere give us peace of mind. Their team continuously monitors our systems and keeps us protected against emerging threats.",
    author: "Lisa Washington",
    position: "Director of IT, Capital Financial",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = window.innerWidth >= 768 ? 3 : 1;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  const displayTestimonials = testimonials.slice(
    currentPage * itemsPerPage, 
    (currentPage + 1) * itemsPerPage
  );
  
  const handlePrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };
  
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold font-inter mt-2 mb-4">What Our Clients Say</h2>
          <p className="text-neutral-600 text-lg">Hear from businesses that have transformed their IT operations with our managed services.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card bg-white rounded-xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-accent">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="inline-block h-5 w-5" />
                    ))}
                  </div>
                </div>
                <p className="text-neutral-700 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-neutral-200 flex items-center justify-center mr-4">
                    <UserIcon className="text-neutral-500 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-neutral-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <button 
            onClick={handlePrevious}
            className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center mr-4 hover:bg-neutral-200 transition-colors"
            aria-label="Previous testimonials"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-200 transition-colors"
            aria-label="Next testimonials"
          >
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
