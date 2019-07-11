
import React, {Component} from 'react';
import '../css/login.css'
import { Link } from 'react-router-dom';
class Login extends Component{
    render(){
      return(
    <div>
        <div class="Login">
        <br></br>
        <center><h4><label>Inicio de sesión</label><br></br></h4></center>
        <div class="interior">
            <label>Email</label><br></br>
            <input type="text"></input><br></br>
            <label>Contraseña</label><br></br>
            <input type="password"></input><br></br>
            <Link  to="/perfil">
            <button class="btn boton" type="button">Login</button>
            </Link>
        </div>
        </div>
      </div>
      )
    }
}
export default Login
