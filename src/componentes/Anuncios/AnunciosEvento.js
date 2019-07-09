import React, {Component} from 'react';
import '../../css/anunciosE.css';
import Calendar from 'react-calendar';


class AnunciosEvento extends Component{

  constructor(props) {
    super(props);
    this.state = {
      anuncios:[{'title': 'Nombre Evento', 'cuerpo': 'jshgrbjgeber', 'img': 'https://thewowunicorn.com/wp-content/uploads/2018/12/uso-moviles-eventos-musicales-the-last-unicorn.jpg'},{'title': 'Nombre Evento2', 'cuerpo': 'jshgrbjgeber', 'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmfXpvDpZQmIjYnDC1p8qkM9pMk4UwNvSVtdE12RJLkjZ7w4XL3w'},
      {'title': 'Nombre Evento3', 'cuerpo': 'jshgrbjgeber', 'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5TD3n31VaG0G5sNj47yYarI2p0VURobubGHAiyRMM8uvJhU0Lpg'},{'title': 'Nombre Evento4', 'cuerpo': 'jshgrbjgeber', 'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSn2PVuOtgpK-XEG0D2odXOqtg3a65vrqu7561mPl8trCEJCPQ7Q'},
      {'title': 'Nombre Evento5', 'cuerpo': 'jshgrbjgeber', 'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTol9TbYoaSkq5wDXXZZ7c6iNaWSs0p2IYP-BMsbngpTFfqhLe4'},{'title': 'Nombre Evento6', 'cuerpo': 'jshgrbjgeber', 'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5iX3Hksg6iQT1STitOcK9labD4UPPcwpVja89qLAs-gdqTqSSg'}],
      algomas:0,

    }
    this.anuncios = this.anuncios.bind(this)
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
          <button class="btn btn-primary">Ver Perfil</button>
          <small class="text-muted">Last updated 3 mins ago</small>
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
          <Calendar/>
        </div>
        <div className="col-10 vistaAnun">
          <h3>Búsqueda de Eventos</h3>
          <div className="input-group buscadorAnun">
            <input className="form-control" placeholder="Buscar Evento" />
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>Región...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>Comuna...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>Mes...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">Buscar</button>
            </div>
          </div>
          {this.anuncios()}
        </div>
      </div>
    )
  }
}

export default AnunciosEvento;
