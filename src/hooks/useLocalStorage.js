import { useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue, raw) => {
  const [localStoredValue, setLocalStoredValue] = useState(() => {
    try {
      const localStorageValue = window.localStorage.getItem(key);
      if (typeof localStorageValue !== 'string') {
        localStorage.setItem(key, raw ? String(initialValue) : JSON.stringify(initialValue));
        return initialValue;
      }
      return raw ? localStorageValue : JSON.parse(localStorageValue || 'null');
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const serializedState = raw ? String(localStoredValue) : JSON.stringify(localStoredValue);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error(error);
    }
  }, [localStoredValue]);

  return [localStoredValue, setLocalStoredValue];
};

export default useLocalStorage;
