// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
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
import CreateTeam from 'src/containers/CreateTeam';

import checkCookie from 'src/selectors/checkCookie';

// == Composant
const App = ({
  saveJwtCookie,
}) => {
  const string = localStorage.getItem('jwt');

  useEffect(() => {
    if (string) {
      checkCookie(string);
      if (checkCookie(string)) {
        // If we get cookie with timestamp < 20 mins
        // parse cookie
        const correctCookie = JSON.parse(string);
        // we save JWT for request
        saveJwtCookie(correctCookie.value);
      }
    }
  });
  return (
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
        <Route exact path="/register">
          <ManagerTab />
          <CreateTeam />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  saveJwtCookie: PropTypes.func.isRequired,
};

// == Export
export default App;
