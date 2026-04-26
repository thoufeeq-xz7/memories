# Kallumakay - Memory Website

A modern, aesthetic website for sharing college memories and friendship moments.

## 📁 Project Structure

```
.
├── index.html           # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
├── kallumakay photos/  # Your photo folder (required)
└── README.md          # This file
```

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Navigate to your project folder**:
   ```bash
   cd path/to/memories
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. Follow the prompts and your site will be live!

### Option 2: Deploy via GitHub

1. Push your project to GitHub
2. Connect your GitHub repo to Vercel (vercel.com)
3. Vercel will auto-deploy on each push

### Option 3: Deploy via Vercel Web UI

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Upload your folder or connect your Git repository
4. Click "Deploy"

## 📸 Setting Up Photos

The website expects photos in a `kallumakay photos/` folder at the root level.

### How it works:
- The website automatically loads photos from the `kallumakay photos/` folder
- Photos are used in:
  - **Hero slideshow** (first 3 photos)
  - **Gallery grid** (all photos)
  - **Stories section** (selected photos with captions)

### To customize:

1. Edit `script.js` and modify the `photoList` array:
   ```javascript
   const photoList = [
       'your-photo-1.jpg',
       'your-photo-2.jpg',
       // ... add more
   ];
   ```

2. Edit `memoryStories` array to customize story titles and descriptions

## 🎨 Customization

### Change Colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-dark: #1a1a1a;      /* Dark background */
    --primary-light: #f5f1e8;     /* Light background */
    --accent-gold: #d4af37;       /* Gold accent */
    --accent-orange: #c97a3a;     /* Orange accent */
}
```

### Change Instagram Handle

Edit `index.html` footer:
```html
<a href="https://instagram.com/YOUR_HANDLE" target="_blank">
    Instagram @YOUR_HANDLE
</a>
```

### Add/Edit Quotes

Edit `memoryStories` in `script.js` to add more memories and stories.

## ✨ Features

- ✅ Hero section with image slideshow
- ✅ Responsive gallery grid
- ✅ Lightbox for full-size image viewing
- ✅ Stories timeline with smooth animations
- ✅ Quote carousel
- ✅ Mobile-responsive design
- ✅ Smooth scroll animations
- ✅ Music toggle button
- ✅ Glassmorphism effects
- ✅ Lazy image loading

## 🌐 Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

Made with ❤️ by friends

---

**Need help?** Check the HTML, CSS, and JS files for detailed comments and structure.
