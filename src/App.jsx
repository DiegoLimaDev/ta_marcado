import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import { theme } from './utils/theme';
import Context from './utils/GlobalContext';

const Container = styled.div`
  font-family: ${theme.font};
  font-size: ${theme.fontRem};
`;

function App() {
  return (
    <Container>
      <Context>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </Container>
  );
}

export default App;
