import React from 'react';
import { theme } from '../utils/theme';
import styled from 'styled-components';

import Topbar from '../components/Topbar';
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
    </div>
  );
};

export default Home;
