import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';


import App from './App';
import VistaPrincipal from './componentes/VistaPrincipal';
import AnunciosEvento from './componentes/Anuncios/AnunciosEvento';
import AnunciosBanda from './componentes/Anuncios/AnunciosBanda';
import CrearAnuncio from './componentes/CrearAnuncio';
import Login from './componentes/Login';
import VistaPrincipalGestor from './componentes/VistaPrincipalGestor';
import Perfil from './componentes/Perfil/perfil'
import MisAnuncios from './componentes/Anuncios/MisAnuncios'

const AppRoutes = ({store}) =>
<Provider store = {store}>
  <App>
    <Switch>
      <Route exact path="/" component={VistaPrincipal} />
      <Route exact path="/eventos" component={AnunciosEvento} />
      <Route exact path="/bandas" component={AnunciosBanda} />
      <Route exact path="/crearAnuncio" component={CrearAnuncio} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/HomeG" component={VistaPrincipalGestor} />
      <Route exact path="/perfil" component={Perfil} />
      <Route exact path="/misAnuncios" component={MisAnuncios} />
    </Switch>
  </App>
</Provider>;

export default AppRoutes;
