// Utilities
import React from 'react';

import { Switch, Route } from 'react-router-dom';

// Partial components
import Home from './pages/Home';

// pages
import About from './pages/Sobre';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/sobre">
        <About />
      </Route>

      <Route path="/eventos">Eventos</Route>

      <Route path="/ferramentas">Ferramentas</Route>

      <Route path="*">Erro r404</Route>
    </Switch>
  );
}

export default Routes;
