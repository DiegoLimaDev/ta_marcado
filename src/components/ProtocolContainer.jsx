import React from 'react';
import P from 'prop-types';
import styled, { css } from 'styled-components';
import { theme } from '../utils/theme';
import { CancelModal } from './CancelModal';

const ContainerVisible = () => css`
  visibility: visible;
  width: auto;
  height: auto;
`;

const ContainerInvisible = () => css`
  visibility: hidden;
  width: 0;
  height: 0;
`;

const Container = styled.div`
  ${({ width, visible }) => css`
    background-color: ${theme.colors.lightBlue};
    width: ${width}%;
    box-shadow: 4px 4px 4px 0 #000000;
    margin: 0 auto;
    display: block;
    ${visible === 'visible' ? ContainerVisible() : ContainerInvisible()}
  `}
`;

const ButtonContainer = styled.div`
  ${({ isCancelButtonVisible }) => css`
    ${isCancelButtonVisible === 'visible'
      ? ContainerVisible()
      : ContainerInvisible()}
    padding: 2rem;
  `}
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Column = styled.div`
  flex-direction: column;
`;

const Text = styled.p`
  font-size: ${theme.sizes.size1};
  text-align: left;
  padding: 1rem;
`;

export const ProtocolContainer = ({
  data,
  width,
  visible,
  isCancelButtonVisible,
}) => {
  return (
    <Container width={width} visible={visible}>
      <Row>
        <Column>
          <Text>Nome: {data.name}</Text>
          <Text>
            Email:{` `}
            {visible === 'visible' ? `****${data.email.slice(4)}` : null}
          </Text>
          <Text>Atendimento: {data.type}</Text>
          <Text>Horário: {data.time}</Text>
        </Column>
        <Column>
          <Text>
            CPF:{` `}
            {visible === 'visible' ? `***.${data.cpf.slice(4, 11)}-**` : null}
          </Text>{' '}
          <Text>
            Tel:{` `}
            {visible === 'visible'
              ? `${data.phone.slice(1, 3)}*****${data.phone.slice(10, 14)}`
              : null}
          </Text>
          <Text>Motivo: {data.reason}</Text>
          <Text>Data: {data.date}</Text>
        </Column>
      </Row>
      <ButtonContainer isCancelButtonVisible={isCancelButtonVisible}>
        <CancelModal data={data} />
      </ButtonContainer>
    </Container>
  );
};

ProtocolContainer.propTypes = {
  data: P.object.isRequired,
  width: P.string,
  visible: P.string,
  isCancelButtonVisible: P.string,
};
