---
id: useWindowDimensions
title: useWindowDimensions
---

## Import

```jsx
import { useWindowDimensions } from 'hooks-arsenal';
```

## Usage

```jsx
import React from 'react';
import { useWindowDimensions } from 'hooks-arsenal';
import './styles.css';

export default function App() {
  const { width, height } = useWindowDimensions();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>{`Width: ${width}`}</p>
      <p>{`Height: ${height}`}</p>
    </div>
  );
}
```