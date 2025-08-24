# Personal Portfolio Design Plan

## Hosting & Technology Stack
- **Hosting**: Vercel (SSG + SSR support)
- **Framework**: Astro with React integration
- **Styling**: Tailwind CSS + DaisyUI + Catppuccin theme
- **Design System**: DaisyUI components with Catppuccin colors
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
│   └── global.css (includes Tailwind v4 + Catppuccin + DaisyUI)
└── data/
    ├── features.json
    ├── projects.json
    ├── skills.json
    └── experience.json
```

## Component Hierarchy

### Personal Portfolio Landing Page
```
Portfolio Landing Page
├── Layout.astro
│   ├── Header.astro
│   │   ├── Personal Brand "Yushi Cui"
│   │   ├── Navigation
│   │   │   ├── About (anchor link)
│   │   │   ├── Work (anchor link)
│   │   │   ├── Skills (anchor link)
│   │   │   └── Contact (anchor link)
│   │   ├── SocialLinks.astro (GitHub, LinkedIn)
│   │   └── Button.astro (Hire Me CTA)
│   │
│   ├── Hero.astro
│   │   ├── TypewriterEffect.jsx ("Chef", "Developer", "Problem Solver")
│   │   ├── Value Proposition
│   │   ├── Brief intro with chef background
│   │   ├── Button.astro (Primary - View My Work)
│   │   ├── Button.astro (Secondary - Download Resume)
│   │   ├── Status Badge (Available for hire)
│   │   └── Profile photo
│   │
│   ├── About.astro (Content-Heavy Story Section)
│   │   ├── Section.astro ("From Kitchen to Code")
│   │   ├── Career transition narrative
│   │   ├── Skills parallels (Chef → Developer)
│   │   ├── Personal photos timeline
│   │   ├── Values & philosophy
│   │   └── Link to blog.yushi91.com
│   │
│   ├── Features.astro
│   │   ├── Section.astro ("What You Get")
│   │   └── FeatureCard.astro []
│   │       ├── Feature Icon
│   │       ├── Skill/Service Title
│   │       ├── Description with chef parallels
│   │       └── Badge.astro [] (Technologies)
│   │
│   ├── Showcase.astro
│   │   ├── Section.astro ("Recent Projects")
│   │   ├── ProjectFilter.jsx (Filter by tech)
│   │   └── ProjectCard.astro []
│   │       ├── Project Image/Demo
│   │       ├── Project Title
│   │       ├── Impact/Results
│   │       ├── Badge.astro [] (Tech Stack)
│   │       ├── Button.astro (Live Demo)
│   │       └── Button.astro (GitHub)
│   │
│   ├── Contact.astro
│   │   ├── Section.astro ("Let's Work Together")
│   │   ├── ContactForm.jsx (Server-side via /api/contact)
│   │   ├── Availability status
│   │   ├── Response time commitment
│   │   └── SocialLinks.astro
│   │
│   └── Footer.astro
│       ├── Brief tagline
│       ├── SocialLinks.astro
│       ├── Link to blog
│       └── Copyright
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

### React Interactive Components
- **ContactForm.jsx**: Form with server-side handling
- **TypewriterEffect.jsx**: Animated hero text
- **ProjectFilter.jsx**: Filter projects by technology
- **ThemeToggle.jsx**: Dark/light mode (optional)

### UI Components
- **Button.astro**: CTAs and navigation buttons
- **Card.astro**: Project and feature containers
- **FeatureCard.astro**: Skills/services display
- **Badge.astro**: Technology and skill tags
- **SocialLinks.astro**: GitHub, LinkedIn, blog links

## Design Principles

## Design Principles

### Personal Brand Strategy
- Lead with unique chef → developer story
- Focus on problem-solving and transferable skills
- Authentic narrative over generic portfolio
- Clear availability and hire-me messaging
- Link to blog for deeper engagement

### Visual Style
- Clean, modern professional aesthetic
- Catppuccin Mocha theme (dark) with Latte (light) option
- DaisyUI component-based design system
- Cohesive pastel color palette
- Smooth hover transitions and micro-interactions

