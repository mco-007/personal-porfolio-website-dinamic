
# Mücahit Özcan - Personal Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes
- **Multi-language Support**: Turkish and English content
- **Modern UI/UX**: Glass morphism effects, animations, and cyber-themed design
- **Interactive Elements**: Smooth scrolling, hover effects, and dynamic animations
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading and smooth animations

## 🛠️ Built With

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icons
- **Supabase** - Backend as a Service

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── HeroSection.tsx # Landing section
│   ├── AboutSection.tsx # About me section
│   ├── ExperienceSection.tsx # Work experience
│   ├── ProjectsSection.tsx # Portfolio projects
│   ├── SkillsSection.tsx # Technical skills
│   ├── ContactSection.tsx # Contact form
│   ├── Navigation.tsx  # Header navigation
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── integrations/       # Third-party integrations
└── index.css          # Global styles
```

## 🎨 Features

### Sections

- **Hero**: Introduction with animated background and call-to-action
- **About**: Personal information and values
- **Experience**: Professional work history
- **Projects**: Portfolio of completed projects
- **Skills**: Technical competencies organized by category
- **Contact**: Contact form and social links

### Design Elements

- Cyber-themed design with neon accents
- Glass morphism effects
- Animated background grids and particles
- Smooth scroll navigation
- Responsive typography
- Interactive hover effects

## 🌐 Deployment

### Using Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Using Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### Using GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🔧 Configuration

### Environment Variables

Create a `.env` file for environment-specific settings:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Customization

- **Colors**: Modify the color scheme in `tailwind.config.ts`
- **Content**: Update section content in respective component files
- **Images**: Replace placeholder images in the `public` folder
- **Fonts**: Custom fonts are loaded in `index.css`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Email**: mcozcn@gmail.com
- **LinkedIn**: [linkedin.com/in/mcozcn](https://linkedin.com/in/mcozcn)
- **Website**: [your-domain.com](https://your-domain.com)

---

Built with ❤️ by Mücahit Özcan
