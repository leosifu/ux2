import React, {Component} from 'react';
import '../../css/anunciosE.css';
import Calendar from 'react-calendar';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MisAnuncios extends Component{

    constructor(props) {
      super(props);

      this.state = {
        anuncios:[],
        algomas:0,
        com: [],

      }
      this.anuncios = this.anuncios.bind(this)
    }

    componentDidMount(){
      var link = "http://localhost:3001/eventos"
      axios.get(link)
      .then(res=>{
        console.log(res.data);
        this.setState({anuncios: res.data})
      })
      .catch((error)=>{
      })
    }

    anuncios(){
      const Anun = this.state.anuncios.map((anuncio)=>(
        <div className="card cardAnun">
          <img src={anuncio.img} class="card-img-top imagenAnuncio" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{anuncio.title}</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
          </div>
          <div class="card-footer footAnun">
            <button class="btn btn-primary">Ver postulantes</button>

          </div>
        </div>
      ))
      return(
      <div className="buscadorAnun cardsAnun">
      {Anun}
    </div>
  )


}

render(){
    return(
      <div className="row">
        <div className="col-2 margCalen">
        <div class=" border-right margSide">
          <div class="list-group list-group-flush">
            <Link className="sideE" to='/perfil'><a class="list-group-item list-group-item-action sideE"><i class="fas fa-user-alt iconP"></i>    Perfil</a>
            </Link>
            <Link className="sideE" to='/misAnuncios'><a class="list-group-item list-group-item-action sideE seleccion"><i class="fas fa-folder iconP"></i>      Mis Anuncios</a>
            </Link>
            <Link className="sideE" to='/'><a class="list-group-item list-group-item-action sideE"><i class="fas fa-users iconP"></i>      Postulantes</a>
            </Link>
            <Link className="sideE" to='/'><a class="list-group-item list-group-item-action sideE"><i class="fas fa-envelope iconP"></i>    Mensajes</a>
            </Link>
          </div>
        </div>
        <h6>Próximos Eventos</h6>
          <div style={{fontSize: 9}}>
            <Calendar/>
          </div>
        </div>
        <div className="col-10 ">
        <br></br>
        <table>
        <tr><td>
        <h5>Crear nuevo Anuncio</h5></td><td> <Link to='/crearAnuncio'><button class="btn btn-primary" type="button">Crear anuncio +</button></Link></td>
        </tr>
        </table>
        <br></br>

        <h5>Mis anuncios</h5>
          <div className="">
            {this.anuncios()}
          </div>
        </div>
    </div>
    )
}

}

export default MisAnuncios;
