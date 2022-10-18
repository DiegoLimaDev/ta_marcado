import { Icon } from '@iconify/react';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 -0.5rem -0.5rem -0.5rem;
  width: auto;
  background-color: ${theme.colors.secondaryBlue};
`;

const Box = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  font-size: ${theme.sizes.size1};
  color: ${theme.colors.darkBlue};
  margin-left: 1rem;
`;

const Footer = () => {
  return (
    <Container>
      <Box>
        <Icon icon="cil:school" width="40" height="40" />
        <Text>ESCOLA TÉCNICA PORTO DIGITAL</Text>
      </Box>
      <Box>
        <Icon icon="ic:twotone-whatsapp" width="40" height="40" />
        <Text>xxxxx-xxxx</Text>
      </Box>
      <Box>
        <Icon icon="eva:email-outline" width="40" height="40" />
        <Text>xxxxx@gmail.com</Text>
      </Box>
    </Container>
  );
};

export default Footer;
