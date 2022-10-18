import React from 'react';
import { theme } from '../utils/theme';
import styled from 'styled-components';

import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import InitialPage from './Initial';

const Home = () => {
  return (
    <div>
      <Topbar />
      <InitialPage />
      <Footer />
    </div>
  );
};

export default Home;
