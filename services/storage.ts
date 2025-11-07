import AsyncStorage from "@react-native-async-storage/async-storage";

export const StorageService = {
  /**
   * Save data to storage
   */
  async setItem<T>(key: string, value: T): Promise<void> {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error(`Failed to save item with key "${key}":`, error);
      throw error;
    }
  },

  /**
   * Get data from storage
   */
  async getItem<T>(key: string): Promise<T | null> {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error(`Failed to load item with key "${key}":`, error);
      return null;
    }
  },

  /**
   * Remove data from storage
   */
  async removeItem(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error(`Failed to remove item with key "${key}":`, error);
      throw error;
    }
  },

  /**
   * Clear all data from storage
   */
  async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error("Failed to clear storage:", error);
      throw error;
    }
  },
};
