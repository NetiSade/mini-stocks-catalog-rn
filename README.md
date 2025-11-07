# Stocks Mini Catalog

A React Native mobile app for browsing and managing a stock watchlist with theme support.

## Features

- 📊 Browse stock catalog with search
- ⭐ Add/remove stocks to watchlist
- 🌓 Light/Dark theme toggle
- 💾 Persistent preferences (theme, watchlist)
- 📱 Native navigation with React Navigation
- ✨ Smooth animations

## Tech Stack

- **React Native** - Mobile framework
- **Expo** - Development platform
- **TypeScript** - Type safety
- **React Navigation** - Native stack navigation
- **Context API** - State management
- **AsyncStorage** - Local persistence
- **Jest** - Testing framework

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn
- Expo Go app (for mobile testing)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

### Running the App

- **iOS Simulator**: Press `i`
- **Android Emulator**: Press `a`
- **Web**: Press `w`
- **Expo Go**: Scan QR code with your phone

## Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

**Test Coverage:** 15 tests covering data validation, utility functions, and context management.

See [README.test.md](./README.test.md) for detailed testing documentation.

## Project Structure

```
.
├── components/        # Reusable UI components
├── contexts/          # React Context providers
├── screens/           # Screen components
├── navigation/        # Navigation configuration
├── utils/            # Utility functions
├── data/             # Mock data
├── constants/        # Theme and constants
└── __tests__/        # Test files
```

## Scripts

```bash
npm start           # Start Expo dev server
npm test            # Run tests
npm run lint        # Run ESLint
npm run test:watch  # Run tests in watch mode
```

## License

MIT
