import React from 'react';
import { create } from 'react-test-renderer';
import ErrorBoundary from '../../src/components/ErrorBoundary';

describe('ErrorBoundary', () => {
  const handleError = jest.fn();
  const ErrorThrower = ({ errrorMessage = 'uh oh' }) => {
    throw new Error(errrorMessage);
  };

  beforeEach(() => {
    handleError.mockReset();
  });

  it('renders its children', () => {
    const render = create(
      <ErrorBoundary handleError={handleError}>
        <div>I am a child that should render.</div>
      </ErrorBoundary>
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render null if an error occurs and no fallback render is provided', () => {
    const render = create(
      <ErrorBoundary handleError={handleError}>
        <ErrorThrower />
      </ErrorBoundary>
    );
    expect(render.toJSON()).toEqual(null);
  });

  it('should render the fallback render if provided and an error occurs', () => {
    const FallbackRender = () => <div>I am a fallback render</div>;
    const render = create(
      <ErrorBoundary handleError={handleError} renderErrorText={FallbackRender}>
        <ErrorThrower />
      </ErrorBoundary>
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('calls the provided error handler should an error occur', () => {
    create(
      <ErrorBoundary handleError={handleError}>
        <ErrorThrower />
      </ErrorBoundary>
    );
    expect(handleError).toHaveBeenCalledTimes(1);
  });

  it('calls the render function if provided', () => {
    const ProvidedRender = () => <div>I will render instead of the children</div>;
    const render = create(
      <ErrorBoundary handleError={handleError} render={ProvidedRender}>
        <div>I will not render because a render function was provided</div>
      </ErrorBoundary>
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
