// Site data and content
export const siteConfig = {
  name: "Rupali Gera",
  title: "Content Writer & Strategist",
  tagline: "SEO Specialist | AI Prompting Expert | Driving Brand Growth",
  email: "gerarupali@gmail.com",
  linkedin: "https://www.linkedin.com/in/rupali-gera",
  location: "Dublin, County Dublin, Ireland",
  summary: `I'm Rupali Gera, a content writer and strategist with 6+ years of experience helping brands tell clearer stories, connect with the right audiences, and drive meaningful results.

I've worked with startups, agencies, and in-house teams across B2B SaaS, fintech, tech, and e-commerce. Currently, I work as a consultant with Kinetyca, collaborating closely with founders and leadership teams on content, CRM workflows, and engagement across multiple profiles.

My work goes beyond writing. I plan and manage content strategy, organise content operations, and ensure every piece of content serves a clear purpose.`,
};

export const services = [
  "Develop and manage content strategies",
  "Create long-form and short-form content (blogs, website copy, FAQs, how-to guides, newsletters, social content)",
  "Conduct SEO and keyword research",
  "Define brand messaging and voice",
];

export const tools = {
  projectManagement: ["Asana", "ClickUp", "Notion"],
  cms: ["WordPress", "HubSpot"],
  design: ["Canva", "Figma"],
  analytics: ["Google Search Console", "GA4", "Ahrefs", "SEMrush"],
};

export const skills = [
  { name: "Content Strategy", level: 95 },
  { name: "SEO & Keyword Research", level: 90 },
  { name: "Blog Writing", level: 95 },
  { name: "Technical Documentation", level: 85 },
  { name: "UX Writing", level: 80 },
  { name: "Brand Messaging", level: 88 },
  { name: "CRM Workflows", level: 82 },
  { name: "AI Prompting", level: 90 },
];

export const experience = [
  {
    company: "Kinetyca",
    role: "Content & Growth Consultant",
    period: "September 2025 - Present",
    duration: "6 months",
    location: "Remote",
    description: "Collaborating closely with founders and leadership teams on content, CRM workflows, and engagement across multiple profiles.",
  },
  {
    company: "Freelance | Self-Employed",
    role: "Content Writer",
    period: "November 2024 - August 2025",
    duration: "10 months",
    location: "Remote",
    description: "Providing content writing services to various clients across B2B SaaS, fintech, and e-commerce sectors.",
  },
  {
    company: "Docsumo",
    role: "Content Writer",
    period: "March 2024 - October 2024",
    duration: "8 months",
    location: "Remote",
    description: "Created technical content for document AI and automation platform, including blog posts, guides, and product documentation.",
  },
  {
    company: "Pen Paper Dreams",
    role: "Content Writer",
    period: "August 2023 - May 2024",
    duration: "10 months",
    location: "Remote",
    description: "Developed engaging content for various clients, focusing on storytelling and brand voice.",
  },
  {
    company: "Amplifyre",
    role: "Content Strategist",
    period: "September 2021 - February 2023",
    duration: "1 year 6 months",
    location: "Remote",
    description: "Led content strategy initiatives, planned content calendars, and managed content operations for multiple clients.",
  },
  {
    company: "Amplifyre",
    role: "Freelance Content Writer",
    period: "February 2023 - July 2023",
    duration: "6 months",
    location: "Remote",
    description: "Continued collaboration on content projects as a freelance contributor.",
  },
  {
    company: "Ideatarmac",
    role: "Digital Marketing Executive (Web Content)",
    period: "September 2020 - August 2021",
    duration: "1 year",
    location: "Remote",
    description: "Managed web content and digital marketing initiatives, including SEO optimization and content creation.",
  },
  {
    company: "Jynx.us",
    role: "Content Writer and Blogger",
    period: "February 2020 - August 2020",
    duration: "7 months",
    location: "Remote",
    description: "Created blog content and articles for the platform, focusing on engaging and informative writing.",
  },
  {
    company: "BNY Mellon",
    role: "Infrastructure Operations Analyst",
    period: "July 2018 - December 2019",
    duration: "1 year 6 months",
    location: "Pune Area, India",
    description: "Managed mainframe batch jobs, ensuring seamless IT operations. Utilized ServiceNow for tracking and resolving IT service requests efficiently.",
  },
];

export const education = {
  institution: "Chitkara University",
  degree: "Bachelor of Engineering, Computer Science",
  period: "2013 - 2017",
};

export const certifications = [
  "UX Writing Fundamentals: A Comprehensive Guide to UX Writing",
  "Master's Certification in Digital Marketing",
  "Start Writing Prompts like a Pro",
];

export const languages = [
  { name: "English", level: "Full Professional" },
  { name: "Hindi", level: "Native or Bilingual" },
  { name: "Punjabi", level: "Native or Bilingual" },
];

// Work samples data
export interface WorkSample {
  id: string;
  title: string;
  description: string;
  category: "blogs" | "documentation" | "case-studies" | "how-to-guides" | "lead-magnets";
  image: string;
  tags: string[];
  link?: string;
}

