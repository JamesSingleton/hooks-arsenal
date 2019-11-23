import { useEffect, useState } from 'react';

const useSessionStorage = (key, initialValue, raw) => {
  const [sessionStoredValue, setSessionStoredValue] = useState(() => {
    try {
      const sessionStorageValue = sessionStorage.getItem(key);
      if (typeof sessionStorageValue !== 'string') {
        sessionStorage.setItem(key, raw ? String(initialValue) : JSON.stringify(initialValue));
        return initialValue;
      }

      return raw ? sessionStorageValue : JSON.parse(sessionStorageValue || 'null');
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const serializedState = raw ? String(sessionStoredValue) : JSON.stringify(sessionStoredValue);
      sessionStorage.setItem(key, serializedState);
    } catch (error) {
      console.error(error);
    }
  });
  return [sessionStoredValue, setSessionStoredValue];
};

export default useSessionStorage;
