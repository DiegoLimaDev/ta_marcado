import React from 'react';
import styled, { css } from 'styled-components';
import P from 'prop-types';
import { theme } from '../utils/theme';

const MenuVisible = () => css`
  visibility: visible;
  width: auto;
  height: auto;
`;

const MenuInvisible = () => css`
  visibility: hidden;
  width: 0;
  height: 0;
`;

const Container = styled.div`
  ${({ width, visible }) => css`
    ${visible === 'error' ? MenuVisible() : MenuInvisible()}
    background-color: ${theme.colors.lightBlue};
    box-shadow: 4px 4px 4px 0 #000000;
    width: ${width}%;
    margin: 0 auto;
    display: block;
  `}
`;

const Text = styled.p`
  text-align: center;
  font-size: ${theme.sizes.size2};
  padding: 2rem;
`;

export const ProtocolNotFound = ({ visible, width }) => {
  return (
    <Container visible={visible} width={width}>
      <Text>Protocolo não encontrado</Text>
    </Container>
  );
};

ProtocolNotFound.propTypes = {
  visible: P.string,
  width: P.string,
};
