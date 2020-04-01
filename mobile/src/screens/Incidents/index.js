import React, { useContext, useEffect, useState, useMemo } from 'react';
import { Image, View, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { useColorScheme } from 'react-native-appearance';

import api from '~/services/api';
import logoImg from '~/assets/logo.png';
import logoImgDark from '~/assets/logo-white.png';

import {
  Container,
  Header,
  HeaderText,
  HeaderTextBold,
  Title,
  Description,
  IncidentList,
  Incident,
  IncidentPropertie,
  IncidentValue,
  DetailButton,
  DetailButtonText,
  IncidentInfoContainer,
  InfoContainerRow,
} from './styles';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const { colors } = useContext(ThemeContext);

  const logo = useMemo(() => {
    return colorScheme === 'dark' ? logoImgDark : logoImg;
  }, [colorScheme]);

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident });
  }

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    try {
      const { data: response, headers } = await api.get('/incidents', {
        params: {
          page,
        },
      });

      const data = response.map((incident) => ({
        ...incident,
        formattedValue: Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(incident.value),
      }));

      setIncidents([...incidents, ...data]);
      setTotal(headers['x-total-count']);
      setLoading(false);
      setPage(page + 1);
    } catch (error) {
      Alert.alert(
        'Erro',
        'Não foi possível carregar os casos, tente novamente'
      );
    }
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <Container>
      <Header>
        <Image source={logo} />
        <HeaderText>
          Total de <HeaderTextBold>{total} casos</HeaderTextBold>.
        </HeaderText>
      </Header>
      <Title>Bem-vindo!</Title>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>

      <IncidentList
        data={incidents}
        keyExtractor={(incident) => String(incident.id)}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <Incident>
            <IncidentInfoContainer>
              <InfoContainerRow>
                <View>
                  <IncidentPropertie>CASO:</IncidentPropertie>
                  <IncidentValue>{incident.title}</IncidentValue>
                </View>

                <View>
                  <IncidentPropertie>ONG:</IncidentPropertie>
                  <IncidentValue>{incident.name}</IncidentValue>
                </View>
              </InfoContainerRow>
              <IncidentPropertie>Valor:</IncidentPropertie>
              <IncidentValue>{incident.formattedValue} reais</IncidentValue>
            </IncidentInfoContainer>

            <DetailButton onPress={() => navigateToDetail(incident)}>
              <DetailButtonText>Ver mais detalhes </DetailButtonText>
              <Feather name="arrow-right" size={16} color={colors.primary} />
            </DetailButton>
          </Incident>
        )}
      />
    </Container>
  );
}
