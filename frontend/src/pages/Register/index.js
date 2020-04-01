import React, { useContext, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { toast } from 'react-toastify';

import logoImg from '~/assets/logo.svg';
import logoImgDark from '~/assets/logo-dark.svg';
import api from '~/services/api';
import history from '~/services/history';
import { TextInput, Button } from '~/components';

import { Container, Content, Section, InputGroup } from './styles';

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const { colors, name: themeName } = useContext(ThemeContext);

  const logo = useMemo(() => {
    return themeName === 'light' ? logoImg : logoImgDark;
  }, [themeName]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: response } = await api.post('/ongs', {
        name,
        email,
        whatsapp,
        city,
        uf,
      });

      alert(`Seu ID de acesso: ${response.id}`);
      history.push('/');
    } catch (error) {
      toast.error(`Erro ao cadastrar ONG: ${name}\n ERROR: ${error.message}`);
    }

    setLoading(false);
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color={colors.primary} />
            Voltar para o logon
          </Link>
        </Section>
        <form onSubmit={handleSubmit}>
          <TextInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome da ONG"
            required
          />
          <TextInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
            required
          />
          <TextInput
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            type="tel"
            placeholder="Whatsapp"
            required
          />

          <InputGroup>
            <TextInput
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Cidade"
              required
            />
            <TextInput
              value={uf}
              onChange={(e) => setUf(e.target.value)}
              type="text"
              placeholder="UF"
              required
              minLength="2"
              maxLength="2"
            />
          </InputGroup>
          <Button loading={loading} type="submit">
            Cadastrar
          </Button>
        </form>
      </Content>
    </Container>
  );
}
