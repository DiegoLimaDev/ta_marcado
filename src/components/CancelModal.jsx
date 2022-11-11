import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Button } from './Buttons';
import { theme } from '../utils/theme';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import P from 'prop-types';

const ButtonContainer = styled.div`
  height: 10rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: Row;
  justify-content: space-evenly;
  height: 5rem;
`;

const Text = styled.p`
  font-size: 1.5rem;
`;

const ModalContainer = styled(Box)(
  () => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    background-color: ${theme.colors.primaryBlue};
    box-shadow: 24;
    text-align: center;
    border-radius: 5px;

    .linkDecoration {
      text-decoration: none;
      width: 25%;
    }
  `,
);

export const CancelModal = ({ data }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <ButtonContainer>
        <Button
          width="30"
          height="30"
          marginR="auto"
          marginL="auto"
          marginT="2rem"
          onClick={() => setOpen(true)}
        >
          Cancelar
        </Button>
      </ButtonContainer>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ModalContainer>
            <Text>Deseja cancelar este atendimento?</Text>
            <Row>
              <Link
                to="/canceledWithSuccess"
                className="linkDecoration"
                state={data}
              >
                <Button width="100" height="40" marginT="2rem">
                  Sim
                </Button>
              </Link>
              <Button
                width="25"
                height="40"
                marginT="2rem"
                onClick={() => setOpen(false)}
              >
                Não
              </Button>
            </Row>
          </ModalContainer>
        </Fade>
      </Modal>
    </>
  );
};

CancelModal.propTypes = {
  data: P.object,
};
