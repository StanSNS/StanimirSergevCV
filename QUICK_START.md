# Quick Start Guide

## Running Locally with Docker (Recommended)

The easiest way to run this project is using Docker Compose:

```bash
docker-compose up
```

Then open your browser to: **http://localhost:5173**

## Running Locally without Docker

If you prefer not to use Docker:

```bash
npm install
npm run dev
```

Then open your browser to: **http://localhost:5173**

## What You'll See

### HR Mode (Default)
- Professional, clean layout
- Easy-to-read sections
- Print-friendly design
- Perfect for recruiters and hiring managers

### Developer Mode
- Terminal-inspired design
- Code-like aesthetics with syntax highlighting
- Interactive elements
- Tech-focused presentation
- Perfect for CTOs, Tech Leads, and developers

**Toggle between modes** using the button in the top-right corner!

## Making Changes

### Update Your CV Content

All your CV information is stored in one place:

```
src/data/resume-data.js
```

Simply edit this file to update:
- Personal info
- Work experience
- Skills
- Projects
- Education
- And everything else!

The changes will appear in both HR and Developer modes automatically.

### Customize Colors

Want different colors? Edit:

```
tailwind.config.js
```

Look for the `colors` section with `hr` and `dev` themes.

## Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates optimized files in the `dist/` folder.

## Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit: My awesome CV"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** section
4. Under "Source", select **GitHub Actions**

### Step 3: Update vite.config.js

In `vite.config.js`, update the `base` path:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/',  // Change this to your repo name
  // ... rest of config
})
```

### Step 4: Push to Deploy

Every time you push to the `main` branch, your CV will automatically deploy!

```bash
git add .
git commit -m "Update CV"
git push
```

Your CV will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

## Useful Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `docker-compose up` | Start with Docker |
| `docker-compose down` | Stop Docker containers |

## Troubleshooting

### Port 5173 already in use?

Change the port in `vite.config.js`:

```javascript
server: {
  port: 3000,  // Use any available port
}
```

### Docker container won't start?

Make sure Docker Desktop is running and try:

```bash
docker-compose down
docker-compose up --build
```

### Changes not showing?

- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Make sure the dev server is running
- Check the terminal for any error messages

## Need Help?

- Check the main [README.md](README.md) for detailed information
- Review [PROJECT_CONCEPTION.txt](PROJECT_CONCEPTION.txt) for design decisions
- Look at the code comments in the source files

## Tips for Success

1. **Update the resume data first** - Add all your real information to `src/data/resume-data.js`
2. **Test both modes** - Make sure your content looks good in both HR and Developer views
3. **Check mobile responsiveness** - Open DevTools and test different screen sizes
4. **Customize the colors** - Make it match your personal brand
5. **Add your projects** - Include links to your GitHub repos and live demos
6. **Optimize images** - If you add images, compress them first
7. **Test before deploying** - Run `npm run build` locally to catch any errors

## What Makes This CV Special?

✅ **Dual-view system** shows you understand different audiences
✅ **Modern tech stack** demonstrates current skills
✅ **Responsive design** works perfectly on all devices
✅ **Fast performance** loads in under 2 seconds
✅ **Clean code** showcases your development practices
✅ **Docker support** shows DevOps knowledge
✅ **CI/CD pipeline** demonstrates automation skills

**The CV itself becomes a portfolio piece!**

---

Good luck with your job search! 🚀
