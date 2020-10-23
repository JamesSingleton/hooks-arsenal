---
id: useErrorBoundary
title: useErrorBoundary
---

## Import

```jsx
import { useErrorBoundary } from "hooks-arsenal";
```

## Usage

```jsx
import React from "react";
import { useErrorBoundary } from "hooks-arsenal";
import "./styles.css";

function BaseBoundary() {
  const { ErrorBoundary } = useErrorBoundary();

  const handleError = (error, errorInfo) => {
    // display/hide components or content
    // based on error and error info here
  }

  return (
    <ErrorBoundary handleError={handleError}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>

        <p>Listening for errors</p>
      </div>
    <ErrorBoundary>
}

function RenderErrorTextBoundary() {
  const { ErrorBoundary } = useErrorBoundary();

  const handleError = (error, errorInfo) => {
    // display/hide components or content
    // based on error and error info here
  }

  const renderErrorText = ({ error }) => {
    return () => (<p>Error Fallback Text Here</p>)
  }

  return (
    <ErrorBoundary handleError={handleError} renderErrorText={renderErrorText}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>

        <p>Listening for errors</p>
      </div>
    <ErrorBoundary>
}

function CustomRenderBoundary() {
  const { ErrorBoundary } = useErrorBoundary();

  const handleError = (error, errorInfo) => {
    // display/hide components or content
    // based on error and error info here
  }

  const customRender = ({ error }) => {
    return () => (<p>I will render instead of the children prop</p>)
  }

  return (
    <ErrorBoundary handleError={handleError} render={customRender}>
      <div className="App">
        <h1>I will not render</h1>
      </div>
    <ErrorBoundary>
}

export default function App() {
  return (
    <>
      <BaseBoundary />
      <RenderErrorTextBoundary />
      <CustomRenderBoundary />
    </>
  );
}
```
