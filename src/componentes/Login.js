
import React, {Component} from 'react';
import '../css/login.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from '../redux/actions'


class Login extends Component{

  constructor(props) {
      super(props);
      this.state = {
        value: '0',
        nombre: '',
        pass: '',
        nLog: false
      };
      this.cambio = this.cambio.bind(this)
      this.onClick = this.onClick.bind(this)
      this.notLog = this.notLog.bind(this)
    }
    componentDidMount(){
      console.log(this.props);
    }

  onClick(){
    var link = "http://localhost:3001/usuario?nombre=" + this.state.nombre + "&pass=" + this.state.pass
    console.log(link);
    axios.get(link)
    .then(res=>{
      if(res.data.length>0){
        console.log(res.data[0].id);
        console.log("olii");
        const Usuario = {
          "id": res.data[0].id,
          "nombre": this.state.nombre
        }
        this.props.logear(Usuario)

        this.props.history.push('/');
      }
      else {
        this.setState({nLog: true})
      }
    })
    .catch((error)=>{

    })
  }

  cambio(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  notLog(){
    if(this.state.nLog){
      return(
        <div className="nLog">
          Datos incorrectos!
        </div>
      )
    }
  }

    render(){
      return(
    <div>
        <div class="Login">
        <br></br>
        <center><h4><label>Inicio de sesión</label><br></br></h4></center>
        <div class="interior">
            <label>Email</label><br></br>
            <input type="text" name="nombre" onChange={this.cambio}></input><br></br>
            <label>Contraseña</label><br></br>
            <input type="password" name="pass" onChange={this.cambio}></input><br></br>
            {this.notLog()}
            <button class="btn boton" type="button" onClick={this.onClick}>Login</button>

        </div>
        </div>
      </div>
      )
    }
}
const mapStateToProps = state =>{
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, actions)(Login);
