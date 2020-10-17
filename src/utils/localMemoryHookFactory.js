import { useEffect, useState } from 'react';

const localMemoryHookFactory = (storageType) => (key, initialValue, raw) => {
  const [localStoredValue, setLocalStoredValue] = useState(() => {
    try {
      const localStorageValue = window[storageType].getItem(key);
      if (typeof localStorageValue !== 'string') {
        window[storageType].setItem(key, raw ? String(initialValue) : JSON.stringify(initialValue));
        return initialValue;
      }
      return raw ? localStorageValue : JSON.parse(localStorageValue);
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const serializedState = raw ? String(localStoredValue) : JSON.stringify(localStoredValue);
      window[storageType].setItem(key, serializedState);
    } catch (error) {
      console.error(error);
    }
  }, [localStoredValue, key, raw]);

  return [localStoredValue, setLocalStoredValue];
};

export default localMemoryHookFactory;
