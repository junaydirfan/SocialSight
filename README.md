# SocialSight

SocialSight is a modern web application that allows users to preview how their images will appear across different social media platforms. Built with Next.js and TypeScript, it provides a sleek, responsive interface with dark mode support.

## Features

- 🖼️ **Image Upload**: Drag and drop or click to upload images (PNG, JPG, GIF)
- 🌓 **Dark Mode**: Toggle between light and dark themes
- 📱 **Multi-Platform Previews**: See how your image looks on:
  - YouTube
  - Facebook
  - Instagram
  - Twitter
  - Reddit
- 🎨 **Modern UI**: Clean, responsive design with smooth animations
- 🔄 **Real-time Preview**: Instant updates as you switch between platforms

## Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Form Handling**: React Hook Form
- **Validation**: Zod

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (package manager)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/SocialSight.git
cd SocialSight
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To build the project for production:

```bash
pnpm build
```

To build for GitHub Pages deployment:

```bash
pnpm build:gh-pages
```

## Project Structure

```
SocialSight/
├── app/
│   ├── globals.css      # Global styles and Tailwind configuration
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main page component
├── components/          # Reusable UI components
├── public/             # Static assets
└── styles/             # Additional styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide](https://lucide.dev/)
