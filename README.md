# BuyMed Product App

A Next.js application for browsing and managing pharmaceutical products with search and filtering capabilities.

## How to Run

### Prerequisites
- Node.js (v20 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## State Management

The application uses a hybrid approach combining URL-based state management with React local state:

### Data Flow
1. User types in search or selects filter → Updates URL query params via `nuqs`
2. `useEffect` in main page watches `search` and `filter` query params
3. When params change → Triggers API call to fetch products
4. Products stored in local state → Renders product cards

