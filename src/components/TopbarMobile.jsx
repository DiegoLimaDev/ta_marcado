import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { theme } from '../utils/theme';

import logo from '../assets/images/logo.jpeg';
import logopd from '../assets/images/logo_pd.svg';
import { Drawer } from '@mui/material';

const BoxMobile = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-self: center;
    background-color: ${theme.colors.lightBlue};
    height: 100%;
    width: 15rem;

    .LinkDecoration {
      text-decoration: none;
    }

    .icon {
      align-self: flex-start;
      padding-top: 1rem;
      padding-left: 0.5rem;
      margin-bottom: 2rem;
      cursor: pointer;

      :hover {
        transform: scale(1.2);
        transition: 200ms all ease-in-out;
      }
    }

    .row {
      padding: 0 3rem 0 0.5rem;
    }

    .separator {
      border-bottom: 1px solid;
      border-bottom-color: ${theme.colors.darkBlue};
    }
  `}
`;

const Links = styled.p`
  color: ${theme.colors.darkBlue};
  font-size: ${theme.sizes.size1};
  font-weight: bold;
  width: auto;
  cursor: pointer;
  margin-left: 0.5rem;

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
  ${({ align }) => css`
    flex-direction: Row;
    display: flex;
    align-items: center;
    align-self: ${align === 'center' ? 'center' : null};
  `}
`;

const Images = styled.img`
  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;
`;

const IconContainer = styled.div`
  cursor: pointer;
  width: auto;
  padding: 1rem;

  .icon {
    :hover {
      transform: scale(1.2);
      transition: 200ms all ease-in-out;
    }
  }
`;

const MyDrawer = styled(Drawer)(() => css``);

export const TopbarMobile = () => {
  const [visible, setVisible] = useState(false);

  const icons = ['ant-design:home-outlined', 'ant-design:search-outlined'];
  const urls = ['/', '/checkProtocol', '/', '/'];

  return (
    <>
      <IconContainer>
        {visible === true ? null : (
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
      <MyDrawer anchor="left" open={visible} elevation={10}>
        <BoxMobile>
          <Icon
            icon="material-symbols:arrow-back-ios-new-rounded"
            width={25}
            height={25}
            className="icon"
            onClick={() => setVisible(false)}
            color={theme.colors.darkBlue}
          />
          <Row align="center">
            <Images src={logo} />
            <Images src={logopd} />
          </Row>
          {['Home', 'Protocolo', 'Home', 'Sobre o Projeto'].map((e, index) => (
            <div key={index}>
              <Row className="row">
                <Icon
                  icon={icons[index]}
                  width={20}
                  height={20}
                  color={theme.colors.darkBlue}
                />
                <Link
                  to={urls[index]}
                  className="LinkDecoration"
                  onClick={() => setVisible(false)}
                  role="button"
                >
                  <Links>{e}</Links>
                </Link>
              </Row>
              <div className="separator"></div>
            </div>
          ))}
        </BoxMobile>
      </MyDrawer>
    </>
  );
};
