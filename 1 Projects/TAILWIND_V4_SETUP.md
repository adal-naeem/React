# ⚡ Tailwind CSS v4 Quick Setup Guide
> **Note:** This setup uses the latest Rust-based engine for maximum speed.

## 🛠️ Step 1: Installation
Run this command in your project terminal:
\`\`\`bash
npm install tailwindcss @tailwindcss/postcss postcss
\`\`\`

## ⚙️ Step 2: PostCSS Config
Create `postcss.config.js` in the root folder:
\`\`\`javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
\`\`\`

## 🎨 Step 3: Global CSS
Add this line to the top of your `src/index.css`:
\`\`\`css
@import "tailwindcss";
\`\`\`

---

## ✅ Checklist for Future Projects
- [ ] Vite React Project created
- [ ] Packages installed
- [ ] PostCSS file created
- [ ] CSS Import added
- [ ] Terminal restarted (`npm run dev`)

## 🚀 Why this is "Smart"?
- **No Config File:** Less clutter in your project.
- **Lightning Speed:** Compiles 10x faster than v3.
- **Auto Purge:** Only used classes are included in the build.