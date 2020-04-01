import styled from 'styled-components';

import metrics from '~/styles/metrics';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.background};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  border-radius: ${metrics.borderRadius}px;
  background: ${(props) => props.theme.colors.background};
  padding: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1120px;
  box-shadow: 0 0 100px
    rgba(
      ${(props) =>
        props.theme.name === 'light' ? '0, 0, 0' : '255, 255, 255'},
      0.1
    );

  form {
    width: 100%;
    max-width: 450px;

    input,
    textarea {
      margin-top: 8px;
    }

    textarea + input {
      margin-top: 4px;
    }
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;

  h1 {
    margin: 64px 0 32px;
    color: ${(props) => props.theme.colors.titleColor};
    font-size: 32px;
  }

  p {
    font-size: 18px;
    color: ${(props) => props.theme.colors.describeTextColor};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;

  button.cancel {
    height: ${metrics.baseHeight}px;
    border-radius: ${metrics.borderRadius}px;
    color: ${(props) => props.theme.colors.secondaryTitleColor};
    background: ${(props) => props.theme.colors.inputBackground};
    border: 2px solid ${(props) => props.theme.colors.borderColor};
    margin-top: 16px;
    margin-right: 16px;
    width: 168px;

    &:hover {
      opacity: 0.8;
    }
  }
`;
