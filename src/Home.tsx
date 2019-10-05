import * as React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default () => {
  const history = useHistory();
  return (
    <Container>
      <h1>First chat app with Electron!</h1>
      <button onClick={() => history.push('/chatroom')}>Enter to chatroom</button>
    </Container>
  );
};
