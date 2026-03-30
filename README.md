# Neel Jacob Jogy - Portfolio Website

A modern, production-ready portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# 1. Navigate to the project folder
cd neel-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open http://localhost:5173 in your browser
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy.

## ✏️ Customization

### Update Your Information

Edit `src/data/content.js` to update:
- Personal info (email, LinkedIn URL)
- Projects
- Blog posts
- Skills
- Education

### Add Your CV

Place your CV files in the `public` folder:
- `public/Neel_Jacob_CV.pdf` (Software Engineer)
- `public/Neel_Jacob_CV_DA.pdf` (Data Analyst)

### Add Project Images

Add project screenshots to `public/projects/`:
- `face-recognition.png`
- `candidate-tracker.png`
- `tube-planner.png`
- `distributed-system.png`

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repo to Vercel
3. Deploy automatically

### Netlify
1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages
1. Install: `npm install gh-pages --save-dev`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## 📁 Project Structure

```
neel-portfolio/
├── public/
│   ├── favicon.svg
│   └── (your CV files go here)
├── src/
│   ├── components/
│   │   └── Layout.jsx
│   ├── data/
│   │   └── content.js      ← Edit this!
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Tech Stack

- **React 18** - UI Framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Lucide React** - Icons

## 📝 Contact Form Setup

The contact form currently simulates submission. To make it actually send emails:

### Option 1: EmailJS (Free)
1. Sign up at emailjs.com
2. Create an email template
3. Add your keys to the Contact.jsx component

### Option 2: Formspree
1. Sign up at formspree.io
2. Create a form
3. Update the form action URL

### Option 3: Netlify Forms
If hosting on Netlify, add `netlify` attribute to the form tag.

## 📄 License

MIT - Feel free to use this template for your own portfolio!

---

Built with ❤️ by Neel Jacob Jogy
