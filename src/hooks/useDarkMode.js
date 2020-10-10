import { useEffect } from 'react';

import useLocalStorage from './useLocalStorage';

const useDarkMode = (defaultValue = false, darkModeClassName = 'dark-mode') => {
  const [darkModeState, setDarkModeState] = useLocalStorage('dark-mode-active', defaultValue);

  const prefersDarkMode = window.matchMedia
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : false;

  const darkModeActive = typeof darkModeState !== 'undefined' ? darkModeState : prefersDarkMode;

  useEffect(() => {
    const element = window.document.body;
    if (darkModeActive) {
      element.classList.add(darkModeClassName);
    } else {
      element.classList.remove(darkModeClassName);
    }
  }, [darkModeActive]);

  return [darkModeState, setDarkModeState];
};

export default useDarkMode;
