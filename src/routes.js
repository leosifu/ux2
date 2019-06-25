import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import VistaPrincipal from './componentes/VistaPrincipal';
import Anuncios from './componentes/Anuncios';
import CrearAnuncio from './componentes/CrearAnuncio';

const AppRoutes = ({store}) =>
  <App>
    <Switch>
      <Route exact path="/" component={VistaPrincipal} />
      <Route exact path="/anuncios" component={Anuncios} />
      <Route exact path="/crearAnuncio" component={CrearAnuncio} />
    </Switch>
  </App>;

export default AppRoutes;
