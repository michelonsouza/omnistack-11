import styled from 'styled-components';

import metrics from '~/styles/metrics';

export const Container = styled.input`
  border-radius: ${metrics.borderRadius}px;
  height: ${metrics.baseHeight}px;
  padding: 0 ${metrics.basePadding}px;
  background: ${(props) => props.theme.colors.inputBackground};
  border: 2px solid ${(props) => props.theme.colors.borderColor};
  color: ${(props) => props.theme.colors.titleColor};
  width: 100%;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.secondaryTextColor};
  }
`;
