import { useEffect } from 'react';

import useLocalStorage from './useLocalStorage';

const useDarkMode = (defaultValue = undefined, darkModeClassName = 'dark-mode') => {
  const [darkModeState, setDarkModeState] = useLocalStorage('dark-mode-active', defaultValue);
  const prefersDarkMode = window.matchMedia
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : false;
  const darkModeActive = typeof darkModeState !== 'undefined' ? darkModeState : prefersDarkMode;

  useEffect(() => {
    const element = window.document.body;
    if (darkModeActive) {
      element.classList.add(darkModeClassName);
    } else {
      element.classList.remove(darkModeClassName);
    }
  }, [darkModeActive, darkModeClassName]);

  return [darkModeState, setDarkModeState];
};

export default useDarkMode;
