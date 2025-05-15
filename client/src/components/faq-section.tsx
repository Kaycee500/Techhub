import { useState } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";
import { ArrowRightIcon } from "@/lib/icons";

const faqs = [
  {
    question: "What is included in your managed IT services?",
    answer: "Our managed IT services include network monitoring and management, 24/7 help desk support, cybersecurity protection, cloud services management, regular maintenance and updates, data backup and recovery, and strategic IT planning. The specific services depend on your selected service tier."
  },
  {
    question: "How quickly do you respond to IT issues?",
    answer: "Our average response time is 15 minutes for critical issues. We categorize issues by severity and provide guaranteed response times based on your service level agreement. Emergency situations are addressed immediately, while routine maintenance requests are typically handled within 24 hours."
  },
  {
    question: "Can you support our existing CRM or business applications?",
    answer: "Yes, we support a wide range of business applications, including Microsoft Dynamics 365, Salesforce, QuickBooks, and many others. Our team can help with implementation, integration, customization, training, and ongoing support for your essential business applications."
  },
  {
    question: "How do you handle data security and compliance requirements?",
    answer: "We implement comprehensive security measures including advanced firewalls, endpoint protection, email security, and encrypted connections. We also help clients meet industry compliance requirements such as HIPAA, PCI DSS, and GDPR through proper documentation, regular security assessments, and staff training."
  },
  {
    question: "Can we scale our services as our business grows?",
    answer: "Absolutely. Our services are designed to scale with your business. You can easily add more devices, users, or locations to your plan as needed. We conduct regular reviews to ensure your IT infrastructure continues to meet your evolving business needs, and we can adjust your service plan accordingly."
  }
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold font-inter mt-2 mb-4">Frequently Asked Questions</h2>
          <p className="text-neutral-600 text-lg">Find answers to common questions about our services and approach.</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-neutral-50 rounded-xl border border-neutral-200 overflow-hidden mb-4"
              >
                <AccordionTrigger className="px-5 py-4 font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-5 py-4 border-t border-neutral-200 text-neutral-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-neutral-600 mb-4">Don't see your question here?</p>
          <a href="#contact" className="inline-flex items-center font-medium text-primary hover:underline">
            Contact our team for answers
            <ArrowRightIcon className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
