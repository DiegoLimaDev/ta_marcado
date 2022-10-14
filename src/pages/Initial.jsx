import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../utils/theme';

import schedule from '../assets/images/schedule.svg';
import { Button } from '../components/Buttons';
// import Footer from '../components/Footer';

const Container = styled.div`
  background-color: ${theme.colors.secondaryBlue};
  margin: 0 -0.5rem -0.5rem -0.5rem;
  min-height: 87vh;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Column = styled.div`
  flex-direction: column;

  .centerButtons {
    margin-left: 15%;
  }
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
          <div className="centerButtons">
            <Button height="15" width="30" marginR="5">
              <Text size="small">Agendar</Text>
            </Button>
            <Button height="15" width="30" marginL="5">
              <Text size="small">Cancelamento</Text>
            </Button>
          </div>
        </Column>
        <Image src={schedule} />
      </Row>
      {/* <Footer /> */}
    </Container>
  );
};

export default InitialPage;
