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
        <img className="logo" src="https://scontent.faep13-1.fna.fbcdn.net/v/t1.15752-9/67111383_898027917217349_1084682140790030336_n.png?_nc_cat=106&_nc_oc=AQmjRHDh2igJa5-6YeLRGrG8kggXoJzcO86Pbe8F_wABV8SV75tlGh7UlldcCamlXoU&_nc_ht=scontent.faep13-1.fna&oh=e9ea3754f39a9a1a662aa53d40a8868f&oe=5DBF30E4"/>
        <h3><label>Garage Music</label></h3>
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
          <Link to="/">
            <a class="nav-link menuA" href="#">Músicos</a>
          </Link>
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

            <form class="form-inline">
              <button class="btn btn-sm reg" type="button"><u>Registro</u></button>
              <Link to="/login">
              <button class="btn  logIn" type="button">Login</button>
              </Link>
            </form>


        </ul>
        </div>
      </nav>
    )
  }
}
export default Nav;
