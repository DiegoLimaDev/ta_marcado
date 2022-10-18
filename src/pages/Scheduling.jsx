import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../utils/theme';

import diary from '../assets/images/diary.svg';
import { useState } from 'react';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import { Button } from '../components/Buttons';

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
  padding: 2rem;
`;

const InsideRow = styled.div`
  ${({ checkbox }) => css`
    direction: ltr;
    display: flex;
    width: 100%;
    justify-content: ${checkbox === 'checkbox' ? 'left' : 'space-between'};
  `}
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
  box-shadow: 4px 4px 4px 0 #000000;
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

const ButtonDiv = styled.div`
  display: block;
  margin: 0 auto;
  justify-content: space-around;
`;

const SchedulingPage = () => {
  const [remote, setRemote] = useState('');
  const [reason, setReason] = useState('');
  const [value, setValue] = useState('');

  const handlechange = (e) => {
    const result = e.target.value.replace(/\D/g, '');
    setValue(result);
  };

  return (
    <>
      <Topbar />
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
              <Input
                type="text"
                placeholder="Email"
                label="email"
                width="100"
              />
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
              <Text>TIPO DE ATENDIMENTO *</Text>
              <InsideRow checkbox="checkbox">
                <Input
                  type="checkbox"
                  checked={remote === 'remote' ? true : false}
                  onClick={() =>
                    remote !== 'remote' ? setRemote('remote') : setRemote('')
                  }
                />
                <Text>Remoto</Text>
              </InsideRow>
              <InsideRow checkbox="checkbox">
                <Input
                  type="checkbox"
                  checked={remote === 'presential' ? true : false}
                  onClick={() =>
                    remote !== 'presential'
                      ? setRemote('presential')
                      : setRemote('')
                  }
                />
                <Text>Presencial</Text>
              </InsideRow>
              <InsideRow>
                <Column>
                  <Text>DATA *</Text>
                  <Input placeholder="Data" />
                </Column>
                <Column>
                  <Text>HORÁRIO *</Text>
                  <Input placeholder="Horário" />
                </Column>
              </InsideRow>
              <Text>MOTIVO DO ATENDIMENTO *</Text>
              <InsideRow checkbox="checkbox">
                <Input
                  type="checkbox"
                  checked={reason === 'declarations' ? true : false}
                  onClick={() =>
                    reason !== 'declarations'
                      ? setReason('declarations')
                      : setReason('')
                  }
                />
                <Text>Declarações</Text>
              </InsideRow>
              <InsideRow checkbox="checkbox">
                <Input
                  type="checkbox"
                  checked={reason === 'vem' ? true : false}
                  onClick={() =>
                    reason !== 'vem' ? setReason('vem') : setReason('')
                  }
                />
                <Text>VEM</Text>
              </InsideRow>
              <InsideRow checkbox="checkbox">
                <Input
                  type="checkbox"
                  checked={reason === 'studentID' ? true : false}
                  onClick={() =>
                    reason !== 'studentID'
                      ? setReason('studentID')
                      : setReason('')
                  }
                />
                <Text>Carteria de Estudante</Text>
              </InsideRow>
              <InsideRow checkbox="checkbox">
                <Input
                  type="checkbox"
                  checked={reason === 'siepe' ? true : false}
                  onClick={() =>
                    reason !== 'siepe' ? setReason('siepe') : setReason('')
                  }
                />
                <Text>SIEPE</Text>
              </InsideRow>
              <InsideRow checkbox="checkbox">
                <Input
                  type="checkbox"
                  checked={reason === 'others' ? true : false}
                  onClick={() =>
                    reason !== 'others' ? setReason('others') : setReason('')
                  }
                />
                <Text>Outros</Text>
              </InsideRow>
            </Forms>
            <ButtonDiv>
              <Button
                width="40"
                height="20"
                marginB="2rem"
                marginL="auto"
                marginR="auto"
              >
                <Text color="title" align="title">
                  Confirmar agendamento
                </Text>
              </Button>
            </ButtonDiv>
            <Text align="title">
              CAMPOS COM A SINALIZAÇÃO * SÃO DE PREENCHIMENTO OBRIGATÓRIO
            </Text>
          </Box>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default SchedulingPage;
