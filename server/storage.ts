import {
  users,
  type User,
  type InsertUser,
  leads,
  type Lead,
  type InsertLead,
  subscriptions,
  type Subscription,
  type InsertSubscription
} from "@shared/schema";

// Extended storage interface with new methods
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Lead methods
  createLead(lead: InsertLead): Promise<Lead>;
  getLead(id: number): Promise<Lead | undefined>;
  getAllLeads(): Promise<Lead[]>;
  updateLeadContactStatus(id: number, contacted: boolean): Promise<Lead | undefined>;

  // Subscription methods
  createSubscription(subscription: InsertSubscription): Promise<Subscription>;
  getAllSubscriptions(): Promise<Subscription[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User> = new Map();
  private leads: Map<number, Lead> = new Map();
  private subscriptions: Map<number, Subscription> = new Map();
  private userId: number = 1;
  private leadId: number = 1;
  private subscriptionId: number = 1;

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const id = this.leadId++;
    const now = new Date();
    const message = (insertLead as any).message ?? null;
    const lead: Lead = {
      ...insertLead,
      id,
      message,
      createdAt: now,
      contacted: false
    };
    this.leads.set(id, lead);
    return lead;
  }

  async getLead(id: number): Promise<Lead | undefined> {
    return this.leads.get(id);
  }

  async getAllLeads(): Promise<Lead[]> {
    return Array.from(this.leads.values());
  }

  async updateLeadContactStatus(id: number, contacted: boolean): Promise<Lead | undefined> {
    const lead = this.leads.get(id);
    if (!lead) return undefined;
    const updatedLead: Lead = { ...lead, contacted };
    this.leads.set(id, updatedLead);
    return updatedLead;
  }

  async createSubscription(insertSubscription: InsertSubscription): Promise<Subscription> {
    const existing = Array.from(this.subscriptions.values()).find(sub => sub.email === insertSubscription.email);
    if (existing) return existing;
    const id = this.subscriptionId++;
    const now = new Date();
    const subscription: Subscription = {
      ...insertSubscription,
      id,
      createdAt: now
    };
    this.subscriptions.set(id, subscription);
    return subscription;
  }

  async getAllSubscriptions(): Promise<Subscription[]> {
    return Array.from(this.subscriptions.values());
  }
}

export const storage = new MemStorage();
