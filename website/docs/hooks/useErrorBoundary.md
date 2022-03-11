---
sidebar_position: 2
---

# useErrorBoundary

## Import

```jsx
import { useErrorBoundary } from 'hooks-arsenal';
```

## Usage

### Base Boundary

```jsx
import React from 'react';
import { useErrorBoundary } from 'hooks-arsenal';

const BaseBoundary = () => {
  const { ErrorBoundary } = useErrorBoundary();

  const handleError = (error, errorInfo) => {
    // handle your error here
  };

  return (
    <ErrorBoundary handleError={handleError}>
      <div>
        <h1>Hello World</h1>
      </div>
    </ErrorBoundary>
  );
};
```

### Render Error Text Boundary

```jsx
import React from 'react';
import { useErrorBoundary } from 'hooks-arsenal';

const RenderErrorTextBoundary = () => {
  const { ErrorBoundary } = useErrorBoundary();

  const handleError = (error, errorInfo) => {
    // display/hide components or content
    // based on error and error info here
  };

  const renderErrorText = ({ error }) => {
    // eslint-disable-next-line react/display-name
    return () => <p>Error Fallback Text Here</p>;
  };
  return (
    <ErrorBoundary handleError={handleError} renderErrorText={renderErrorText}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>

        <p>Listening for errors</p>
      </div>
    </ErrorBoundary>
  );
};
```

### Custom Render Boundary

```jsx
import React from 'react';
import { useErrorBoundary } from 'hooks-arsenal';

const CustomRenderBoundary = () => {
  const { ErrorBoundary } = useErrorBoundary();

  const handleError = (error, errorInfo) => {
    // display/hide components or content
    // based on error and error info here
  };

  const customRender = ({ error }) => {
    // eslint-disable-next-line react/display-name
    return () => <p>I will render instead of the children prop</p>;
  };

  return (
    <ErrorBoundary handleError={handleError} render={customRender}>
      <div className="App">
        <h1>I will not render</h1>
      </div>
    </ErrorBoundary>
  );
};
```
