import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';

const Container = styled.div`
  background-color: ${theme.colors.secondaryBlue};
  margin: 0 -0.5rem -0.5rem -0.5rem;
  min-height: 87vh;
`;

const ProtocolPage = () => {
  return <Container>{/* <p>oi</p> */}</Container>;
};

export default ProtocolPage;
