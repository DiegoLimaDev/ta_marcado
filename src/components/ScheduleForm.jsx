import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ReactInputMask from 'react-input-mask';
import { theme } from '../utils/theme';
import { handleNumberInput } from './HandleNumberInputs';

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

export const ScheduleForm = () => {
  const [remote, setRemote] = useState('');
  const [reason, setReason] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <>
      <Forms>
        <Text>NOME COMPLETO *</Text>
        <Input type="text" placeholder="Nome" label="Nome" width="99" />
        <Text>EMAIL *</Text>
        <Input type="text" placeholder="Email" label="email" width="99" />
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
              remote !== 'presential' ? setRemote('presential') : setRemote('')
            }
          />
          <Text>Presencial</Text>
        </InsideRow>
        <InsideRow>
          <Column>
            <Text>DATA *</Text>
            <ReactInputMask
              className="inputMask"
              type="text"
              mask="99/99/9999"
              placeholder="Data"
              width="98"
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
            />
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
              reason !== 'studentID' ? setReason('studentID') : setReason('')
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
    </>
  );
};
