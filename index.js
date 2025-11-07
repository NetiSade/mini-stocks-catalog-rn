import { registerRootComponent } from 'expo';
import React from 'react';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';

function AppWrapper() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

registerRootComponent(AppWrapper);

