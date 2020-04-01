import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function SwitchButton({ value, checkedValue, onSwitch }) {
  const active = useMemo(() => {
    return value === checkedValue ? 'true' : 'false';
  }, [value, checkedValue]);

  return (
    <Container
      active={active}
      onClick={onSwitch}
      title="Selecione um tema"
      aria-describedby="Botão para alteração do tema de claro para escuro."
    >
      <span className="bright-line" />
      <span className="bright-line" />
      <span className="bright-line" />
      <span className="bright-line" />
      <span className="back-line" />
      <span className="circle" />
    </Container>
  );
}

SwitchButton.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.shape({}),
  ]).isRequired,
  checkedValue: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.shape({}),
  ]).isRequired,
  onSwitch: PropTypes.func.isRequired,
};
