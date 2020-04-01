import styled from 'styled-components';

import metrics from '~/styles/metrics';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.background};
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 32px 0;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;

  h1 {
    color: ${(props) => props.theme.colors.titleColor};
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    color: ${(props) => props.theme.colors.titleColor};
    font-size: 20px;
    margin-left: 24px;
  }

  img {
    height: 64px;
  }

  button.new-case {
    width: 260px;
    margin-left: auto;
    margin-top: 0;
  }

  button.logout {
    height: ${metrics.baseHeight}px;
    width: ${metrics.baseHeight}px;
    border-radius: ${metrics.borderRadius}px;
    border: 2px solid ${(props) => props.theme.colors.borderColor};
    background: ${(props) => props.theme.colors.inputBackground};
    margin-left: 16px;

    &:hover {
      border-color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
`;

export const ListItem = styled.li`
  background: ${(props) => props.theme.colors.inputBackground};
  border-radius: ${metrics.borderRadius}px;
  position: relative;
  padding: 24px;

  button.delete-case {
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
    background: transparent;

    &:hover {
      opacity: 0.8;
    }
  }

  strong {
    display: block;
    margin-bottom: 16px;
    color: ${(props) => props.theme.colors.secondaryTitleColor};
  }

  p + strong {
    margin-top: 32px;
  }

  p {
    color: ${(props) => props.theme.colors.describeTextColor};
    line-height: 21px;
    font-size: 16px;
  }
`;

export const NoData = styled.div`
  border-radius: ${metrics.borderRadius}px;
  border: 2px solid ${(props) => props.theme.colors.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;

  h1 {
    color: ${(props) => props.theme.colors.describeTextColor};
    margin: 0;
    font-size: 32px;
  }
`;
