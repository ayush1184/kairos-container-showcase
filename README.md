# 🏗️ Kairos Container Showcase

A modern, responsive website showcasing custom shipping container solutions for residential and commercial use. Built with cutting-edge web technologies to deliver an exceptional user experience.

## 🌟 Project Overview

Kairos Container Showcase is a comprehensive web application that presents the company's innovative shipping container transformation services. The platform features an interactive carousel, detailed product showcases, and seamless navigation between different container models, providing visitors with an immersive experience of the company's offerings.

### Key Highlights
- **Interactive Hero Carousel** with auto-play and manual navigation
- **Three Distinct Container Models** with detailed specifications and pricing
- **Responsive Design** optimized for all device sizes
- **Modern UI/UX** with smooth animations and transitions
- **Contact Form** for lead generation and customer inquiries

## 🛠️ Technologies Used

### Core Technologies
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with enhanced developer experience
- **Vite** - Lightning-fast build tool and development server
- **React Router DOM** - Client-side routing for single-page application

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **shadcn/ui** - High-quality, accessible React components
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful, customizable SVG icons
- **Tailwind CSS Animate** - Animation utilities

### Additional Libraries
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation
- **TanStack Query** - Powerful data synchronization for React
- **Sonner** - Toast notifications
- **Embla Carousel** - Carousel library for React

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** or **bun**

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd kairos-container-showcase-main

# Install dependencies
npm install
# or
yarn install
# or
bun install

# Start the development server
npm run dev
# or
yarn dev
# or
bun dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build the application for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## ✨ Features

### 🎠 Interactive Hero Section
- **Auto-playing carousel** with 3 slides showcasing different container types
- **Manual navigation** with arrow controls
- **Smooth transitions** and fade effects
- **Responsive design** adapting to all screen sizes

### 🏠 Container Models Showcase
- **Model 1 (Premium)** - Starting at $45,000
- **Model 2 (Business)** - Starting at $65,000  
- **Model 3 (Luxury)** - Starting at $85,000
- **Detailed specifications** for each model
- **Feature comparisons** with checkmarks
- **Individual model pages** with comprehensive details

### 📱 Responsive Design
- **Mobile-first approach** ensuring optimal experience on all devices
- **Flexible grid layouts** that adapt to screen size
- **Touch-friendly interactions** for mobile users
- **Optimized images** for fast loading

### 🎨 Modern UI Components
- **shadcn/ui components** for consistent design system
- **Smooth animations** and hover effects
- **Accessible components** following WCAG guidelines
- **Dark/light theme support** (ready for implementation)

### 📞 Contact & Lead Generation
- **Contact form** with validation
- **Project type selection** (Residential/Commercial/Other)
- **Contact information** display
- **Quote request functionality**

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── About.tsx        # About section component
│   ├── Contact.tsx      # Contact form and info
│   ├── Features.tsx     # Features showcase
│   ├── Footer.tsx       # Site footer
│   ├── Hero.tsx         # Hero carousel section
│   ├── Models.tsx       # Container models showcase
│   └── Navbar.tsx       # Navigation component
├── pages/               # Page components
│   ├── Index.tsx        # Homepage
│   ├── Model1.tsx       # Model 1 details page
│   ├── Model2.tsx       # Model 2 details page
│   ├── Model3.tsx       # Model 3 details page
│   └── NotFound.tsx     # 404 error page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and configurations
├── assets/              # Static assets (images, icons)
└── main.tsx            # Application entry point
```

## 🎯 Key Components

### Hero Component
- Interactive carousel with auto-play functionality
- Smooth slide transitions with fade effects
- Manual navigation controls
- Responsive text and image scaling

### Models Component
- Grid layout showcasing all container models
- Interactive cards with hover effects
- Feature lists with checkmark icons
- Navigation to individual model pages

### Contact Component
- Multi-step contact form with validation
- Contact information cards
- Project type selection
- Form submission handling

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for any environment-specific configurations:

```env
VITE_APP_TITLE=Kairos Container Showcase
VITE_API_URL=your_api_url_here
```

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Custom color palette
- Extended spacing and typography
- Animation utilities
- Component-specific styles

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

### Recommended Hosting Platforms
- **Vercel** - Optimized for React applications
- **Netlify** - Great for static sites with form handling
- **GitHub Pages** - Free hosting for public repositories
- **AWS S3 + CloudFront** - Scalable cloud hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 👨‍💻 Author

**Ayush Singh** - Full Stack Developer

---

## 🔮 Future Enhancements

- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Advanced filtering for container models
- [ ] 3D model viewer integration
- [ ] Customer testimonials section
- [ ] Blog/news section
- [ ] Advanced contact form with file uploads
- [ ] Integration with CRM systems
- [ ] SEO optimization
- [ ] Performance monitoring

---

*Built with ❤️ using modern web technologies*