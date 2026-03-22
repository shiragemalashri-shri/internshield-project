# Scamtern - Internship Scam Detection Tool

A modern web application that helps students identify fake internships, scam job offers, and fraudulent training programs through instant risk assessment.

## Features

- **Scam Detection Tool**: Analyze internship offers for red flags and suspicious patterns
- **Risk Scoring**: Get a clear 0-100 risk score with Low/Medium/High labels
- **Red Flag Detection**: Identify common scam patterns including:
  - Free email domains for corporate communication
  - Money/registration fee requests
  - Unrealistic salary promises
  - Urgency tactics and pressure
  - Poor grammar and vague descriptions
  - Suspicious domains and contact info

- **Educational Resources**: Learn about common internship scams and warning signs
- **Dark Mode Support**: Switch between light and dark themes for comfortable viewing
- **Mobile-First Design**: Fully responsive and student-friendly interface
- **Privacy First**: No data storage - all analysis happens locally

## Project Structure

```
/app
  /check         - Scam detection form and results page
  /awareness     - Educational content about scams
  /about         - Project information and values
  /page.tsx      - Landing page
  /layout.tsx    - Root layout with theme support
  /not-found.tsx - 404 error page
  /globals.css   - Theme design tokens

/components
  /header.tsx           - Navigation header with theme toggle
  /hero.tsx             - Landing page hero section
  /how-it-works.tsx     - Process explanation section
  /footer.tsx           - Footer with links
  /scam-form.tsx        - Scam detection form component
  /results-display.tsx  - Risk assessment results display
  /ui/                  - Shadcn UI components

/lib
  /detection.ts  - Scam detection algorithm and logic
  /utils.ts      - Utility functions

/public
  /logo.jpg      - Scamtern logo
```

## Design System

### Colors
- **Primary**: Pastel Lavender (`oklch(0.7 0.08 290)`)
- **Secondary**: Soft Peach (`oklch(0.85 0.07 30)`)
- **Accent**: Mint Green (`oklch(0.8 0.1 150)`)
- **Background**: Off-white (`oklch(0.98 0 0)`)

### Typography
- **Headings**: System fonts (Inter/Poppins)
- **Body**: Geist Sans

### Components
- Rounded cards with soft shadows
- Smooth animations and transitions
- Accessible color contrasts
- Mobile-first responsive design

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Key Pages

- **Home (`/`)**: Landing page with overview and CTA
- **Check (`/check`)**: Scam detection form and analysis results
- **Awareness (`/awareness`)**: Educational content about common scams and red flags
- **About (`/about`)**: Project mission, values, and limitations
- **404**: Error page for undefined routes

## Detection Algorithm

The scam detection uses rule-based analysis checking for:
- Email domain legitimacy
- Money/payment requests
- Unrealistic salary claims
- Urgency tactics
- Grammar and writing quality
- Job description specificity
- Website information
- Contact information verification

Each red flag adds points to a cumulative risk score (0-100), which is categorized as Low, Medium, or High risk.

## Disclaimer

Scamtern is an educational and awareness tool. It is not a complete solution and has limitations:
- Always verify opportunities through your university placement office
- Research companies independently
- Never share sensitive information with unverified sources
- Trust your instincts

## Dark Mode

Dark mode is automatically supported through next-themes. Users can:
- Manually toggle theme with the button in the header
- Follow system preferences
- Choice is persisted in localStorage

## Technologies Used

- **Next.js 16**: React framework with App Router
- **React 19**: UI library
- **Tailwind CSS v4**: Utility-first CSS framework
- **Shadcn UI**: Component library
- **Lucide React**: Icon library
- **Next-Themes**: Theme management

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly

## Future Enhancements

- Community scam reports database
- Machine learning model for better detection
- Browser extension for quick checks
- Email verification API integration
- Real-time threat intelligence

## License

Educational and awareness project. Use for student safety.

## Support

For questions, feedback, or to report a scam: support@scamtern.com

---

Built with ❤️ for student safety
