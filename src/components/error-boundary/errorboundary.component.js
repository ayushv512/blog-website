import * as React from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundaryComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch () {
    // Update state so the next render will show the fallback UI.
    this.setState({ hasError: true });
  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

ErrorBoundaryComponent.propTypes = {
  children: PropTypes.any.isRequired
};
