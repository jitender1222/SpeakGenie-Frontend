# How to run the project

### How to Run the Project Locally

1. Clone the repository
   git clone `<your-repo-url>`

2. Navigate to the project directory
   cd `<project-folder-name>`

3. Install dependencies
   `npm install`

4. Start the development server
   `npm run dev`

Once the server is running, open the URL shown in the terminal (usually http://localhost:5173 or http://localhost:3000) in your browser.

## Assumptions Made

This assignment focuses on `frontend` UI implementation, not backend or API integration.

The Generate Quiz action represents user intent only and does not generate real quiz data.

Images and assets are used as `static UI `elements to match the provided design.

Navigation between screens is handled locally using a `typed screen` state.

Accessibility and responsiveness were considered within the scope of the given designs.

## Project Structure

```src/
├── components/
│ ├── home/
│ │ ├── HomeHeader.tsx
│ │ ├── XPProgress.tsx
│ │ ├── QuickActions.tsx
│ │ ├── AudioStories.tsx
│ │ ├── PracticeHumans.tsx
│ │ ├── PracticeAI.tsx
│ │ └── BottomNav.tsx
│ ├── Section.tsx
│ ├── NavItem.tsx
│ └── AIAvatar.tsx
│
├── screens/
│ ├── HomeScreen.tsx
│ └── QuizScreen.tsx
│
├── types/
│ └── index.ts
│
└── assets/
└── images
```

## Responsiveness Strategy

Mobile-first approach

Horizontal scrolling for cards on small screens

Grid layouts on tablet and desktop

Consistent spacing and typography across breakpoints

## TypeScript Usage

Explicit prop interfaces for all components

Shared Screen union type for navigation

No usage of any

Strict alignment between props and passed data
