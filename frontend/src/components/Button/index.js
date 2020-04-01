import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinner-material';

import { Container } from './styles';

export default function Button({ loading, children, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? <Spinner color="#fff" radius={40} stroke={4} /> : children}
    </Container>
  );
}

Button.defaultProps = {
  loading: false,
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  loading: PropTypes.bool,
};
