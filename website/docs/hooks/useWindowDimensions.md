---
sidebar_position: 7
---

# useWindowDimensions

A hook to read the current height and width of the browser window.

## Import

```jsx
import { useWindowDimensions } from 'hooks-arsenal';
```

## Usage

```jsx
import { useWindowDimensions } from 'hooks-arsenal';

function App() {
  const { width, height } = useWindowDimensions();

  return (
    <div>
      <h2>Window Dimensions:</h2>
      <p>{`Width: ${width}`}</p>
      <p>{`Height: ${height}`}</p>
    </div>
  );
}
```
