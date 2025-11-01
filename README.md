# CJNF SOLUTIONS - Digital Consulting Firm Website

Modern React-based website for CJNF SOLUTIONS, a digital consulting firm specializing in comprehensive web services including domain registration, web hosting, website development, email account setup, and ongoing website maintenance.

## 🚀 Production Site

The production website is built with **React 19 + TypeScript + Vite + Tailwind CSS** and located in the `/cjnf-react` directory.

**Legacy HTML site has been removed** - see [LEGACY_README.md](LEGACY_README.md) for details. All content migrated to React app.

## Business Overview

CJNF SOLUTIONS empowers businesses with a robust online presence through affordable, reliable, and professional services. Our mission is to help businesses optimize operations, improve efficiency, and achieve strategic goals in the digital landscape.

## Services Offered

### Individual Services
- **Domain Name Registration**: $40/year - Secure your web presence
- **Web Hosting**: $240/year - Reliable 24/7 hosting services
- **Website Development**: $1,000 - Custom web design, development, and content creation
- **Business Email Setup**: $216/year - Professional email accounts linked to domains
- **Website Maintenance**: $100/month - Ongoing support for updates and functionality

### Service Packages
- **Starter Package**: $1,496/year - Perfect for new businesses
- **Business Package**: $2,696/year - Most popular, includes website development
- **Enterprise Package**: $3,896/year - Full-service with custom features

## Features

### Business Features
- **Service Packages**: 3 comprehensive packages (Starter, Business, Enterprise)
- **Transparent Pricing**: Clear pricing for all services with à la carte options
- **Trust Indicators**: Social proof with client statistics and testimonials
- **SMB Focused**: Targeted messaging for small to medium-sized businesses

### Technical Features
- **Responsive Design**: Optimized for all devices using Tailwind CSS
- **Modern UI**: React components with gradients, animations, and smooth interactions
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **Performance**: Lazy loading images and optimized builds (66KB gzipped)
- **SEO Optimized**: Enhanced meta tags targeting small business searches
- **Contact Form**: Netlify Forms integration with validation
- **Testing**: Vitest + React Testing Library for quality assurance

## Technologies Used

**Production Stack:**
- React 19
- TypeScript
- Vite 7
- Tailwind CSS 3
- Font Awesome
- Netlify Forms

**Testing:**
- Vitest
- React Testing Library
- Jest DOM

## Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Run tests
npm run test

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/home/cjnf/portfolio-website/
├── cjnf-react/                    # 🚀 PRODUCTION APP
│   ├── src/
│   │   ├── components/            # React components
│   │   │   ├── Header.tsx         # Navigation with all sections
│   │   │   ├── Hero.tsx           # SMB-focused hero with dual CTAs
│   │   │   ├── Trust.tsx          # 🆕 Social proof & testimonials
│   │   │   ├── Services.tsx       # Enhanced with pricing & value props
│   │   │   ├── Pricing.tsx        # 🆕 Service packages & à la carte
│   │   │   ├── Portfolio.tsx      # Transformed to About section
│   │   │   ├── Contact.tsx        # Netlify Forms integration
│   │   │   ├── Footer.tsx         # Professional 3-column layout
│   │   │   └── __tests__/         # Component tests
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   ├── dist/                      # Production build output
│   ├── package.json
│   ├── vite.config.ts
│   ├── vitest.config.ts
│   └── tailwind.config.js

├── netlify.toml                   # Deployment configuration
├── DEPLOYMENT_GUIDE.md            # Deployment instructions
├── PROJECT_STATUS.md              # Project completion report
├── BUSINESS_PLAN_INTEGRATION.md   # 🆕 Business plan integration details
├── TEAM_GUIDE.md                  # Team management guide
├── TRANSFORMATION_TASKS.md        # Migration tracking
├── LEGACY_README.md               # Legacy site documentation
└── README.md                      # This file
```

## Deployment

The site is configured for **Netlify** deployment with automatic builds from the main branch.

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

## Latest Updates

**October 31, 2025 - Business Plan Integration:**
- ✅ Added comprehensive pricing component with 3 service packages
- ✅ Integrated trust indicators and client testimonials
- ✅ Enhanced all content for small-to-medium business targeting
- ✅ Optimized SEO for SMB search terms
- ✅ Updated all components with business plan information

**October 31, 2025 - Codebase Cleanup:**
- ✅ Removed all legacy HTML files (index.html, assets/, images/)
- ✅ Eliminated deployment confusion with duplicate code
- ✅ Streamlined repository to single React application
- ✅ All assets preserved in `/cjnf-react/public/`

See [BUSINESS_PLAN_INTEGRATION.md](BUSINESS_PLAN_INTEGRATION.md) for complete details.

## Contact

CJNF SOLUTIONS  
Founded by Carl'averis Jackson  
Website: cjnf-solutions.com  
GitHub: [https://github.com/CjDaOne](https://github.com/CjDaOne)  
Facebook: [i12tSolutions](https://facebook.com/i12tSolutions/)

## License

This project is based on the HTML5UP Dimension template, licensed under CCA 3.0.
