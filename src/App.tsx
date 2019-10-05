import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Home from './Home';
import Chatroom from './Chatroom';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    width: 100%;
    height: 100%;
  }
`;

export default () => (
  <Router>
    <GlobalStyle />
    <Switch>
      <Route path="/chatroom">
        <Chatroom />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);
