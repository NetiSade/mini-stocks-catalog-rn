// Define globals
global.__DEV__ = true;

// Mock AsyncStorage
jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve(null)),
  removeItem: jest.fn(() => Promise.resolve()),
  clear: jest.fn(() => Promise.resolve()),
}));

// Mock Platform - must be done before any imports
const mockPlatform = {
  OS: "ios",
  Version: 14,
  select: (obj) => obj.ios || obj.default || obj.native,
};

jest.mock("react-native/Libraries/Utilities/Platform", () => mockPlatform, {
  virtual: true,
});

// Mock useColorScheme hook
jest.mock("@/hooks/use-color-scheme", () => ({
  useColorScheme: jest.fn(() => "light"),
}));
