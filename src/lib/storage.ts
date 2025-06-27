import { StorageData } from "@/types/storage.type";

/**
 * configure data to local storage
 * @param name
 * @param value
 * @param action
 * @returns
 */
const configureStorage = (name: string, value: string, action: 'set' | 'remove' = 'set') => {
  if (typeof window !== 'undefined') {
    if (action === 'set') {
      return window.localStorage.setItem(name, value);
    }

    return window.localStorage.removeItem(name);
  }
};

/**
 * function for set up data to local storage
 * @param storage
 */
export const setStorage = (storage: StorageData[]) => {
  storage.map((item) => configureStorage(item.name, item.value));
};

/**
 * function for clear up data from local storage
 * @param storage
 */
export const clearStorage = (storage: string[]) => {
  storage.map((item) => configureStorage(item, '', 'remove'));
};

/**
 * function get static data from local storage
 * @param storage
 * @returns
 */
export const getStorage = (storage: string) => {
  if (typeof window !== 'undefined') {
    const store = window.localStorage.getItem(storage);

    if (typeof storage !== 'undefined') {
      return store;
    }
  }

  return null;
};