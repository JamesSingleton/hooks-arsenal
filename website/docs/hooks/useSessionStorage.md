---
sidebar_position: 6
---

# useSessionStorage

## Import

```jsx
import { useSessionStorage } from 'hooks-arsenal';
```

## Usage

```jsx
import React from 'react';
import { useSessionStorage } from 'hooks-arsenal';
import './styles.css';

export default function App() {
  const initialStringValue = 'stringValue';
  const initialJSONValue = { hello: 'world' };

  const [sessionStorageValue, setSessionStorageValue] = useSessionStorage(
    'session-storage-string-key',
    initialStringValue
  );

  const [sessionStorageJSONValue, setSessionStorageJSONValue] = useSessionStorage(
    'session-storage-json-key',
    initialJSONValue
  );

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setSessionStorageValue('anotherStringValue')} type="button">
        Update String
      </button>
      <button onClick={() => setSessionStorageJSONValue({ foo: 'bar' })} type="button">
        Update JSON
      </button>
    </div>
  );
}
```
