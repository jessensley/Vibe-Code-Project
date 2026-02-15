# Michael Malul Fragrance Quiz

A React + Vite web application to help users discover their perfect fragrance match from the Michael Malul brand through an interactive quiz.

## Features

- **Interactive Quiz**: 5 questions designed to match user preferences with fragrances
- **Smart Recommendations**: Algorithmic matching that identifies top 2 fragrance recommendations
- **Elegant Design**: Sophisticated styling inspired by the Michael Malul brand aesthetic
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Progress Tracking**: Visual progress bar and question counter
- **Restart Functionality**: Users can retake the quiz anytime

## Quiz Questions

1. Which type of fragrance do you gravitate toward?
2. What is your favorite season?
3. Where will you wear this scent?
4. If you could go anywhere right now, where would you go?
5. What type of scent are you most drawn to?

## Available Fragrances

- Wood + Cardamom
- Zest + Vetiver
- Ginger + Mist
- Amber + Smoke
- Rose + Honey
- Latte + Nectar
- Sangria + Saffron
- Vanilla + Crème

## Project Structure

```
src/
├── components/
│   ├── Quiz.jsx
│   ├── Quiz.css
│   ├── Results.jsx
│   └── Results.css
├── data/
│   └── quizData.js
├── App.jsx
├── App.css
└── main.jsx
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd "Vibe Code Project"
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

## Design Inspiration

The styling is inspired by the Michael Malul brand website, featuring:
- Elegant serif typography (Georgia/Garamond)
- Luxury color palette with gold accents (#d4af37)
- Sophisticated layout with whitespace
- Smooth animations and transitions
- Premium feel throughout the user experience

## Notes

- Placeholder images are used throughout the application and should be replaced with actual fragrance product images
- The fragrance descriptions are placeholder text and should be updated with actual product details
- The "View on Michael Malul" button is currently non-functional and should be linked to the actual product pages

## Technology Stack

- **React 18**: Frontend UI framework
- **Vite 4**: Build tool and dev server
- **CSS3**: Styling with custom properties and gradients
- **JavaScript ES6+**: Modern JavaScript features

---

Created as a class project to help users discover their perfect fragrance.
