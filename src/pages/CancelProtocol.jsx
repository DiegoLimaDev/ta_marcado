import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';

import searching from '../assets/images/searching.svg';
import { InputWithSearchIcon } from '../components/InputWithSearchIcon';
import { handleNumberInput } from '../components/HandleNumberInputs';
import { ProtocolContainer } from '../components/ProtocolContainer';
import { data } from '../components/mock';
import { ProtocolNotFound } from '../components/ProtocolNotFound';

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

export const CancelProtocol = () => {
  const [protocol, setProtocol] = useState('');
  const [visible, setVisible] = useState('invisible');
  const [isCancelButtonVisible, setIsCancelButtonVisible] =
    useState('invisible');
  const [informationData, setInformationData] = useState({});

  const getDataByProtocol = (protocol) => {
    let result;
    if (data.find((e) => e.protocol === protocol)) {
      result = data.find((e) => e.protocol === protocol);
      setInformationData(result);
      setVisible('visible');
      setIsCancelButtonVisible('visible');
    } else {
      setInformationData({});
      setVisible('error');
      setIsCancelButtonVisible('invisible');
    }
  };

  return (
    <Container>
      <Row>
        <Image src={searching} />
        <Column>
          <InputWithSearchIcon
            width={25}
            value={protocol}
            onChange={(e) => handleNumberInput(setProtocol, e)}
            onKeyPress={(e) => {
              e.key === 'Enter' ? getDataByProtocol(protocol) : null;
            }}
            onClick={() => getDataByProtocol(protocol)}
          />
          <ProtocolContainer
            data={informationData}
            width="100"
            visible={visible}
            isCancelButtonVisible={isCancelButtonVisible}
          />
          <ProtocolNotFound visible={visible} width="75" />
        </Column>
      </Row>
    </Container>
  );
};
