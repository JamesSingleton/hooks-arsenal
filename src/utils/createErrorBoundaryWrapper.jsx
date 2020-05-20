import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

// eslint-disable-next-line arrow-body-style
const createErrorBoundaryWrapper = ({ handleError }) => {
  // eslint-disable-next-line unicorn/prevent-abbreviations
  return function UseErrorBoundaryWrapper(props) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <ErrorBoundary handleError={handleError} {...props} />;
  };
};

export default createErrorBoundaryWrapper;
