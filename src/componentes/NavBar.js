import React, { Component } from 'react';
import '../css/navbar.css'
import { Link } from 'react-router-dom';

class Nav extends Component{

  componentDidMount(){
    var lis = document.getElementsByClassName("menuA");
    for (var i = 0; i < lis.length; i++) {
      lis[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
    }
  }

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
            <Link to="/">
              <a class="nav-link menuA">Inicio <span class="sr-only">(current)</span></a>
            </Link>
          </li>
          <div class="lineaVertical" ></div>
          <li class="nav-item">
            <a class="nav-link menuA" href="#">Músicos</a>
          </li>
          <div class="lineaVertical" ></div>
          <li class="nav-item">
            <Link to="/bandas">
              <a class="nav-link menuA">Bandas</a>
            </Link>
          </li>
          <div class="lineaVertical" ></div>
          <li class="nav-item">
            <Link to="/eventos">
              <a class="nav-link menuA">Eventos</a>
            </Link>
          </li>
          <div class="lineaVertical" ></div>
          <li>
            <form class="form-inline">
              <button class="btn btn-sm reg" type="button"><u>Registro</u></button>
              <Link to="/login">
              <button class="btn  logIn" type="button">Login</button>
              </Link>
            </form>
          </li>

        </ul>
        </div>
      </nav>
    )
  }
}
export default Nav;
