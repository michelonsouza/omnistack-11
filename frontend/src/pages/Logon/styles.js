import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.background};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1120px;

  > img {
    ${(props) =>
      props.theme.name === 'dark' &&
      css`
        filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.8));
      `}
  }
`;

export const LogonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  margin-right: 30px;

  form {
    margin-top: 100px;

    h1 {
      color: ${(props) => props.theme.colors.titleColor};
      font-size: 32px;
      margin-bottom: 32px;
    }
  }
`;
