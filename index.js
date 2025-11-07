import { registerRootComponent } from 'expo';
import React from 'react';
import App from './App';
import { PreferencesProvider } from './contexts/PreferencesContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { WatchlistProvider } from './contexts/WatchlistContext';

function AppWrapper() {
  return (
    <PreferencesProvider>
      <ThemeProvider>
        <WatchlistProvider>
          <App />
        </WatchlistProvider>
      </ThemeProvider>
    </PreferencesProvider>
  );
}

registerRootComponent(AppWrapper);

