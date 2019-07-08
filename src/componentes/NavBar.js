import React, { Component } from 'react';
import '../css/navbar.css'
import { Link } from 'react-router-dom';


class Nav extends Component{
  render(){
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light navB">
        <a class="navbar-brand" href="#">Nav</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse menu" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link menuA" href="#">Inicio <span class="sr-only">(current)</span></a>
          </li>
          <div class="vertical" ></div>
          <li class="nav-item">
            <a class="nav-link menuA" href="#">Músicos</a>
          </li>
          <div class="vertical" ></div>
          <li class="nav-item">
            <a class="nav-link menuA" href="#">Bandas</a>
          </li>
          <div class="vertical" ></div>
          <li class="nav-item">
            <Link to="/anuncios">
              <a class="nav-link menuA">Eventos</a>
            </Link>
          </li>
          <div class="vertical" ></div>
          <li>
            <form class="form-inline">
              <button class="btn btn-sm reg" type="button"><u>Registro</u></button>
              <button class="btn  logIn" type="button">Log in</button>

            </form>
          </li>

        </ul>
        </div>
      </nav>
    )
  }
}
export default Nav;
