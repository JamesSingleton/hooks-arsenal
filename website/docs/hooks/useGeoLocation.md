---
sidebar_position: 2
---

# useGeoLocation

## Getting Current Position

To get the current coordinates of a user, you can use `getCurrentPosition`.
Whenever any request to access a users position with `getCurrentPosition`,
the browser will prompt the user with a request for permission.

```jsx
import React from 'react';
import { useGeolocation } from 'hooks-arsenal';

export default function Geolocate({ initialPosition }) {
  const { position, getCurrentPosition } = useGeolocation(initialPosition);

  return position ? (
    <p>{JSON.stringify(position)}</p>
  ) : (
    <button type="button" onClick={() => getCurrentPosition()}>
      get my location
    </button>
  );
}
```

## Watch Position

`watchPosition` will continue to monitor any change of the users location.
Like `getCurrentPosition`, the browser will prompt the user with a request
for permission when using `watchPosition`.

```jsx
import React from 'react';
import { useGeolocation } from 'hooks-arsenal';

export default function Geolocate({ initialPosition }) {
  const { watching, watchPosition, clearWatch } = useGeolocation(initialPosition);

  return (
    <button type="button" onClick={() => (watching ? clearWatch() : watchPosition())}>
      {watching ? 'stop watching' : 'watch my location'}
    </button>
  );
}
```
