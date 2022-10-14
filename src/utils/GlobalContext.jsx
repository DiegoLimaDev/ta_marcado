import React from 'react';
import P from 'prop-types';
import { useState } from 'react';
import { createContext } from 'react';

export const GlobalContext = createContext();

const Context = ({ children }) => {
  const [page, setPage] = useState('Home');
  const providedValues = [page, setPage];

  return (
    <GlobalContext.Provider value={providedValues}>
      {children}
    </GlobalContext.Provider>
  );
};

Context.propTypes = {
  children: P.node,
};

export default Context;
