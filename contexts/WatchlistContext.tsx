import { StorageService } from "@/services/storage";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const WATCHLIST_STORAGE_KEY = "@watchlist";

interface WatchlistContextType {
  watchlist: string[];
  watchlistCount: number;
  addToWatchlist: (ticker: string) => void;
  removeFromWatchlist: (ticker: string) => void;
  isInWatchlist: (ticker: string) => boolean;
  toggleWatchlist: (ticker: string) => void;
  isLoading: boolean;
}

const WatchlistContext = createContext<WatchlistContextType | undefined>(
  undefined
);

export function WatchlistProvider({ children }: { children: ReactNode }) {
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadWatchlist();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      saveWatchlist();
    }
  }, [watchlist, isLoading]);

  const loadWatchlist = async () => {
    const savedWatchlist = await StorageService.getItem<string[]>(
      WATCHLIST_STORAGE_KEY
    );
    if (savedWatchlist) {
      setWatchlist(savedWatchlist);
    }
    setIsLoading(false);
  };

  const saveWatchlist = async () => {
    await StorageService.setItem(WATCHLIST_STORAGE_KEY, watchlist);
  };

  const addToWatchlist = (ticker: string) => {
    setWatchlist((prev) => {
      if (prev.includes(ticker)) {
        return prev;
      }
      return [...prev, ticker];
    });
  };

  const removeFromWatchlist = (ticker: string) => {
    setWatchlist((prev) => prev.filter((t) => t !== ticker));
  };

  const isInWatchlist = (ticker: string): boolean => {
    return watchlist.includes(ticker);
  };

  const toggleWatchlist = (ticker: string) => {
    if (isInWatchlist(ticker)) {
      removeFromWatchlist(ticker);
    } else {
      addToWatchlist(ticker);
    }
  };

  const value = {
    watchlist,
    watchlistCount: watchlist.length,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
    toggleWatchlist,
    isLoading,
  };

  if (isLoading) {
    return null;
  }

  return (
    <WatchlistContext.Provider value={value}>
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error("useWatchlist must be used within WatchlistProvider");
  }
  return context;
}
