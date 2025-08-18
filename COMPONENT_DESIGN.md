# Personal Landing Page Design (Product-Style)

## Project Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Section.astro
│   ├── Hero.astro
│   ├── Features.astro
│   ├── Showcase.astro
│   ├── Testimonials.astro
│   ├── Pricing.astro (Availability/Rates)
│   ├── CTA.astro
│   ├── ui/
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Badge.astro
│   │   └── FeatureCard.astro
│   └── SocialLinks.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
├── styles/
│   └── global.css
└── data/
    ├── features.json
    ├── projects.json
    └── testimonials.json
```

## Component Hierarchy

### Personal Landing Page (Product-Style)
```
Landing Page
├── Layout.astro
│   ├── Header.astro
│   │   ├── Personal Brand/Logo
│   │   ├── Navigation
│   │   │   ├── Features
│   │   │   ├── Work
│   │   │   ├── About
│   │   │   └── Contact
│   │   └── Button.astro (Hire Me)
│   │
│   ├── Hero.astro
│   │   ├── Hook/Tagline
│   │   ├── Value Proposition
│   │   ├── Brief Description
│   │   ├── Button.astro (Primary CTA - See My Work)
│   │   ├── Button.astro (Secondary - Schedule Call)
│   │   ├── Social Proof Badges
│   │   └── Hero Visual/Animation
│   │
│   ├── Features.astro
│   │   ├── Section.astro ("What You Get")
│   │   └── FeatureCard.astro []
│   │       ├── Card.astro
│   │       ├── Feature Icon
│   │       ├── Feature Title
│   │       ├── Feature Description
│   │       └── Badge.astro (Tech/Skill)
│   │
│   ├── Showcase.astro
│   │   ├── Section.astro ("Recent Work")
│   │   ├── Showcase Intro
│   │   └── ProjectCard.astro []
│   │       ├── Card.astro
│   │       ├── Project Image/Video
│   │       ├── Client/Company
│   │       ├── Results/Impact
│   │       ├── Badge.astro [] (Technologies)
│   │       └── Button.astro (Case Study)
│   │
│   ├── Testimonials.astro
│   │   ├── Section.astro ("What Clients Say")
│   │   └── TestimonialCard.astro []
│   │       ├── Card.astro
│   │       ├── Quote
│   │       ├── Client Name
│   │       ├── Client Title/Company
│   │       └── Client Photo
│   │
│   ├── Pricing.astro
│   │   ├── Section.astro ("Let's Work Together")
│   │   ├── Availability Status
│   │   ├── Rate Information
│   │   ├── Service Packages
│   │   └── Button.astro (Book Consultation)
│   │
│   ├── CTA.astro
│   │   ├── Final Value Proposition
│   │   ├── Urgency/Scarcity Element
│   │   ├── Button.astro (Primary - Start Project)
│   │   └── Button.astro (Secondary - Download Resume)
│   │
│   └── Footer.astro
│       ├── Brief About
│       ├── SocialLinks.astro
│       └── Contact Info
```

## Component Types

### Layout Components
- **Layout.astro**: Main page wrapper with global styles
- **Header.astro**: Navigation with CTA button
- **Footer.astro**: Contact info and social links
- **Section.astro**: Reusable section wrapper

### Landing Page Components
- **Hero.astro**: Value proposition and primary CTA
- **Features.astro**: What you get when working with me
- **Showcase.astro**: Recent work and case studies
- **Testimonials.astro**: Client reviews and social proof
- **Pricing.astro**: Availability and rates
- **CTA.astro**: Final conversion section

### UI Components
- **Button.astro**: Primary/secondary CTAs
- **Card.astro**: Feature/project containers
- **FeatureCard.astro**: Specialized for features
- **Badge.astro**: Skills/technology tags
- **SocialLinks.astro**: Social media links

## Design Principles

### Landing Page Strategy
- Lead with value proposition, not just skills
- Focus on client benefits and outcomes
- Use social proof and testimonials
- Clear call-to-actions throughout
- Create urgency and scarcity

### Visual Style
- Clean, modern professional aesthetic
- Purple/blue accent colors (#6366f1, #8b5cf6)
- Card-based layouts with subtle shadows
- Conversion-focused typography
- Smooth hover transitions and micro-interactions

### Layout Patterns
- Above-the-fold hero with clear value prop
- Progressive information disclosure
- Social proof placement for credibility
- Multiple conversion opportunities
- Mobile-first responsive design

## Data Structure

### features.json
```json
{
  "features": [
    {
      "id": "feature-1",
      "icon": "⚡",
      "title": "Fast Development",
      "description": "Ship features 50% faster with modern tools and proven processes",
      "benefits": ["Rapid prototyping", "Agile workflow", "Quick iterations"]
    }
  ]
}
```

### projects.json
```json
{
  "projects": [
    {
      "id": "project-1",
      "title": "E-commerce Platform",
      "client": "TechCorp Inc.",
      "impact": "Increased conversion by 40%",
      "description": "Built scalable e-commerce solution",
      "image": "/images/project-1.jpg",
      "tech": ["React", "Node.js", "Stripe"],
      "caseStudyUrl": "/case-studies/ecommerce"
    }
  ]
}
```

### testimonials.json
```json
{
  "testimonials": [
    {
      "id": "testimonial-1",
      "quote": "Best developer I've worked with. Delivered ahead of schedule.",
      "author": "John Smith",
      "title": "CTO at StartupXYZ",
      "company": "StartupXYZ",
      "avatar": "/images/client-1.jpg"
    }
  ]
}
```

## Landing Page Copy Framework

### Hero Section
- **Hook**: "I build products that users love and businesses need"
- **Value Prop**: "Full-stack developer specializing in scalable web applications"
- **Social Proof**: "Trusted by 20+ companies • 5+ years experience"

### Features Section
- Focus on client benefits, not just technical skills
- Use outcome-focused language
- Include measurable results

### Testimonials
- Real client quotes about results
- Include specific metrics when possible
- Mix of different client types/industries

### Pricing/Availability
- Current availability status
- Project starting rates
- Consultation booking