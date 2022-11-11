import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../utils/theme';

import canceled from '../assets/images/canceled.svg';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  background-color: ${theme.colors.secondaryBlue};
  margin: 0 -0.5rem -0.5rem -0.5rem;
  padding: 2rem 2rem -1rem 2rem;
  min-height: 87vh;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 85%;
  margin: 0 auto;
  align-items: center;
`;

const Column = styled.div`
  flex-direction: column;
  margin: 0 3rem;
`;

const Image = styled.img`
  width: auto;
  height: auto;
  padding: 2rem;
`;

const Text = styled.p`
  ${({ size, weight }) => css`
    color: ${theme.colors.darkBlue};
    font-size: ${size === 'small'
      ? '1.5rem'
      : size === 'medium'
      ? theme.sizes.size2
      : theme.sizes.size3};
    font-weight: ${weight === 'bold' ? 'bold' : '400'};
    text-align: center;
  `}
`;

export const CanceledWithSuccess = () => {
  const location = useLocation();
  const state = location.state;
  return (
    <Container>
      <Row>
        <Image src={canceled} />
        <Column>
          <Text size="big">
            {`Seu horário de protocolo: ${state.protocol} foi desmarcado, ${state.name}!`}
          </Text>
          <Text size="medium">
            Agradecemos por nos procurar e estaremos à disposição futuramente.
          </Text>
          <br />
          <Text size="small">
            As informações do cancelamento foram enviadas para o email:
            {state.email}
          </Text>
        </Column>
      </Row>
    </Container>
  );
};
