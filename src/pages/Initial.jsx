import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../utils/theme';

import schedule from '../assets/images/schedule.svg';
import { Button } from '../components/Buttons';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-color: ${theme.colors.secondaryBlue};
  margin: 0 -0.5rem -0.5rem -0.5rem;
  padding: 2rem 2rem -1rem 2rem;
  min-height: 87vh;

  .LinkDecoration {
    text-decoration: none;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Column = styled.div`
  flex-direction: column;
`;

const CenterButtons = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Text = styled.p`
  ${({ size, footer }) => css`
    font-size: ${size === 'small'
      ? theme.sizes.size1
      : size === 'medium'
      ? theme.sizes.size2
      : theme.sizes.size4};
    color: ${footer === 'true' ? theme.colors.darkBlue : theme.colors.white};
  `}
`;

const TextAlign = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: auto;
  height: auto;
`;

const InitialPage = () => {
  return (
    <Container>
      <Row>
        <Column>
          <TextAlign>
            <Text size="medium">Bem vindo(a) ao</Text>
            <Text>TÁ MARCADO</Text>
          </TextAlign>
          <CenterButtons>
            <Button height="15" width="30" marginR="5rem">
              <Link to="/schedulingPage" className="LinkDecoration">
                <Text size="small">Agendar</Text>
              </Link>
            </Button>
            <Button height="15" width="30" marginL="5rem">
              <Link to="/cancelProtocol" className="LinkDecoration">
                <Text size="small">Cancelamento</Text>
              </Link>
            </Button>
          </CenterButtons>
        </Column>
        <Image src={schedule} />
      </Row>
    </Container>
  );
};

export default InitialPage;
