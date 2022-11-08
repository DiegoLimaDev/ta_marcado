import React from 'react';
import P from 'prop-types';
import styled, { css } from 'styled-components';
import { theme } from '../utils/theme';

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

const Box = styled.div`
  ${({ width, visible }) => css`
    background-color: ${theme.colors.lightBlue};
    width: ${width}%;
    box-shadow: 4px 4px 4px 0 #000000;
    margin: 0 auto;
    display: block;
    ${visible === 'visible' ? ContainerVisible() : ContainerInvisible()}
  `}
`;

export const ProtocolContainer = ({ data, width, visible }) => {
  return (
    <Box width={width} visible={visible}>
      <p>{data.name}</p>
    </Box>
  );
};

ProtocolContainer.propTypes = {
  data: P.object.isRequired,
  width: P.number,
  visible: P.string,
};
