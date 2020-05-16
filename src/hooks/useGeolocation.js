import React, { useEffect } from 'react';

const defaultPositionOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export default function useGeolocation(initialPosition = null) {
  const [_position, setPosition] = React.useState(initialPosition);
  const [_watchID, setWatchID] = React.useState(null);

  function clearWatch() {
    if (_watchID) {
      navigator.geolocation.clearWatch(_watchID);
      setWatchID(null);
    }
  }
  useEffect(() => () => clearWatch(), []);

  return {
    clearWatch,
    get position() {
      return _position;
    },
    get watching() {
      return _watchID !== null;
    },
    get watchId() {
      return _watchID;
    },
    getCurrentPosition(options = defaultPositionOptions) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setPosition(position);

            resolve(position);
          },
          reject,
          options
        );
      });
    },
    watchPosition(options = defaultPositionOptions) {
      if (_watchID) {
        return Promise.resolve(_position);
      }

      return new Promise((resolve, reject) => {
        const id = navigator.geolocation.watchPosition(
          (position) => {
            setPosition(position);

            if (_watchID === null) {
              setWatchID(id);
              resolve(position);
            }
          },
          reject,
          options
        );
      });
    },
  };
}

useGeolocation.defaults = {};
