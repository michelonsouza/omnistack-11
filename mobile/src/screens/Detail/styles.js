import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
  padding: ${Constants.statusBarHeight + 20}px 24px 0;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
`;

export const ContactBox = styled.View`
  background: ${(props) => props.theme.colors.inputBackground};
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 24px;
`;

export const HeroTitle = styled.Text`
  color: ${(props) => props.theme.colors.titleColor};
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
`;

export const HeroDescription = styled.Text`
  color: ${(props) => props.theme.colors.textColor};
  font-size: 15px;
  margin-top: 16px;
`;

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Action = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const ActionText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
