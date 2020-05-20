import { useRef, useReducer } from 'react';
import createErrorBoundaryWrapper from '../utils/createErrorBoundaryWrapper';

const useErrorBoundary = () => {
  const [{ didCatch, error, errorInfo }, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'catch':
          return {
            ...state,
            didCatch: true,
            error: action.error,
            errorInfo: action.errorInfo,
          };
        default:
          return state;
      }
    },
    {
      didCatch: false,
      error: null,
      errorInfo: null,
    }
  );

  // eslint-disable-next-line unicorn/prevent-abbreviations
  const refForErrorBoundaryWrapper = useRef(null);

  const getWrappedErrorBoundary = () => {
    let errorBoundaryWrapper = refForErrorBoundaryWrapper.current;

    if (errorBoundaryWrapper !== null) {
      return errorBoundaryWrapper;
    }

    errorBoundaryWrapper = createErrorBoundaryWrapper({
      // eslint-disable-next-line unicorn/prevent-abbreviations
      handleError(err, errInfo) {
        dispatch({
          type: 'catch',
          error: err,
          errorInfo: errInfo,
        });
      },
    });

    refForErrorBoundaryWrapper.current = errorBoundaryWrapper;

    return errorBoundaryWrapper;
  };
  return {
    ErrorBoundary: getWrappedErrorBoundary(),
    didCatch,
    error,
    errorInfo,
  };
};

export default useErrorBoundary;