### DaisyUI + Catppuccin Design System
- **Theme**: Catppuccin Mocha (primary) / Latte (light mode)
- **Components**: DaisyUI pre-built components (cards, buttons, forms)
- **Colors**: Catppuccin semantic colors (mauve, lavender, sky, teal)
- **Typography**: Inter font with DaisyUI typography classes
- **Spacing**: DaisyUI consistent spacing scale
- **Animations**: DaisyUI built-in hover states and transitions

### Layout Patterns
- Hero with compelling personal story hook
- Content-heavy about section for authenticity
- Project showcase with live demos
- Clear contact and availability information
- Mobile-first responsive design (sm: md: lg: xl: 2xl:)
- Integration with existing blog

### Responsive Breakpoints
- **Mobile**: Default (< 640px) - Single column, large touch targets
- **Tablet**: sm: (640px+) - Two column grids, refined spacing
- **Desktop**: md: (768px+) - Three column grids, hover states
- **Large**: lg: (1024px+) - Full layout, side navigation
- **XL**: xl: (1280px+) - Maximum content width
- **2XL**: 2xl: (1536px+) - Wide screen optimization

## Data Structure

### features.json
- Feature ID and icon
- Chef skill parallel title
- Description linking chef experience to dev skills
- Technology tags and benefits list

### projects.json  
- Project metadata (title, description, impact)
- Technology stack used
- Live demo and GitHub repository links
- Company/client information
- Featured project designation

### experience.json
- Work experience with timeline
- Company information and role details
- Key achievements and impact
- Technology stack per role

### skills.json
- Skill categories (Frontend, Backend, Tools)
- Category icons and technology lists
- Proficiency levels or certifications

## DaisyUI + Catppuccin Integration

### Setup Requirements
- Tailwind CSS with DaisyUI plugin
- Catppuccin theme configuration
- Astro integration for both libraries
- Typography plugin for blog content

### Catppuccin Color Palette
- **Primary**: Mauve (#cba6f7) - main brand color
- **Secondary**: Lavender (#b4befe) - accent elements
- **Accent**: Sky (#89dceb) - CTAs and highlights
- **Neutral**: Surface colors from Catppuccin base
- **Success**: Green (#a6e3a1) - success states
- **Warning**: Yellow (#f9e2af) - warning states
- **Error**: Red (#f38ba8) - error states

### DaisyUI Components to Use
- **Cards**: Project cards, feature cards
- **Buttons**: CTAs, navigation, form buttons
- **Forms**: Contact form elements
- **Navigation**: Header navigation and mobile menu
- **Badges**: Technology tags and status indicators
- **Modals**: Image galleries, detailed views
- **Timeline**: Experience/education timeline

## Theme & Styling Strategy

### Catppuccin Theme Implementation
- **Dark Mode**: Catppuccin Mocha (primary theme)
- **Light Mode**: Catppuccin Latte (optional toggle)
- **Semantic Colors**: Use Catppuccin's semantic naming
- **Consistency**: Maintain color harmony across all components

### DaisyUI Component Usage
- **Hero**: DaisyUI hero component with gradient background
- **Cards**: Consistent card styling for projects and features
- **Forms**: DaisyUI form controls with validation states
- **Navigation**: DaisyUI navbar with responsive mobile menu
- **Buttons**: Consistent button hierarchy (primary, secondary, ghost)

## Copy Framework

### Hero Section
- **Hook**: "From Kitchen to Code: Building Digital Solutions"
- **Value Prop**: "Full-stack developer bringing chef-level precision to software development"
- **Availability**: "Currently available for new projects"

### About Section Content
- **Career transition story**: 6 years as professional chef → computer science student
- **Skills parallels**: Pressure handling, precision, teamwork, problem-solving
- **Current status**: 3rd year CS student, recent internship graduate
- **Values**: Quality, continuous learning, collaboration

### Contact Section
- **Availability**: "Available for internships and junior developer roles"
- **Response time**: "I'll get back to you within 24 hours"
- **Collaboration style**: "Let's build something amazing together"