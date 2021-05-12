// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// == Import
import './styles.scss';
import Page from 'src/components/Page';
import Logo from 'src/components/Logo';
import CatchPhrase from 'src/components/CatchPhrase';
import Footer from 'src/components/Footer';
import LoginTab from 'src/containers/LoginTab';

// == Composant
const App = () => (
  <div className="app">
    <Logo />
    <Switch>
      <Route exact path="/">
        <Page>
          <CatchPhrase />
          <LoginTab />
        </Page>
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
