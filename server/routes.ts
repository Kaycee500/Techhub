import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema, insertSubscriptionSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for lead generation
  app.post("/api/leads", async (req, res) => {
    try {
      // Validate request body against schema
      const validatedData = insertLeadSchema.parse(req.body);
      
      // Store lead in database
      const lead = await storage.createLead(validatedData);
      
      // Return success response
      res.status(201).json({
        message: "Lead successfully created",
        lead: {
          id: lead.id,
          name: lead.name,
          company: lead.company,
          email: lead.email,
          service: lead.service
        }
      });
    } catch (error) {
      // If validation error, return 400 with error details
      if (error instanceof Error) {
        const zodError = fromZodError(error);
        res.status(400).json({ message: zodError.message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // API route for newsletter subscriptions
  app.post("/api/subscribe", async (req, res) => {
    try {
      // Validate request body against schema
      const validatedData = insertSubscriptionSchema.parse(req.body);
      
      // Store subscription in database
      const subscription = await storage.createSubscription(validatedData);
      
      // Return success response
      res.status(201).json({
        message: "Subscription successfully created",
        subscription: {
          id: subscription.id,
          email: subscription.email
        }
      });
    } catch (error) {
      // If validation error, return 400 with error details
      if (error instanceof Error) {
        const zodError = fromZodError(error);
        res.status(400).json({ message: zodError.message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // API route for getting all leads (admin functionality)
  app.get("/api/leads", async (req, res) => {
    try {
      const leads = await storage.getAllLeads();
      res.status(200).json({ leads });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
