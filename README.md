# CJNF SOLUTIONS - Digital Consulting Firm Website

Modern React-based website for CJNF SOLUTIONS, a digital consulting firm specializing in comprehensive web services including domain registration, web hosting, website development, email account setup, and ongoing website maintenance.

## 🚀 Production Site

The production website is built with **React 19 + TypeScript + Vite + Tailwind CSS** and located in the `/cjnf-react` directory.

**Legacy HTML site** (root directory) is archived - see [LEGACY_README.md](LEGACY_README.md)

## Business Overview

CJNF SOLUTIONS empowers businesses with a robust online presence through affordable, reliable, and professional services. Our mission is to help businesses optimize operations, improve efficiency, and achieve strategic goals in the digital landscape.

## Services Offered

- **Domain Name Registration**: Annual registration to secure web presence
- **Web Hosting**: Reliable hosting services for website availability
- **Website Development**: Custom web design, development, and content creation
- **Business Email Setup**: Professional email accounts linked to domains
- **Website Maintenance**: Ongoing support for updates and functionality

## Features

- **Responsive Design**: Optimized for all devices using modern CSS techniques
- **Modern UI**: Updated with gradients, animations, and interactive elements
- **Accessibility**: WCAG compliant with proper ARIA labels and alt texts
- **Performance**: Lazy loading images and optimized assets
- **SEO**: Meta tags for search engine optimization
- **Contact Form**: Client-side validation for user interaction

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
├── cjnf-react/              # 🚀 PRODUCTION APP
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Contact.tsx   # Netlify Forms integration
│   │   │   ├── Footer.tsx
│   │   │   └── __tests__/    # Component tests
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   ├── dist/                # Production build output
│   ├── package.json
│   ├── vite.config.ts
│   ├── vitest.config.ts
│   └── tailwind.config.js
├── assets/                  # Legacy HTML assets (archived)
├── images/                  # Shared images
├── index.html               # Legacy HTML (archived)
├── netlify.toml             # Deployment configuration
├── DEPLOYMENT_GUIDE.md      # Deployment instructions
├── TEAM_GUIDE.md            # Team management guide
├── TRANSFORMATION_TASKS.md  # Migration tracking
├── LEGACY_README.md         # Legacy site documentation
└── README.md                # This file
```

## Deployment

The site is configured for **Netlify** deployment with automatic builds from the main branch.

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

## Contact

CJNF SOLUTIONS  
Founded by Carl'averis Jackson  
Website: cjnf-solutions.com  
GitHub: [https://github.com/CjDaOne](https://github.com/CjDaOne)  
Facebook: [i12tSolutions](https://facebook.com/i12tSolutions/)

## License

This project is based on the HTML5UP Dimension template, licensed under CCA 3.0.
