import { useState, useEffect } from 'react';

export const getWindowDimension = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimension());

  useEffect(() => {
    const handleWindowResize = () => setWindowDimensions(getWindowDimension());
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return windowDimensions;
};

export default useWindowDimensions;
