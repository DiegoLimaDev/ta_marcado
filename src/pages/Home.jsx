import React from 'react';
import { theme } from '../utils/theme';
import styled from 'styled-components';

import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import { useContext } from 'react';
import { GlobalContext } from '../utils/GlobalContext';
import InitialPage from './Initial';
import ProtocolPage from './Protocol';

const Home = () => {
  const [page, setPage] = useContext(GlobalContext);

  return (
    <div>
      <Topbar />
      {page === 'Home' ? (
        <InitialPage />
      ) : page === 'Protocol' ? (
        <ProtocolPage />
      ) : null}
      <Footer />
    </div>
  );
};

export default Home;
