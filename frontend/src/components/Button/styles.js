import styled from 'styled-components';

import metrics from '~/styles/metrics';

export const Container = styled.button`
  border-radius: ${metrics.borderRadius}px;
  height: ${metrics.baseHeight}px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: 18px;
  line-height: 60px;
  text-align: center;
  font-weight: bold;
  border: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${metrics.baseMargin - 4}px;

  &:hover {
    filter: brightness(90%);
  }

  > * {
    color: ${(props) => props.theme.colors.white};
    width: 100%;
    height: 100%;
    text-align: center;
  }
`;
