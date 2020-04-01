import React, { useContext, useMemo } from 'react';
import { Image, View, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useColorScheme } from 'react-native-appearance';

import * as MailComposer from 'expo-mail-composer';

import logoImg from '~/assets/logo.png';
import logoImgDark from '~/assets/logo-white.png';

import {
  Incident,
  IncidentInfoContainer,
  IncidentPropertie,
  IncidentValue,
  InfoContainerRow,
} from '../Incidents/styles';
import {
  Container,
  Header,
  ContactBox,
  HeroTitle,
  HeroDescription,
  Actions,
  Action,
  ActionText,
} from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();
  const colorScheme = useColorScheme();
  const { colors } = useContext(ThemeContext);

  const logo = useMemo(() => {
    return colorScheme === 'dark' ? logoImgDark : logoImg;
  }, [colorScheme]);

  const { incident } = route.params;
  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${incident.formattedValue}`;

  async function sendMail() {
    await MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=+55${incident.whatsapp}&text=${message}`
    );
  }

  return (
    <Container>
      <Header>
        <Image source={logo} />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={28} color={colors.primary} />
        </TouchableOpacity>
      </Header>
      <Incident>
        <IncidentInfoContainer>
          <InfoContainerRow>
            <View>
              <IncidentPropertie>CASO:</IncidentPropertie>
              <IncidentValue>{incident.title}</IncidentValue>
            </View>
            <View>
              <IncidentPropertie>ONG:</IncidentPropertie>
              <IncidentValue>
                {incident.name} de: {incident.city} - {incident.uf}
              </IncidentValue>
            </View>
          </InfoContainerRow>

          <IncidentPropertie>DESCRIÇÃO:</IncidentPropertie>
          <IncidentValue>{incident.description}</IncidentValue>

          <IncidentPropertie>VALOR:</IncidentPropertie>
          <IncidentValue>{incident.formattedValue} reais</IncidentValue>
        </IncidentInfoContainer>
      </Incident>
      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>
        <HeroDescription>Entre em contato</HeroDescription>

        <Actions>
          <Action onPress={sendWhatsapp}>
            <ActionText>Whatsapp</ActionText>
          </Action>
          <Action onPress={sendMail}>
            <ActionText>E-mail</ActionText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}
