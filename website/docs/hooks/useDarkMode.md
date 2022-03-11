---
sidebar_position: 1
---

# useDarkMode

## Import

```jsx
import { useDarkMode } from 'hooks-arsenal';
```

## Usage

```jsx
import React from 'react';
import { useDarkMode } from 'hooks-arsenal';
import './styles.css';

export default function App() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setDarkMode(true)} type="button">
        Activate Dark Mode
      </button>
      <button onClick={() => setDarkMode(false)} type="button">
        Deactivate Dark Mode
      </button>
    </div>
  );
}
```
