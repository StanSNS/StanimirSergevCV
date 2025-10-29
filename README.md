# Stanimir Sergev - Interactive CV

A modern, professional online CV with dual viewing modes designed for different audiences. Built with React, Vite, and Tailwind CSS.

## Features

### Dual View System
- **HR Mode**: Clean, professional layout optimized for recruiters and hiring managers
- **Developer Mode**: Terminal-inspired design with code aesthetics for technical audiences
- Smooth transitions between modes with persistent user preference

### Key Highlights
- Fully responsive design (Mobile, Tablet, Desktop)
- Fast loading and optimized performance
- Smooth animations and transitions
- SEO optimized with Open Graph tags
- Print-friendly (HR mode)
- Docker support for local development
- Automated deployment to GitHub Pages

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Containerization**: Docker & Docker Compose

## Getting Started

### Prerequisites
- Node.js 20+ and npm
- Docker and Docker Compose (for containerized development)

### Local Development (with Docker)

1. Clone the repository:
```bash
git clone https://github.com/StanSNS/stanimir-cv.git
cd stanimir-cv
```

2. Start the development server using Docker Compose:
```bash
docker-compose up
```

3. Open your browser and navigate to:
```
http://localhost:5173
```

The application will hot-reload as you make changes to the source code.

### Local Development (without Docker)

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:5173
```

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
stanimir-cv/
├── src/
│   ├── components/
│   │   ├── common/           # Shared components
│   │   │   └── ModeToggle.jsx
│   │   ├── hr-mode/          # HR view components
│   │   │   ├── HRHeader.jsx
│   │   │   ├── HRAbout.jsx
│   │   │   ├── HRExperience.jsx
│   │   │   ├── HRSkills.jsx
│   │   │   ├── HREducation.jsx
│   │   │   ├── HRProjects.jsx
│   │   │   └── HRFooter.jsx
│   │   └── dev-mode/         # Developer view components
│   │       ├── DevHeader.jsx
│   │       ├── DevAbout.jsx
│   │       ├── DevExperience.jsx
│   │       ├── DevSkills.jsx
│   │       ├── DevProjects.jsx
│   │       └── DevFooter.jsx
│   ├── contexts/
│   │   └── ViewModeContext.jsx
│   ├── data/
│   │   └── resume-data.js    # All CV content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── docker-compose.yml
├── Dockerfile
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Customization

### Updating CV Content

All CV content is centralized in `src/data/resume-data.js`. Simply update this file to modify:
- Personal information
- Work experience
- Skills
- Education
- Projects
- Certifications
- And more...

### Changing Colors

Color schemes are defined in `tailwind.config.js`:
- **HR Mode**: Professional blues and grays
- **Developer Mode**: Cyan, purple, and matrix green

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Your CV will be available at: `https://[your-username].github.io/[repo-name]/`

### Setup GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The next push to `main` will trigger deployment

## Docker Commands

### Start the application:
```bash
docker-compose up
```

### Start in detached mode:
```bash
docker-compose up -d
```

### Stop the application:
```bash
docker-compose down
```

### Rebuild the container:
```bash
docker-compose up --build
```

### View logs:
```bash
docker-compose logs -f
```

## Performance

- Lighthouse Score: 90+ across all categories
- Load time: < 2 seconds
- Optimized bundle size
- Lazy loading for optimal performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Stanimir Sergev. All rights reserved.

## Contact

- Email: stanimirsergev159@gmail.com
- LinkedIn: [linkedin.com/in/stansns](https://www.linkedin.com/in/stansns/)
- GitHub: [github.com/StanSNS](https://github.com/StanSNS)

---

Built with React, Vite, and Tailwind CSS
