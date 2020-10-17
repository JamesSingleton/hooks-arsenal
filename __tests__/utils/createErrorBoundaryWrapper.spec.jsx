import React from 'react';
import { create } from 'react-test-renderer';
import createErrorBoundaryWrapper from '../../src/utils/createErrorBoundaryWrapper';

describe('createErrorBoundaryWrapper', () => {
  const handleError = jest.fn();
  it('returns a function', () => {
    const ErrorBoundaryInstance = createErrorBoundaryWrapper({ handleError });
    expect(typeof ErrorBoundaryInstance).toEqual('function');
  });

  it('is given the errorHandler as a prop', () => {
    const ErrorBoundaryInstance = createErrorBoundaryWrapper({ handleError });
    const testRender = create(<ErrorBoundaryInstance />);
    const { rendered: { props: { handleError: handleErrorFromProps } } } = testRender.toTree();
    expect(handleErrorFromProps).toEqual(handleError);
  });
});
