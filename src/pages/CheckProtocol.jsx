import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';

import checking from '../assets/images/checking_protocol.svg';
import { InputWithSearchIcon } from '../components/InputWithSearchIcon';
import { handleNumberInput } from '../components/HandleNumberInputs';
import { ProtocolContainer } from '../components/ProtocolContainer';
import { data } from '../components/mock';

const Container = styled.div`
  background-color: ${theme.colors.secondaryBlue};
  margin: 0 -0.5rem -0.5rem -0.5rem;
  padding: 2rem 2rem -1rem 2rem;
  min-height: 87vh;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 2rem;
  justify-content: space-evenly;
`;

const Column = styled.div`
  flex-direction: column;
  width: 50%;
`;

const Image = styled.img`
  width: 40rem;
  height: 40rem;
`;

export const CheckProtocol = () => {
  const [protocol, setProtocol] = useState('');
  const [visible, setVisible] = useState(false);
  const [informationData, setInformationData] = useState({});

  const getDataByProtocol = (protocol) => {
    if (protocol.length === 6) {
      data.find((e) =>
        e.protocol === protocol ? setInformationData(e) : null,
      );
    }
  };

  const handleEvent = (e, protocol) => {
    if (e.key === 'Enter') {
      getDataByProtocol(protocol);
      setVisible(true);
    }
  };

  return (
    <Container>
      <Row>
        <Image src={checking} />
        <Column>
          <InputWithSearchIcon
            width={25}
            value={protocol}
            onChange={(e) => {
              handleNumberInput(setProtocol, e);
              getDataByProtocol(protocol);
            }}
            onKeyPress={(e) => handleEvent(e, protocol)}
            onClick={() => {
              getDataByProtocol(protocol);
              setVisible(true);
            }}
          />
          <ProtocolContainer
            data={informationData}
            width={100}
            visible={visible}
          />
        </Column>
      </Row>
    </Container>
  );
};
