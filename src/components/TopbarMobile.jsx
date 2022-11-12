import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { theme } from '../utils/theme';

import logo from '../assets/images/logo.jpeg';
import logopd from '../assets/images/logo_pd.svg';

const MenuVisible = () => css`
  visibility: visible;
  width: 100%;
  height: auto;
  transform: translate3d(0vw, 0, 0);
  transition: all 200ms ease-in-out;
`;

const MenuInvisible = () => css`
  visibility: hidden;
  width: 0;
  height: 0;
  transform: translate3d(-100vw, 0, 0);
  transition: all 200ms ease-in-out;
`;

const BoxMobile = styled.div`
  ${({ visible }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    z-index: 5;
    ${visible === true ? MenuVisible() : MenuInvisible()};
    transition: transform 300ms cubic-bezier(0, 0.52, 0, 1);
    z-index: 1000;

    .LinkDecoration {
      text-decoration: none;
    }
  `}
`;

const Links = styled.p`
  color: ${theme.colors.darkBlue};
  font-size: ${theme.sizes.size2};
  font-weight: bold;
  width: auto;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition: all 200ms ease-in-out;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0.2rem;
    top: 100%;
    left: 50%;
    background-color: ${theme.colors.darkBlue};
  }

  &:hover::after {
    transition: all 200ms ease-in-out;
    width: 100%;
    left: 0%;
    position: absolute;
  }
`;

const Row = styled.div`
  flex-direction: Row;
`;

const Images = styled.img`
  width: 4rem;
  height: 4rem;
`;

const IconContainer = styled.div`
  cursor: pointer;
  width: auto;
  height: auto;
  padding: 1rem;

  .icon {
    :hover {
      transform: scale(1.2);
      transition: 200ms all ease-in-out;
      z-index: 5;
    }
  }
`;

export const TopbarMobile = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <IconContainer>
        {visible === true ? (
          <Icon
            icon="ep:close"
            width={40}
            height={40}
            className="icon"
            onClick={() => setVisible(false)}
            color={theme.colors.darkBlue}
          />
        ) : (
          <Icon
            icon="eva:menu-outline"
            width={40}
            height={40}
            className="icon"
            onClick={() => setVisible(true)}
            color={theme.colors.darkBlue}
          />
        )}
      </IconContainer>
      <BoxMobile visible={visible}>
        <Row>
          <Images src={logo} />
          <Images src={logopd} />
        </Row>
        <Link
          to="/"
          className="LinkDecoration"
          onClick={() => setVisible(false)}
          role="button"
        >
          <Links>HOME</Links>
        </Link>
        <Link
          to="/checkProtocol"
          className="LinkDecoration"
          onClick={() => setVisible(false)}
          role="button"
        >
          <Links>PROTOCOLO</Links>
        </Link>
        <Links>HOME</Links>
        <Links>SOBRE O PROJETO</Links>
      </BoxMobile>
    </>
  );
};
