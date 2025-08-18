# Personal Portfolio Design Plan

## Hosting & Technology Stack
- **Hosting**: Vercel (SSG + SSR support)
- **Framework**: Astro with React integration
- **Styling**: Tailwind CSS + Custom CSS variables
- **Fonts**: Inter (system fallback)
- **Icons**: Heroicons or Lucide React
- **Blog**: Separate site at blog.yushi91.com
- **Deployment**: Auto-deploy from GitHub

## Project Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Section.astro
│   ├── Hero.astro
│   ├── About.astro (Content-heavy story section)
│   ├── Features.astro
│   ├── Showcase.astro
│   ├── Contact.astro
│   ├── react/ (Interactive components)
│   │   ├── ContactForm.jsx
│   │   ├── TypewriterEffect.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── ProjectFilter.jsx
│   ├── ui/
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Badge.astro
│   │   └── FeatureCard.astro
│   └── SocialLinks.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro
│   └── api/
│       └── contact.js (Server-side form handling)
├── styles/
│   ├── global.css
│   └── tailwind.css
└── data/
    ├── features.json
    ├── projects.json
    ├── skills.json
    └── experience.json
```

## Minimum Viable Portfolio

### Core Sections (Single Page)
```
Portfolio Landing Page
├── Header.astro
│   ├── Name "Yushi Cui"
│   ├── Navigation (About, Projects, Contact)
│   └── Social Links (GitHub, LinkedIn)
│
├── Hero.astro
│   ├── Name & Title
│   ├── "From Kitchen to Code" tagline
│   ├── Brief description
│   └── Primary CTA button
│
├── About.astro
│   ├── Career transition story
│   ├── Chef → Developer skills
│   └── Link to blog
│
├── Projects.astro
│   ├── Featured projects (2-3)
│   ├── Project cards with tech stack
│   └── Links to demos/GitHub
│
├── Contact.astro
│   ├── Email contact
│   ├── Social links
│   └── Availability status
│
└── Footer.astro
    └── Copyright & links
```

## Component Types

### Layout Components
- **Layout.astro**: Main page wrapper with global styles
- **Header.astro**: Navigation with hire me CTA
- **Footer.astro**: Links and social media
- **Section.astro**: Reusable section wrapper

### Content Components
- **Hero.astro**: Introduction with chef → developer story
- **About.astro**: Detailed "From Kitchen to Code" narrative
- **Features.astro**: Skills and services with chef parallels
- **Showcase.astro**: Projects with filtering capability
- **Contact.astro**: Contact form and availability

### React Components (Start Simple)
- **ContactForm.jsx**: Basic contact form

### UI Components
- **Button.astro**: CTAs and navigation buttons
- **Card.astro**: Project and feature containers
- **FeatureCard.astro**: Skills/services display
- **Badge.astro**: Technology and skill tags
- **SocialLinks.astro**: GitHub, LinkedIn, blog links

## Design Principles

## Design Principles

### Core Message
- "From Kitchen to Code" personal story
- Focus on transferable skills and problem-solving
- Professional but approachable tone

### Visual Style
- Clean, modern aesthetic
- Purple/blue accent colors
- Simple card layouts
- Mobile-first responsive design

### Content Strategy
- Authentic career transition narrative
- Showcase real projects (Todo app, HMI dashboard)
- Clear contact and availability information
- Link to existing blog for deeper content

## Content Data

### projects.json
- Basic project info (title, description, tech stack)
- Links to live demos and GitHub repos
- Project images

### Personal content
- About section text (career story)
- Contact information
- Social media links

## Styling
- **Framework**: Tailwind CSS
- **Colors**: Purple/blue theme
- **Typography**: Inter font
- **Layout**: Simple responsive grid

## Content Guidelines

### Key Messages
- "From Kitchen to Code" transition story
- Problem-solving skills from chef background
- Current availability for developer roles
- Link to blog for learning journey

### Tone
- Professional but personal
- Authentic and approachable
- Focus on growth and learning