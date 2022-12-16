import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ReactInputMask from 'react-input-mask';
import { theme } from '../utils/theme';
import { handleNumberInput } from './HandleNumberInputs';
import { Button } from './Buttons';
import { Link } from 'react-router-dom';
import { handleTextInput } from './HandlerTextInput';

const Forms = styled.form`
  width: auto;
  padding: 1rem;

  .inputMask {
    ${({ width }) => css`
      background-color: ${theme.colors.auxiliar};
      border: 0.5px solid;
      border-color: ${theme.colors.darkBlue};
      border-radius: 5px;
      width: ${width}%;
      padding: 0.2rem 0.2rem 0.2rem 0.5rem;
      outline: none;
    `}
  }
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

const Text = styled.p`
  ${({ size, color, align }) => css`
    color: ${color === 'title'
      ? theme.colors.lightBlue
      : theme.colors.darkBlue};
    font-size: ${size === 'title' ? theme.sizes.size2 : theme.sizes.size1};
    text-align: ${align === 'title' ? 'center' : 'left'};
  `}
`;

const Input = styled.input`
  ${({ width }) => css`
    background-color: ${theme.colors.auxiliar};
    border: 0.5px solid;
    border-color: ${theme.colors.darkBlue};
    border-radius: 5px;
    width: ${width}%;
    padding: 0.2rem 0.2rem 0.2rem 0.5rem;
    outline: none;
  `}
`;

const ButtonDiv = styled.div`
  display: block;
  margin: 0 auto;
  justify-content: space-around;
`;

export const ScheduleForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [remote, setRemote] = useState('');
  const [data, setData] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');

  const isDisabled = () => {
    if (
      name === '' ||
      email === '' ||
      remote === '' ||
      data.length < 8 ||
      time.length < 4 ||
      reason === '' ||
      cpf.length < 11 ||
      phone.length < 11
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <Forms>
        <Text>NOME COMPLETO *</Text>
        <Input
          type="text"
          placeholder="Nome"
          label="Nome"
          width="99"
          value={name}
          onChange={(e) => handleTextInput(setName, e)}
        />
        <Text>EMAIL *</Text>
        <Input
          type="text"
          placeholder="Email"
          label="email"
          width="99"
          value={email}
          onChange={(e) => handleTextInput(setEmail, e)}
        />
        <InsideRow>
          <Column>
            <Text>CPF *</Text>
            <ReactInputMask
              className="inputMask"
              type="text"
              mask="999.999.999-99"
              placeholder="CPF"
              label="CPF"
              width="98"
              value={cpf}
              onChange={(e) => handleNumberInput(setCpf, e)}
            />
          </Column>
          <Column>
            <Text>TELEFONE *</Text>
            <ReactInputMask
              className="inputMask"
              type="text"
              mask="(99)99999-9999"
              placeholder="Telefone"
              label="Telefone"
              width="98"
              value={phone}
              onChange={(e) => handleNumberInput(setPhone, e)}
            />
          </Column>
        </InsideRow>
        <Text>TIPO DE ATENDIMENTO *</Text>
        {['Remoto', 'Presencial'].map((e, index) => (
          <div key={index}>
            <InsideRow checkbox="checkbox">
              <Input
                type="checkbox"
                checked={remote === e ? true : false}
                onChange={() => (remote !== e ? setRemote(e) : setRemote(''))}
              />
              <Text>{e}</Text>
            </InsideRow>
          </div>
        ))}
        <InsideRow>
          <Column>
            <Text>DATA *</Text>
            <ReactInputMask
              className="inputMask"
              type="text"
              mask="99/99/9999"
              placeholder="Data"
              width="98"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </Column>
          <Column>
            <Text>HORÁRIO *</Text>
            <ReactInputMask
              className="inputMask"
              type="text"
              mask="99:99"
              placeholder="Horário"
              width="98"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </Column>
        </InsideRow>
        <Text>MOTIVO DO ATENDIMENTO *</Text>
        {['Declarações', 'VEM', 'Carteira de Estudante', 'SIEPE', 'Outros'].map(
          (e, index) => (
            <div key={index}>
              <InsideRow checkbox="checkbox">
                <Input
                  type="checkbox"
                  checked={reason === e ? true : false}
                  onChange={() => (reason !== e ? setReason(e) : setReason(''))}
                />
                <Text>{e}</Text>
              </InsideRow>
            </div>
          ),
        )}
        <ButtonDiv>
          <Button
            width="40"
            height="20"
            marginB="2rem"
            marginL="auto"
            marginR="auto"
            disabled={isDisabled()}
          >
            <Link
              to={isDisabled() ? '' : '/scheduleConfirmed'}
              className="linkDecoration"
            >
              <Text color={isDisabled() ? '' : 'title'} align="title">
                {isDisabled()
                  ? 'Preencha todos os campos'
                  : 'Confirmar agendamento'}
              </Text>
            </Link>
          </Button>
        </ButtonDiv>
      </Forms>
    </>
  );
};
