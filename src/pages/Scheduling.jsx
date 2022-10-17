import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../utils/theme';

import diary from '../assets/images/diary.svg';
import { useState } from 'react';

const Container = styled.div`
  background-color: ${theme.colors.secondaryBlue};
  margin: 0 -0.5rem -0.5rem -0.5rem;
  padding: 2rem 2rem -1rem 2rem;
  min-height: 87vh;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const InsideRow = styled.div`
  direction: ltr;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

const Image = styled.img`
  width: auto;
  height: auto;
`;

const Box = styled.div`
  background-color: ${theme.colors.lightBlue};
  width: 50%;
`;

const GradientBox = styled.div`
  background: linear-gradient(
    to right,
    ${theme.colors.darkBlue} 60%,
    rgb(35, 74, 107, 0.7)
  );
  padding: 0.1rem;
`;

const Text = styled.p`
  ${({ size, color, align }) => css`
    color: ${color === 'title'
      ? theme.colors.lightBlue
      : theme.colors.darkBlue};
    font-size: ${size === 'title' ? theme.sizes.size2 : theme.sizes.size1};
    text-align: ${align === 'title' ? 'center' : 'left'};
  `}
`;

const Forms = styled.form`
  width: auto;
  padding: 1rem;
`;

const Input = styled.input`
  ${({ width }) => css`
    background-color: ${theme.colors.auxiliar};
    border: 0.5px solid;
    border-color: ${theme.colors.darkBlue};
    border-radius: 20px;
    width: ${width}%;
    padding: 0.2rem;
  `}
`;

const SchedulingPage = () => {
  const [value, setValue] = useState('');

  const handlechange = (e) => {
    const result = e.target.value.replace(/\D/g, '');
    setValue(result);
  };

  return (
    <Container>
      <Row>
        <Image src={diary} />
        <Box>
          <GradientBox>
            <Text color="title" size="title" align="title">
              FORMULÁRIO DE AGENDAMENTO
            </Text>
          </GradientBox>
          <Forms>
            <Text>NOME COMPLETO *</Text>
            <Input type="text" placeholder="Nome" label="Nome" width="100" />
            <Text>EMAIL *</Text>
            <Input type="text" placeholder="Email" label="email" width="100" />
            <InsideRow>
              <Column>
                <Text>CPF *</Text>
                <Input
                  type="text"
                  placeholder="CPF"
                  label="CPF"
                  width="100"
                  value={value}
                  onChange={handlechange}
                />
              </Column>
              <Column>
                <Text>TELEFONE *</Text>
                <Input
                  type="text"
                  placeholder="Telefone"
                  label="Telefone"
                  width="100"
                  value={value}
                  onChange={handlechange}
                />
              </Column>
            </InsideRow>
          </Forms>
        </Box>
      </Row>
    </Container>
  );
};

export default SchedulingPage;
