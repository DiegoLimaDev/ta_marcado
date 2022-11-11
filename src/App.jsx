import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import { theme } from './utils/theme';
import Context from './utils/GlobalContext';
import SchedulingPage from './pages/Scheduling';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import { ScheduleConfirmed } from './pages/ScheduleConfirmed';
import { CheckProtocol } from './pages/CheckProtocol';
import { CancelProtocol } from './pages/CancelProtocol';
import { CanceledWithSuccess } from './pages/CanceledWithSuccess';

const Container = styled.div`
  font-family: ${theme.font};
  font-size: ${theme.fontRem};
`;

function App() {
  return (
    <Container>
      <Context>
        <BrowserRouter>
          <Topbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/schedulingPage" element={<SchedulingPage />} />
            <Route path="/scheduleConfirmed" element={<ScheduleConfirmed />} />
            <Route path="/checkProtocol" element={<CheckProtocol />} />
            <Route path="/cancelProtocol" element={<CancelProtocol />} />
            <Route
              path="/canceledWithSuccess"
              element={<CanceledWithSuccess />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Context>
    </Container>
  );
}

export default App;
