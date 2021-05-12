// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// == Import
import './styles.scss';
import Page from 'src/components/Page';
import Logo from 'src/components/Logo';

// == Composant
const App = () => (
  <div className="app">
    <Logo />
    <Switch>
      <Route exact path="/">
        <Page>
          
        </Page>
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
