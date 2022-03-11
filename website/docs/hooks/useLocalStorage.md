---
sidebar_position: 5
---

# useLocalStorage

## Import

```jsx
import { useLocalStorage } from 'hooks-arsenal';
```

## Usage

```jsx
import React from 'react';
import { useLocalStorage } from 'hooks-arsenal';
import './styles.css';

export default function App() {
  const initialStringValue = 'stringValue';
  const initialJSONValue = { hello: 'world' };

  const [localStorageValue, setLocalStorageValue] = useLocalStorage(
    'local-storage-string-key',
    initialStringValue
  );

  const [localStorageJSONValue, setLocalStorageJSONValue] = useLocalStorage(
    'local-storage-json-key',
    initialJSONValue
  );

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setLocalStorageValue('anotherStringValue')} type="button">
        Update String
      </button>
      <button onClick={() => setLocalStorageJSONValue({ foo: 'bar' })} type="button">
        Update JSON
      </button>
    </div>
  );
}
```
