import * as React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px lightgray;
`;

const HeaderPart = styled.div`
  padding: 0 1rem;
  flex: 1;
`;

const Back = styled(HeaderPart)`
  cursor: pointer;
`;

const Title = styled(HeaderPart)`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

export default () => {
  const history = useHistory();
  const chatInputEl = React.useRef<HTMLInputElement>(null);
  return (
    <Container>
      <Header>
        <Back onClick={() => history.goBack()}>{'< Home'}</Back>
        <Title>Chatroom</Title>
        <HeaderPart />
      </Header>
      <div style={{ flex: 1 }}>
        <div></div>
      </div>
      <form
        style={{ display: 'flex' }}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(chatInputEl.current && chatInputEl.current.value);
        }}
      >
        <input style={{ flex: 1 }} ref={chatInputEl} />
        <button>보내기</button>
      </form>
    </Container>
  );
};
