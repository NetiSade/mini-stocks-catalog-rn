# Testing Guide

## 🎯 Minimalistic Setup

This project has a minimal Jest testing infrastructure focused on testing business logic and data validation.

## 📦 Setup

Install dependencies (already done if you ran `npm install`):

```bash
npm install
```

## 🚀 Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (auto-rerun on changes)
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## ✅ What's Tested

Currently testing:

- **Stock Data Validation** (`__tests__/data/stocks.test.ts`)
  - Data structure validation
  - Required fields check
  - Unique ticker validation
- **Utility Functions** (`__tests__/utils/format.test.ts`)
  - Price formatting
  - Percentage formatting
  - Ticker validation
- **Context/State Management** (`__tests__/contexts/PreferencesContext.test.tsx`)
  - Theme preference management
  - State updates
  - System theme fallback

## 📁 Test Structure

```
__tests__/
├── contexts/
│   └── PreferencesContext.test.tsx  # Context/hook tests
├── data/
│   └── stocks.test.ts               # Data validation tests
└── utils/
    └── format.test.ts               # Utility function tests
```

## ✍️ Writing New Tests

### 1. Utility Function Test (Easiest - Start Here!)

Pure functions are the easiest to test:

```typescript
import { formatPrice } from "@/utils/format";

describe("formatPrice", () => {
  it("should format price with dollar sign", () => {
    expect(formatPrice(123.45)).toBe("$123.45");
  });

  it("should format with 2 decimal places", () => {
    expect(formatPrice(100)).toBe("$100.00");
  });
});
```

### 2. Data Validation Test

Test your data structures and business rules:

```typescript
import { STOCKS_MOCK_DATA } from "@/data/stocks";

describe("Stock Validation", () => {
  it("should have positive prices", () => {
    STOCKS_MOCK_DATA.forEach((stock) => {
      expect(stock.price).toBeGreaterThan(0);
    });
  });
});
```

### 3. Context/Hook Test

Test React contexts and custom hooks using `renderHook`:

```typescript
import { renderHook, act, waitFor } from "@testing-library/react-native";
import {
  PreferencesProvider,
  usePreferences,
} from "@/contexts/PreferencesContext";

const wrapper = ({ children }) => (
  <PreferencesProvider>{children}</PreferencesProvider>
);

describe("PreferencesContext", () => {
  it("should update theme preference", async () => {
    const { result } = renderHook(() => usePreferences(), { wrapper });

    act(() => {
      result.current.updateTheme("dark");
    });

    await waitFor(() => {
      expect(result.current.preferences.theme).toBe("dark");
    });
  });
});
```

**Key concepts:**

- **`renderHook`**: Test hooks outside of components
- **`wrapper`**: Provide necessary context providers
- **`act`**: Wrap state updates
- **`waitFor`**: Wait for async updates

## 🎨 Adding Component Tests

Component tests require additional setup due to React Native and context dependencies. For a minimal setup, focus on:

1. **Pure functions and utilities** (easiest to test)
2. **Data validation** (no UI dependencies)
3. **Business logic** (isolated from UI)

For component testing, you'll need to mock:

- Platform APIs
- Navigation
- All Context Providers
- React Native components

## 📝 Best Practices

1. **Start simple** - Test pure functions and data first
2. **Keep tests focused** - One assertion per test
3. **Use descriptive names** - Explain what you're testing
4. **Avoid testing implementation** - Test behavior, not internals
5. **Mock external dependencies** - AsyncStorage, APIs, etc.

## 🎓 Test Coverage

**Current Status:** 15 tests passing across 3 test suites

- ✅ Data validation (stocks data)
- ✅ Utility functions (formatting, validation)
- ✅ Context/state management (preferences)

**Recommended next steps:**

1. Add more context tests (WatchlistContext, ThemeContext)
2. Add business logic tests (calculations, transformations)
3. Add navigation flow tests (integration)
4. Add component tests (requires more complex setup)
