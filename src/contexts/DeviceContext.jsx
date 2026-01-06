import React, { createContext, useState, useEffect, useContext } from 'react';
import { isMobile as isMobileDevice } from 'react-device-detect';

const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      if (typeof window !== 'undefined') {
        // Primary detection: touch capabilities
        const hasTouch = window.matchMedia('(pointer: coarse)').matches;

        // Secondary detection: react-device-detect
        setIsMobile(hasTouch || isMobileDevice);
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <DeviceContext.Provider value={{ isMobile }}>
      {children}
    </DeviceContext.Provider>
  );
};

export const useDevice = () => {
  return useContext(DeviceContext);
};
