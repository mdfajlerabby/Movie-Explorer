# Marquee

Marquee is a responsive Movie Explorer built with React and the TVMaze API. Browse a curated set of shows, search by title, and open a detailed view for any result.

## Features

- Editorial-style home page with responsive hero section
- Browse page with TVMaze show data
- Debounced live search using `GET /search/shows?q=:query`
- Responsive show card grid with poster, genre, year, and rating
- Details modal with summary, genres, runtime, network, and rating
- Close modal with the close button, Escape key, or backdrop click
- Loading, empty, and API error states
- Mobile-friendly layout

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- DaisyUI
- TVMaze API

## Project Structure

```text
src/
├── components/
│   ├── BrowseSection.jsx
│   ├── DetailsModal.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   └── ShowCard.jsx
├── hooks/
│   └── useShows.js
├── pages/
│   ├── Home.jsx
│   ├── Shows.jsx
│   ├── ShowDetails.jsx
│   └── NotFound.jsx
├── services/
│   └── tvmaze.js
├── utils/
│   └── show.js
├── App.jsx
└── App.css
```

`App.jsx` defines the router, while each UI section and the TVMaze data logic lives in its own reusable module.

## Routes

- `/` - Home page
- `/shows` - Browse and search page
- `/shows/:id` - Show details modal page

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Other Scripts

```bash
npm run lint      # Check the source code
npm run build     # Create a production build
npm run preview   # Preview the production build locally
```

## API

The app uses the public [TVMaze API](https://www.tvmaze.com/api):

- `GET https://api.tvmaze.com/shows` for the initial collection
- `GET https://api.tvmaze.com/search/shows?q=:query` for title search

No API key or environment variables are required.

## Deployment

The project is ready for Vercel, Netlify, or another static hosting service.

- Build command: `npm run build`
- Output directory: `dist`
- `public/_redirects` keeps React Router routes working on Netlify refreshes.
- `vercel.json` keeps React Router routes working on Vercel refreshes.

For submission, provide both the public GitHub repository URL and the live deployment URL.
