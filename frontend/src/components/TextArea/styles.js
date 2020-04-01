import styled from 'styled-components';

import metrics from '~/styles/metrics';

export const Container = styled.textarea`
  border-radius: ${metrics.borderRadius}px;
  padding: 19px ${metrics.basePadding}px 0;
  background: ${(props) => props.theme.colors.inputBackground};
  border: 2px solid ${(props) => props.theme.colors.borderColor};
  color: ${(props) => props.theme.colors.titleColor};
  min-height: 140px;
  line-height: 24px;
  resize: none;
  width: 100%;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.secondaryTextColor};
  }
`;
