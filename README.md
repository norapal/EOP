# Equine Ownership Portfolio - Predictable Cash Flo (Billy)

A professional, academic-quality website portfolio for documenting equine ownership, management, and care. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Multi-page Portfolio**: Comprehensive sections covering all aspects of equine ownership
- **Image Upload Zones**: Drag-and-drop image upload functionality throughout
- **Video Embedding**: Support for YouTube and Vimeo video embeds
- **Interactive Tables**: Editable tables for vaccines, deworming, feed schedules, and budget
- **Data Visualization**: Charts and graphs for budget analysis
- **PDF Export**: Print-friendly stylesheet for PDF generation
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Accessible**: WCAG 2.1 AA compliant design

## Design Theme

- **Color Scheme**: Deep forest green (#2C5530), navy blue (#1B4B5A), and cream/beige (#F5F1E8)
- **Aesthetic**: "Granola vibes" - organic, natural, earthy with soft rounded corners
- **Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body text
- **Layout**: Clean, minimalist with ample white space and subtle texture overlays

## Portfolio Sections

1. **Home**: Hero section with introduction and navigation
2. **About Billy**: Physical description, breed information, ownership history
3. **Facility**: Facility layout, location, and assessment
4. **Conformation**: Analysis based on breed standards with photo documentation
5. **Performance**: Movement analysis and gait quality assessment
6. **Lameness**: Lameness evaluation and detection methodology
7. **Health & Wellness**: Wellness program, diet, vaccination, and deworming schedules
8. **Pedigree**: Genetic analysis and disorder risk assessment
9. **Budget**: Annual expense breakdown with auto-calculating totals and charts
10. **Citations**: References and sources in ASCI format

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

### Adding Images

- Click on any image upload zone
- Select an image file or drag and drop
- Images will display as previews
- Click on images in galleries to view in lightbox

### Adding Videos

- Enter a YouTube or Vimeo URL in the video input fields
- The video will automatically embed

### Editing Tables

- Click on any table cell to edit
- Changes are saved automatically
- Budget totals calculate automatically

### Exporting to PDF

- Click the "Export PDF" button in the bottom right
- Use your browser's print dialog to save as PDF
- Print styles will automatically format the content

## Project Structure

```
EOP/
├── src/
│   ├── components/      # Reusable components
│   │   ├── Layout.tsx
│   │   ├── ImageUpload.tsx
│   │   ├── Lightbox.tsx
│   │   ├── PDFExport.tsx
│   │   └── Section.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── AboutBilly.tsx
│   │   ├── Facility.tsx
│   │   ├── Conformation.tsx
│   │   ├── Performance.tsx
│   │   ├── Lameness.tsx
│   │   ├── HealthWellness.tsx
│   │   ├── Pedigree.tsx
│   │   ├── Budget.tsx
│   │   └── Citations.tsx
│   ├── lib/             # Utility functions
│   │   └── utils.ts
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## Technologies Used

- **React 18**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Recharts**: Chart library for data visualization
- **Lucide React**: Icon library

## Notes

- Images uploaded through the interface are stored locally in the browser (not persisted to server)
- For production deployment, consider adding a backend for image storage
- All form data is stored in component state (consider adding persistence if needed)
- The PDF export uses browser print functionality

## License

This project is for academic/educational purposes.

