import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../utils/theme';

import diary from '../assets/images/diary.svg';
import { Button } from '../components/Buttons';
import { ScheduleForm } from '../components/ScheduleForm';

const Container = styled.div`
  background-color: ${theme.colors.secondaryBlue};
  margin: 0 -0.5rem -0.5rem -0.5rem;
  padding: 2rem 2rem -1rem 2rem;
  min-height: 87vh;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
`;

const Image = styled.img`
  width: auto;
  height: auto;
`;

const Box = styled.div`
  background-color: ${theme.colors.lightBlue};
  width: 50%;
  box-shadow: 4px 4px 4px 0 #000000;
`;

const GradientBox = styled.div`
  background: linear-gradient(
    to right,
    ${theme.colors.darkBlue} 60%,
    rgb(35, 74, 107, 0.7)
  );
  padding: 0.1rem;
`;

const Text = styled.p`
  ${({ size, color, align }) => css`
    color: ${color === 'title'
      ? theme.colors.lightBlue
      : theme.colors.darkBlue};
    font-size: ${size === 'title' ? theme.sizes.size2 : theme.sizes.size1};
    text-align: ${align === 'title' ? 'center' : 'left'};
  `}
`;

const ButtonDiv = styled.div`
  display: block;
  margin: 0 auto;
  justify-content: space-around;
`;

const SchedulingPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Image src={diary} />
          <Box>
            <GradientBox>
              <Text color="title" size="title" align="title">
                FORMULÁRIO DE AGENDAMENTO
              </Text>
            </GradientBox>
            <ScheduleForm />
            <ButtonDiv>
              <Button
                width="40"
                height="20"
                marginB="2rem"
                marginL="auto"
                marginR="auto"
              >
                <Text color="title" align="title">
                  Confirmar agendamento
                </Text>
              </Button>
            </ButtonDiv>
            <Text align="title">
              CAMPOS COM A SINALIZAÇÃO * SÃO DE PREENCHIMENTO OBRIGATÓRIO
            </Text>
          </Box>
        </Row>
      </Container>
    </>
  );
};

export default SchedulingPage;
