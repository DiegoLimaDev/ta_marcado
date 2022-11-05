import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../utils/theme';

import checking from '../assets/images/checking_protocol.svg';
import { Icon } from '@iconify/react';

const Container = styled.div`
  background-color: ${theme.colors.secondaryBlue};
  margin: 0 -0.5rem -0.5rem -0.5rem;
  padding: 2rem 2rem -1rem 2rem;
  min-height: 87vh;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 2rem;
  justify-content: space-around;
`;

const Column = styled.div`
  flex-direction: column;
  width: 30%;
`;

const Image = styled.img`
  width: auto;
  height: auto;
`;

const Input = styled.input`
  ${({ width }) => css`
    background-color: ${theme.colors.auxiliar};
    border: 0.5px solid;
    border-color: ${theme.colors.darkBlue};
    border-radius: 20px;
    width: ${width}%;
    height: 4%;
    padding: 0.2rem 0.2rem 0.2rem 0.5rem;
  `}
`;

const IconContainer = styled.span`
  position: fixed;
  float: right;
`;

export const CheckProtocol = () => {
  return (
    <Container>
      <Row>
        <Image src={checking} />
        <Column>
          <Input type="text" width="80" placeholder="Pesquisar" />
          <IconContainer>
            <Icon icon="bi:search" width={20} height={20} />
          </IconContainer>
        </Column>
      </Row>
    </Container>
  );
};
