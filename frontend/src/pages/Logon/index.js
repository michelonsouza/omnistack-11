import React, { useContext, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { toast } from 'react-toastify';

import herosImg from '~/assets/heroes.png';
import logoImg from '~/assets/logo.svg';
import api from '~/services/api';
import history from '~/services/history';
import logoImgDark from '~/assets/logo-dark.svg';

import { Button, TextInput } from '~/components';

import { Container, Content, LogonContainer } from './styles';

export default function Logon() {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState('');
  const { colors, name: themeName } = useContext(ThemeContext);

  const logo = useMemo(() => {
    return themeName === 'light' ? logoImg : logoImgDark;
  }, [themeName]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: response } = await api.post('/auth', { id });

      localStorage.setItem('@bethehero:ongId', id);
      localStorage.setItem('@bethehero:ongName', response.name);

      setLoading(false);
      history.push('/profile');
    } catch (error) {
      setLoading(false);
      toast.error('Falha no login, tente novamente');
    }
  }

  return (
    <Container>
      <Content>
        <LogonContainer>
          <img src={logo} alt="Be The Hero" />
          <form onSubmit={handleSubmit}>
            <h1>Faça seu Logon</h1>

            <TextInput
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Sua ID"
            />
            <Button loading={loading}>Entrar</Button>

            <Link className="back-link" to="/register">
              <FiLogIn size={16} color={colors.primary} />
              Não tenho cadastro
            </Link>
          </form>
        </LogonContainer>

        <img src={herosImg} alt="Heroes" />
      </Content>
    </Container>
  );
}
