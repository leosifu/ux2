import React, {Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Calendar from 'react-calendar';
import '../../css/perfil.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Perfil extends Component{

  constructor(props) {
    super(props);
    this.state = {
      rating: 4,
      anuncios:[{'title': 'Nombre Evento', 'cuerpo': 'jshgrbjgeber', 'img': 'https://thewowunicorn.com/wp-content/uploads/2018/12/uso-moviles-eventos-musicales-the-last-unicorn.jpg'},{'title': 'Nombre Evento2', 'cuerpo': 'jshgrbjgeber', 'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmfXpvDpZQmIjYnDC1p8qkM9pMk4UwNvSVtdE12RJLkjZ7w4XL3w'},
      {'title': 'Nombre Evento3', 'cuerpo': 'jshgrbjgeber', 'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5TD3n31VaG0G5sNj47yYarI2p0VURobubGHAiyRMM8uvJhU0Lpg'},{'title': 'Nombre Evento4', 'cuerpo': 'jshgrbjgeber', 'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSn2PVuOtgpK-XEG0D2odXOqtg3a65vrqu7561mPl8trCEJCPQ7Q'}],
      comentarios: [{'title': 'Nombre persona', 'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio'},{'title': 'Nombre persona', 'text': 'asjfvsakdvfakysfkr'}]

    }
    this.anuncios = this.anuncios.bind(this)
    this.comentarios = this.comentarios.bind(this)
  }

  componentDidMount(){
    var link = "http://localhost:3001/anuncios"
    axios.get(link)
    .then(res=>{

      console.log(res);
    })
    .catch((error)=>{

    })
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  anuncios(){
    const Anun = this.state.anuncios.map((anuncio)=>(
      <div className="card cardEv">
        <img src={anuncio.img} class="card-img-top imagenAnuncio" />
        <div class="card-body">
          <h5 class="card-title">{anuncio.title}</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </div>
        <div class="card-footer footAnun">
          <button class="btn btn-primary">Ver Evento</button>
        </div>
      </div>
    ))
    return(
      <div className=" cardsAnun">
        {Anun}
      </div>
    )
  }

  comentarios(){
    const Coment = this.state.comentarios.map((comentario)=>(
      <div class="card cardsEComent">
        <div class="card-body">
          <h6 class="card-title text-muted">{comentario.title}</h6>
          <p class="card-text">{comentario.text}</p>
        </div>
      </div>
    ))
    return(
      <div className=" cardsAnun">
        {Coment}
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
            <Link className="sideE" to='/misAnuncios'><a class="list-group-item list-group-item-action sideE"><i class="fas fa-folder iconP"></i>      Mis Anuncios</a>
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
        <div className="col-10 vistaD">
          <h3>Mi Perfil</h3>

          <div class="card mb-3" >
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="https://static1.squarespace.com/static/5aadc54285ede1bd72181a3a/t/5aadccec0e2e725448d54c7c/1521339652089/shutterstock_538256848.jpg?format=1500w" class="card-img" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Nombre Usuario</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          <h6>Valoración</h6>
          <div style={{fontSize: 26}}>
            <StarRatingComponent

              name="rate1"
              starCount={5}
              value={this.state.rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <h5>Eventos Realizados</h5>
          <div className="eventR">
            {this.anuncios()}
          </div>
          <h5>Comentarios</h5>
          {this.comentarios()}



        </div>
      </div>
    )
  }
}

export default Perfil;
