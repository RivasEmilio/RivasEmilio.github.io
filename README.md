# Emilio Rivas - Portfolio

A modern, animated portfolio website built with React, Vite, and Framer Motion.

## Features

- 🎨 Modern, responsive design with accent colors
- ✨ Smooth animations with Framer Motion
- 🚀 Fast performance with Vite
- 📱 Mobile-friendly navigation
- 🎯 Single Page Application (SPA) with smooth scrolling

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **CSS3** - Modern styling with gradients and animations

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/RivasEmilio/RivasEmilio.github.io.git
cd RivasEmilio.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

The project uses GitHub Actions for automatic deployment. Simply push to the `master` branch and the workflow will automatically build and deploy to GitHub Pages.

Make sure GitHub Pages is configured to use **GitHub Actions** as the source in your repository settings.

## Project Structure

```
├── public/
│   └── media/          # Images and assets
├── src/
│   ├── components/     # Reusable components
│   │   └── Navigation.jsx
│   ├── pages/          # Page components
│   │   ├── Landing.jsx
│   │   └── Portfolio.jsx
│   ├── utils/          # Utility functions
│   │   └── assets.js
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── vite.config.js      # Vite configuration
└── package.json
```

## License

This project is open source and available under the MIT License.
