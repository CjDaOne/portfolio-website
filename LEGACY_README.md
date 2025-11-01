# Legacy HTML Site - REMOVED

## Status: ARCHIVED & REMOVED

The legacy HTML site has been **completely removed** from the repository to eliminate deployment confusion and streamline the codebase.

## What Was Removed
- ❌ `index.html` - Original HTML5UP Dimension template-based site
- ❌ `assets/` - CSS, JavaScript, and other static assets (jQuery, SASS, etc.)
- ❌ `images/` - Portfolio and profile images (duplicates)
- ❌ `html5up-dimension.zip` - Original template archive

## Why Removed
- Caused confusion with Netlify deployment
- All content migrated to React app
- Images duplicated in `/cjnf-react/public/images`
- No longer needed for any purpose

## All Assets Preserved
All images and content have been migrated to the React application at `/cjnf-react/public/images`

## Migration
All content and functionality from this legacy site has been migrated to the React application:
- ✅ All sections (About, Services, Portfolio, Contact)
- ✅ Images and branding
- ✅ Business information
- ✅ Meta tags and SEO
- ✅ Responsive design
- ✅ Contact form (upgraded to Netlify Forms)
- ✅ Social media links

## Production Site
**The production site is the React app in `/cjnf-react`**

To work with the production site:
```bash
cd cjnf-react
npm install
npm run dev      # Development server
npm run build    # Production build
npm run test     # Run tests
```

---

*Archived: October 31, 2025. Use the React app for all new development.*
