// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// == Import
import './styles.scss';
import Page from 'src/containers/Page';
import Logo from 'src/components/Logo';
import CatchPhrase from 'src/components/CatchPhrase';
import Footer from 'src/components/Footer';
import LoginTab from 'src/containers/LoginTab';
import Home from 'src/containers/Home';
import Gallery from 'src/containers/Gallery';
import ManagerTab from 'src/containers/ManagerTab';

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
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/gallery">
        <div className="app__gallery">
          <ManagerTab />
          <Gallery />
        </div>

      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
