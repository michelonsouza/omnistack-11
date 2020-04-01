import React, { useContext, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { toast } from 'react-toastify';

import logoImg from '~/assets/logo.svg';
import logoImgDark from '~/assets/logo-dark.svg';
import history from '~/services/history';
import api from '~/services/api';
import { TextArea, TextInput, Button } from '~/components';

import { Container, Content, Section, ButtonGroup } from './styles';

export default function NewIncident() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const { colors, name: themeName } = useContext(ThemeContext);

  const ongId = localStorage.getItem('@bethehero:ongId');

  const logo = useMemo(() => {
    return themeName === 'light' ? logoImg : logoImgDark;
  }, [themeName]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: response } = await api.post(
        '/incidents',
        {
          title,
          description,
          value,
        },
        {
          headers: {
            Authorization: ongId,
          },
        }
      );

      toast.success(`Caso #${response.id} cadastrado com sucesso`);
      history.push('/profile');
    } catch (error) {
      toast.error('Erro ao cadastrar caso, tente novamente');
      setLoading(false);
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastro novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color={colors.primary} />
            Voltar para home
          </Link>
        </Section>
        <form onSubmit={handleSubmit}>
          <TextInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título do caso"
            required
          />
          <TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição"
            required
          />
          <TextInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="number"
            placeholder="Valor em reais"
            required
          />

          <ButtonGroup>
            <button
              className="cancel"
              type="button"
              onClick={() => history.push('/profile')}
            >
              Cancelar
            </button>
            <Button type="submit" loading={loading}>
              Cadastrar
            </Button>
          </ButtonGroup>
        </form>
      </Content>
    </Container>
  );
}
