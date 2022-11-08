import React from 'react';
import styled, { css } from 'styled-components';
import P from 'prop-types';

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
  ${({ visible }) => css`
    ${visible === 'error' ? MenuVisible() : MenuInvisible()}
  `}
`;

export const ProtocolNotFound = ({ visible }) => {
  return (
    <Container visible={visible}>
      <p>Protocolo não encontrado</p>
    </Container>
  );
};

ProtocolNotFound.propTypes = {
  visible: P.string,
};
