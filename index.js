import { registerRootComponent } from 'expo';
import React from 'react';
import App from './App';
import { PreferencesProvider } from './contexts/PreferencesContext';
import { ThemeProvider } from './contexts/ThemeContext';

function AppWrapper() {
  return (
    <PreferencesProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </PreferencesProvider>
  );
}

registerRootComponent(AppWrapper);

