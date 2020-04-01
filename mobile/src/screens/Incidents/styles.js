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
`;

export const HeaderText = styled.Text`
  font-size: 15px;
  color: ${(props) => props.theme.colors.textColor};
`;

export const HeaderTextBold = styled.Text`
  color: ${(props) => props.theme.colors.textColor};
  font-weight: bold;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.titleColor};
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 48px;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.textColor};
`;

export const IncidentList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 32px;
`;

export const Incident = styled.View`
  border-radius: 8px;
  background: ${(props) => props.theme.colors.inputBackground};
  margin-bottom: 16px;
`;

export const IncidentInfoContainer = styled.View`
  padding: 24px 24px 0;
`;

export const InfoContainerRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const IncidentPropertie = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.secondaryTitleColor};
  font-weight: bold;
`;

export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: ${(props) => props.theme.colors.textColor};
`;

export const DetailButton = styled.TouchableOpacity`
  border-top-color: ${(props) => props.theme.colors.background};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: 1px;
  border-style: solid;
  padding: 22px 24px;
`;

export const DetailButtonText = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: 15px;
  font-weight: bold;
`;
