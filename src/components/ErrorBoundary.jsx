import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends PureComponent {
  // eslint-disable-next-line unicorn/prevent-abbreviations
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    const { handleError } = this.props;
    return handleError(error, errorInfo);
  }

  render() {
    const { hasError, error } = this.state;
    const { render, children, renderErrorText } = this.props;

    // Prevent rendering of children that caused the error, render fallbacks instead
    if (hasError) {
      // Render either components from renderError() or nothing
      return renderErrorText ? renderErrorText({ ...this.props, error }) : null;
    }

    // Render either components from render() or children or null
    return render ? render(this.props) : children || null;
  }
}

ErrorBoundary.propTypes = {
  handleError: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  render: PropTypes.func,
  renderErrorText: PropTypes.func,
};

ErrorBoundary.defaultProps = {
  children: undefined,
  render: undefined,
  renderErrorText: undefined,
};

export default ErrorBoundary;
