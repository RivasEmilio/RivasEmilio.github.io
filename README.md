# Emilio Rivas - Portfolio

A modern, animated portfolio website built with React, Vite, and Framer Motion.

## Features

- 🎨 Modern, responsive design
- ✨ Smooth animations with Framer Motion
- 🚀 Fast performance with Vite
- 📱 Mobile-friendly navigation
- 🎯 Single Page Application (SPA) with React Router

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **CSS3** - Styling with modern features

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

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

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

1. Make sure your repository is set to use GitHub Pages from the `gh-pages` branch
2. Push your changes to the `main` branch
3. The workflow will automatically build and deploy your site

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Push the `dist` folder to the `gh-pages` branch:
```bash
git subtree push --prefix dist origin gh-pages
```

Or use the GitHub Pages deployment tool in your repository settings.

## Project Structure

```
├── public/
│   └── media/          # Images and assets
├── src/
│   ├── components/     # Reusable components
│   │   └── Navigation.jsx
│   ├── pages/          # Page components
│   │   ├── Landing.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Work.jsx
│   │   ├── Contact.jsx
│   │   └── Development.jsx
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── vite.config.js      # Vite configuration
└── package.json
```

## Customization

### Updating Content

- Edit the page components in `src/pages/` to update content
- Modify `src/components/Navigation.jsx` to change navigation links
- Update styles in the respective `.css` files

### Changing Colors and Styles

- Global styles are in `src/index.css`
- Component-specific styles are in their respective `.css` files
- The color scheme can be customized by modifying CSS variables (if added) or direct color values

## License

This project is open source and available under the MIT License.
