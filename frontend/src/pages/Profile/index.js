import React, { useContext, useEffect, useMemo, memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { toast } from 'react-toastify';

import logoImg from '~/assets/logo.svg';
import logoImgDark from '~/assets/logo-dark.svg';
import api from '~/services/api';
import history from '~/services/history';
import { Button } from '~/components';

import { Container, Content, Header, List, ListItem, NoData } from './styles';

function Profile() {
  const [incidents, setIncidents] = useState([]);

  const { colors, name: themeName } = useContext(ThemeContext);
  const ongName = localStorage.getItem('@bethehero:ongName');
  const ongId = localStorage.getItem('@bethehero:ongId');

  const options = {
    headers: {
      Authorization: ongId,
    },
  };

  const logo = useMemo(() => {
    return themeName === 'light' ? logoImg : logoImgDark;
  }, [themeName]);

  const empty = useMemo(() => {
    return incidents.length === 0;
  }, [incidents.length]);

  function handleLogout() {
    localStorage.removeItem('@bethehero:ongId');
    localStorage.removeItem('@bethehero:ongName');

    history.push('/');
  }

  async function handleDelete(id) {
    try {
      await api.delete(`/incidents/${id}`, options);
      setIncidents(incidents.filter((i) => i.id !== id));
      toast.success(`Caso ${id} deletado com sucesso`);
    } catch (error) {
      toast.error('Erro ao deletar incidente, por favor tente mais tarde');
    }
  }

  useEffect(() => {
    async function loadCases() {
      try {
        const { data: response } = await api.get('/profile', options);

        const data = response.map((c) => ({
          ...c,
          formattedValue: Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(c.value),
        }));

        setIncidents(data);
      } catch (error) {
        toast.error('Erro no servidor, tente mais tarde');
      }
    }

    loadCases();
  }, []);

  return (
    <Container>
      <Content>
        <Header>
          <img src={logo} alt="Be The Hero" />
          <span>Bem vindo(a), {ongName}</span>

          <Button className="new-case">
            <Link to="/incidents/new">Cadastrar novo caso</Link>
          </Button>
          <button className="logout" type="button" onClick={handleLogout}>
            <FiPower size={22} color={colors.primary} />
          </button>
        </Header>

        <h1>Casos cadastrados</h1>

        <List>
          {incidents.map((incident) => (
            <ListItem key={String(incident.id)}>
              <strong>CASO:</strong>
              <p>{incident.title}</p>

              <strong>DESCRIÇÃO:</strong>
              <p>{incident.description}</p>

              <strong>VALOR:</strong>
              <p>{incident.formattedValue}</p>

              <button
                className="delete-case"
                type="button"
                onClick={() => handleDelete(incident.id)}
              >
                <FiTrash2 size={20} color={colors.secondaryTextColor} />
              </button>
            </ListItem>
          ))}
        </List>
        {empty && (
          <NoData>
            <h1>Sem casos no momento</h1>
          </NoData>
        )}
      </Content>
    </Container>
  );
}

export default memo(Profile);
