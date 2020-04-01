import styled, { css } from 'styled-components';

export const Container = styled.button`
  position: absolute;
  top: 40px;
  right: 20px;
  z-index: 100;
  background: transparent;
  border: 0;
  width: 50px;
  transform: rotate(90deg);

  .bright-line {
    background: ${(props) => props.theme.colors.primary};
    position: absolute;
    display: block;
    height: 3px;
    width: 16px;
    border-radius: 1.5px;
    left: -18px;
    transition: opacity 300ms ease;

    opacity: ${(props) => (props.active === 'true' ? 0 : 1)};

    &:first-child {
      bottom: -10px;
      left: -12px;
      transform: rotate(-35deg);
    }

    &:nth-child(2) {
      bottom: 5px;
      left: -22px;
      transform: rotate(-15deg);
    }

    &:nth-child(3) {
      top: 5px;
      left: -22px;
      transform: rotate(15deg);
    }

    &:nth-child(4) {
      top: -10px;
      left: -12px;
      transform: rotate(35deg);
    }
  }

  span.back-line {
    background: ${(props) =>
      props.theme.colors[props.active === 'true' ? 'primary' : 'secondary']};
    display: block;
    width: 92%;
    max-width: 100%;
    height: 12px;
    top: 9px;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    margin-left: 4%;
  }

  span.circle {
    background: ${(props) => props.theme.colors.inputBackground};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.borderColor};
    display: block;
    height: 30px;
    width: 30px;
    border-radius: 15px;
    z-index: 102;
    position: relative;
    transition: margin 300ms ease !important;

    ${(props) =>
      props.active === 'true' &&
      css`
        margin-left: calc(100% - 30px);
      `}
  }
`;