export const workSamples: WorkSample[] = [
  // Blogs
  {
    id: "blog-1",
    title: "The Future of AI in Content Marketing",
    description: "An in-depth exploration of how AI is transforming content creation and marketing strategies for B2B SaaS companies.",
    category: "blogs",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tags: ["AI", "Content Marketing", "B2B SaaS"],
  },
  {
    id: "blog-2",
    title: "SEO Best Practices for 2024",
    description: "A comprehensive guide to modern SEO techniques, including technical SEO, content optimization, and link building strategies.",
    category: "blogs",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop",
    tags: ["SEO", "Digital Marketing", "Content Strategy"],
  },
  {
    id: "blog-3",
    title: "Building a Content-First Brand Strategy",
    description: "How to create a brand identity that resonates with your audience through strategic content planning.",
    category: "blogs",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop",
    tags: ["Branding", "Strategy", "Content"],
  },
  // Documentation
  {
    id: "doc-1",
    title: "API Integration Guide",
    description: "Complete documentation for integrating third-party APIs into document processing workflows.",
    category: "documentation",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    tags: ["API", "Technical Writing", "Integration"],
  },
  {
    id: "doc-2",
    title: "User Onboarding Documentation",
    description: "Step-by-step onboarding documentation for SaaS platform users, including screenshots and video guides.",
    category: "documentation",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    tags: ["Onboarding", "SaaS", "User Guide"],
  },
  {
    id: "doc-3",
    title: "Product Feature Documentation",
    description: "Detailed feature documentation covering functionality, use cases, and best practices.",
    category: "documentation",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    tags: ["Product", "Features", "Technical"],
  },
  // Case Studies
  {
    id: "case-1",
    title: "Fintech Startup Content Overhaul",
    description: "How strategic content redesign increased organic traffic by 150% for a fintech startup.",
    category: "case-studies",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Fintech", "SEO", "Growth"],
  },
  {
    id: "case-2",
    title: "B2B SaaS Lead Generation",
    description: "Content strategy that generated 500+ qualified leads in 6 months for a B2B SaaS company.",
    category: "case-studies",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["B2B", "Lead Generation", "SaaS"],
  },
  {
    id: "case-3",
    title: "E-commerce Content Strategy",
    description: "Building a content ecosystem that drove 200% increase in conversions for an e-commerce brand.",
    category: "case-studies",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["E-commerce", "Conversion", "Strategy"],
  },
  // How-to Guides
  {
    id: "guide-1",
    title: "How to Create a Content Calendar",
    description: "A practical guide to planning and managing your content calendar for consistent publishing.",
    category: "how-to-guides",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop",
    tags: ["Content Planning", "Organization", "Strategy"],
  },
  {
    id: "guide-2",
    title: "How to Conduct Keyword Research",
    description: "Step-by-step guide to finding and prioritizing keywords for your content strategy.",
    category: "how-to-guides",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    tags: ["SEO", "Keywords", "Research"],
  },
  {
    id: "guide-3",
    title: "How to Write Effective CTAs",
    description: "Master the art of writing compelling calls-to-action that convert visitors into leads.",
    category: "how-to-guides",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
    tags: ["Copywriting", "Conversion", "CTA"],
  },
  // Lead Magnets
  {
    id: "magnet-1",
    title: "The Ultimate Content Strategy Template",
    description: "A comprehensive template for planning and executing your content strategy from scratch.",
    category: "lead-magnets",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
    tags: ["Template", "Strategy", "Resource"],
  },
  {
    id: "magnet-2",
    title: "SEO Checklist for Content Writers",
    description: "A detailed checklist to ensure your content is fully optimized for search engines.",
    category: "lead-magnets",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    tags: ["SEO", "Checklist", "Resource"],
  },
  {
    id: "magnet-3",
    title: "Brand Voice Guidelines Workbook",
    description: "Interactive workbook to help define and document your brand's unique voice and tone.",
    category: "lead-magnets",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=600&h=400&fit=crop",
    tags: ["Branding", "Voice", "Workbook"],
  },
];

export const workCategories = [
  {
    slug: "blogs",
    title: "Blogs",
    description: "Engaging blog posts that drive traffic and establish thought leadership.",
    icon: "📝",
  },
  {
    slug: "documentation",
    title: "Documentation",
    description: "Clear and comprehensive technical documentation for products and services.",
    icon: "📚",
  },
  {
    slug: "case-studies",
    title: "Case Studies",
    description: "In-depth analysis of successful projects and their measurable outcomes.",
    icon: "📊",
  },
  {
    slug: "how-to-guides",
    title: "How to Guides",
    description: "Step-by-step tutorials that help users accomplish specific goals.",
    icon: "🎯",
  },
  {
    slug: "lead-magnets",
    title: "Lead Magnets",
    description: "High-value resources designed to attract and convert potential clients.",
    icon: "🧲",
  },
];
