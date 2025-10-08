# AI, ML & Data Science Lab - Web Portal

A Next.js landing page that showcases all analysis projects from the alvaro-ai-ml-ds-lab repository.

## Features

- 📊 **Project Gallery**: Browse all data science and machine learning projects organized by category
- 🎨 **Modern UI**: Clean, responsive design with dark mode support
- 🔗 **Direct Access**: Click on any project card to view the full HTML analysis
- 🏷️ **Tag System**: Quick identification of project methodologies and technologies
- 📱 **Responsive**: Works seamlessly on desktop, tablet, and mobile devices

## Project Categories

- **Machine Learning**: Supervised and unsupervised learning implementations
- **Data Science**: Statistical analyses and hypothesis testing
- **Deep Learning**: Neural networks and deep learning projects (coming soon)
- **LLM Projects**: Large language model applications (coming soon)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the app directory:
```bash
cd app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── app/
│   ├── page.tsx              # Landing page with project cards
│   ├── analysis/[[...path]]/ # Dynamic route for HTML files
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── lib/
│   └── projects.ts           # Project metadata configuration
└── public/                   # Static assets
```

## Adding New Projects

To add a new project to the landing page:

1. Open `lib/projects.ts`
2. Add a new entry to the `projects` array:

```typescript
{
  id: 'project-id',
  title: 'Project Title',
  description: 'Brief description of the project',
  category: 'Machine Learning', // or 'Data Science', etc.
  htmlPath: '/path/to/analysis.html',
  date: 'Month Year',
  tags: ['Tag1', 'Tag2', 'Tag3']
}
```

3. The project will automatically appear on the landing page

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React**: UI library

## Features

### Landing Page
- Project cards organized by category
- Hover effects and animations
- Tag display for quick technology identification
- Responsive grid layout

### Analysis Viewer
- Full HTML rendering of R Markdown outputs
- Navigation bar with back button
- Styled content for better readability
- Dark mode support

## License

This project is part of the alvaro-ai-ml-ds-lab repository and is available for academic and educational use.

## Author

**Álvaro Granados Villodre**
