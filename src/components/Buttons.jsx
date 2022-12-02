import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../utils/theme';
import P from 'prop-types';

const ButtonStyle = styled.button`
  ${({ width, height, marginT, marginR, marginB, marginL, disabled }) => css`
    background-color: ${disabled
      ? theme.colors.auxiliar
      : theme.colors.fourthBlue};
    color: ${theme.colors.white};
    border-radius: 200px;
    width: ${width}%;
    height: ${height}%;
    margin-top: ${marginT};
    margin-right: ${marginR};
    margin-bottom: ${marginB};
    margin-left: ${marginL};
    border: 0 solid;
    cursor: pointer;
    display: block;

    :hover {
      transform: scale(1.2);
      transition: all 200ms ease-in-out;
    }
  `}
`;

export const Button = ({
  children,
  onClick,
  width,
  height,
  marginT,
  marginR,
  marginB,
  marginL,
  disabled,
}) => {
  return (
    <ButtonStyle
      width={width}
      height={height}
      marginT={marginT}
      marginR={marginR}
      marginB={marginB}
      marginL={marginL}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonStyle>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
  onClick: P.func,
  width: P.string.isRequired,
  height: P.string.isRequired,
  marginT: P.string,
  marginR: P.string,
  marginB: P.string,
  marginL: P.string,
  disabled: P.any,
};
