import React, {Component} from 'react';
import '../../css/anunciosB.css';
import Calendar from 'react-calendar';


class AnunciosBanda extends Component{

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      anuncios:[{'title': 'Nombre Banda', 'cuerpo': 'jshgrbjgeber', 'img': 'https://thewowunicorn.com/wp-content/uploads/2018/12/uso-moviles-eventos-musicales-the-last-unicorn.jpg'},{'title': 'Nombre Banda2', 'cuerpo': 'jshgrbjgeber', 'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmfXpvDpZQmIjYnDC1p8qkM9pMk4UwNvSVtdE12RJLkjZ7w4XL3w'},
      {'title': 'Nombre Banda3', 'cuerpo': 'jshgrbjgeber', 'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5TD3n31VaG0G5sNj47yYarI2p0VURobubGHAiyRMM8uvJhU0Lpg'},{'title': 'Nombre Banda4', 'cuerpo': 'jshgrbjgeber', 'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSn2PVuOtgpK-XEG0D2odXOqtg3a65vrqu7561mPl8trCEJCPQ7Q'},
      {'title': 'Nombre Banda5', 'cuerpo': 'jshgrbjgeber', 'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTol9TbYoaSkq5wDXXZZ7c6iNaWSs0p2IYP-BMsbngpTFfqhLe4'},{'title': 'Nombre Banda6', 'cuerpo': 'jshgrbjgeber', 'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5iX3Hksg6iQT1STitOcK9labD4UPPcwpVja89qLAs-gdqTqSSg'}],
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
  handleChange(event) {
    var ciudades_1 = new Array("Arica");
    var ciudades_2 = new Array("Alto Hospicio","Iquique","Pozo Almonte");
    var ciudades_3 = new Array("Caldera","Chanaral","Copiapo","Diego de Almagro","El Salvador","Huasco","Tierra Amarilla","Vallenar");
    var ciudades_4 = new Array("Andacollo","Combarbala","Coquimbo","El Palqui","Illapel","La Serena","Los Vilos","Montepatria","Ovalle","Salamanca","Vicuna");
    var ciudades_5 = new Array("Algarrobo","Cabildo","Calle Larga","Cartagena","Casablanca","Catemu","Concon","El Melon","El Quisco","El Tabo","Hijuelas","La Calera","La Cruz","La Ligua","Las Ventanas","Limache","Llaillay","Los Andes","Nogales","Olmue","Placilla de Penuelas","Putaendo","Quillota","Quilpue","Quintero","Rinconada","San Antonio","San Esteban","San Felipe","Santa Maria","Santo Domingo","Valparaiso","Villa Alemana","Villa Los Almendros","Vina del Mar");
    var ciudades_6 = new Array("Chimbarongo","Codegua","Donihue","Graneros","Gultro","Las Cabras","Lo Miranda","Machali","Nancagua","Palmilla","Peumo","Pichilemu","Punta Diamante","Quinta de Tilcoco","Rancagua","Rengo","Requinoa","San Fernando","San Francisco de Mostazal","San Vicente de Tagua Tagua","Santa Cruz");
    var ciudades_7 = new Array("Cauquenes","Constitucion","Curico","Hualane","Linares","Longavi","Molina","Parral","San Clemente","San Javier","Talca","Teno","Villa Alegre");
    var ciudades_8 = new Array("Arauco","Bulnes","Cabrero","Canete","Chiguayante","Chillan","Chillan Viejo","Coelemu","Coihueco","Concepcion","Conurbacion La Laja-San Rosendo","Coronel","Curanilahue","Hualpen","Hualqui","Huepil","Lebu","Los alamos","Los angeles","Lota","Monte aguila","Mulchen","Nacimiento","Penco","Quillon","Quirihue","San Carlos","San Pedro de la Paz","Santa Barbara","Santa Juana","Talcahuano","Tome","Yumbel","Yungay");
    var ciudades_9 = new Array("Angol","Carahue","Collipulli","Cunco","Curacautin","Freire","Gorbea","Labranza","Lautaro","Loncoche","Nueva Imperial","Padre Las Casas","Pitrufquen","Pucon","Puren","Renaico","Temuco","Traiguen","Victoria","Villarrica");
    var ciudades_10 = new Array("Futrono","La Union","Lanco","Los Lagos","Paillaco","Panguipulli","Rio Bueno","San Jose de la Mariquina","Valdivia");
    var ciudades_11 = new Array("Coihaique","Puerto Aisen");
    var ciudades_12 = new Array("Punta Arenas","Puerto Natales");
    var ciudades_13 = new Array("Alto Jahuel","Bajos de San Agustin","Batuco","Buin","Cerrillos","Cerro Navia","Colina","Conchali","Curacavi","El Bosque","El Monte","Estacion Central","Hospital","Huechuraba","Independencia","Isla de Maipo","La Cisterna","La Florida","La Granja","La Islita","La Pintana","La Reina","Lampa","Las Condes","Lo Barnechea","Lo Espejo","Lo Prado","Macul","Maipu","Melipilla","Nunoa","Padre Hurtado","Paine","Pedro Aguirre Cerda","Penaflor","Penalolen","Pirque","Providencia","Pudahuel","Puente Alto","Quilicura","Quinta Normal","Recoleta","Renca","San Bernardo","San Joaquin","San Jose de Maipo","San Miguel","San Ramon","Santiago","Talagante","Tiltil","Vitacura");
    var ciudades_14 = new Array("Ancud","Calbuco","Castro","Fresia","Frutillar","Llanquihue","Los Muermos","Osorno","Puerto Montt","Puerto Varas","Purranque","Quellon","Rio Negro");
    var ciudades_15 = new Array("Antofagasta","Calama","Maria Elena","Mejillones","Taltal","Tocopilla");
    
    this.setState({value: event.target.value});
    var region = event.target.value;
    if (region !== 0) {
        var comunasId = eval("ciudades_" + region);
        for(var j in comunasId)
        { 
            document.getElementById("comuna").innerHTML += "<option value='"+comunasId[j]+"'>"+comunasId[j]+"</option>"; 

        }
    }

    event.preventDefault();
  }
  
  render(){
    return(
      <div className="row">
        <div className="col-2">
          <Calendar/>
        </div>
        <div className="col-10 vistaAnun">

          <div>
          </div>


          <h3>Búsqueda de Eventos</h3>
          <div className="input-group buscadorAnun">
          <select class="custom-select"  value={this.state.value} onChange={this.handleChange}>
                        <option value="0" selected="selected">Regiones</option>
                        <option value="1">Tarapaca</option>
                        <option value="2">Antofagasta</option>
                        <option value="3">Atacama</option>
                        <option value="4">Coquimbo</option>
                        <option value="5">Valparaiso</option>
                        <option value="6">O'Higgins</option>
                        <option value="7">Maule</option>
                        <option value="8">Bio - Bio</option>
                        <option value="9">Araucania</option>
                        <option value="10">Los Lagos</option>
                        <option value="11">Aisen</option>
                        <option value="12">Magallanes Y Antartica</option>
                        <option value="13">Metropolitana</option>
                        <option value="14">Los Rios</option>
                        <option value="15">Arica y Parinacota</option>
            </select>
            <select name="comuna" id="comuna" className="comuna custom-select">
                        <option value="0">Comunas por Región</option>
            </select>
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>Estilo...</option>
              <option value="1">Rock</option>
              <option value="2">Pop</option>
              <option value="3">Punk</option>
            </select>
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>Instrumento...</option>
              <option value="1">Guitarra</option>
              <option value="2">Bateria</option>
              <option value="3">Voz</option>
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

export default AnunciosBanda;
