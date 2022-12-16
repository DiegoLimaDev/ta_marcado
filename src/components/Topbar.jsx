import React from 'react';
import { theme } from '../utils/theme';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

import logo from '../assets/images/logo.jpeg';
import logopd from '../assets/images/logo_pd.svg';
import { Link } from 'react-router-dom';
import { TopbarMobile } from './TopbarMobile';

const Container = styled.div`
  background-color: ${theme.colors.white};
  /* padding: 2rem 2rem 0 2rem; */
  min-height: 6rem;
  @media (max-width: 1000px) {
    padding: 0;
    height: auto;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
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

const Images = styled.img`
  width: 4rem;
  height: 4rem;
`;

const Box1 = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Box2 = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  .LinkDecoration {
    text-decoration: none;
  }
`;

const Topbar = () => {
  return (
    <Container>
      <MediaQuery minWidth={theme.mediaQ.media2}>
        <Row>
          <Box1>
            <Images src={logo} />
            <Images src={logopd} />
          </Box1>
          <Box2>
            <Link to="/" className="LinkDecoration">
              <Links>HOME</Links>
            </Link>
            <Link to="/checkProtocol" className="LinkDecoration">
              <Links>PROTOCOLO</Links>
            </Link>
            <Links>HOME</Links>
            <Links>SOBRE O PROJETO</Links>
          </Box2>
        </Row>
      </MediaQuery>
      <MediaQuery maxWidth={theme.mediaQ.media2}>
        <TopbarMobile />
      </MediaQuery>
    </Container>
  );
};

export default Topbar;
