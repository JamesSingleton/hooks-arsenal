import { useState, useEffect } from 'react';

export const getWindowDimenison = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimenison());

  useEffect(() => {
    const handleWindowResize = () => setWindowDimensions(getWindowDimenison());
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return windowDimensions;
};

export default useWindowDimensions;
