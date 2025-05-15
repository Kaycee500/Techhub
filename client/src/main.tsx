import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add meta tags for SEO
document.title = "TechSphere - Managed IT Services & SaaS Solutions for SMBs";
const metaDescription = document.createElement("meta");
metaDescription.name = "description";
metaDescription.content = "TechSphere provides enterprise-grade managed IT services and SaaS solutions for small and medium-sized businesses. Network management, cloud solutions, cybersecurity, and business analytics.";
document.head.appendChild(metaDescription);

// Add Open Graph tags for social sharing
const ogTitle = document.createElement("meta");
ogTitle.setAttribute("property", "og:title");
ogTitle.content = "TechSphere - Managed IT Services & SaaS Solutions";
document.head.appendChild(ogTitle);

const ogDescription = document.createElement("meta");
ogDescription.setAttribute("property", "og:description");
ogDescription.content = "Comprehensive IT services and SaaS solutions designed to power your business forward. No technical headaches, just results.";
document.head.appendChild(ogDescription);

const ogType = document.createElement("meta");
ogType.setAttribute("property", "og:type");
ogType.content = "website";
document.head.appendChild(ogType);

createRoot(document.getElementById("root")!).render(<App />);
