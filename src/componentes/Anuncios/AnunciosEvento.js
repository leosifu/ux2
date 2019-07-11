import React, {Component} from 'react';
import '../../css/anunciosE.css';
import Calendar from 'react-calendar';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AnunciosEvento extends Component{

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      anuncios:[],
      algomas:0,
      com: [],
      search:'',
      region: '',
      comuna: '',
      mes: 0,
      notF: false

    }
    this.anuncios = this.anuncios.bind(this)
    this.renderCom = this.renderCom.bind(this)
    this.cambio = this.cambio.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.handleChange3 = this.handleChange3.bind(this)
    this.buscar = this.buscar.bind(this)
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
    var link2 = "http://localhost:3001/eventos?"

    axios.get(link2)
    .then(res=>{
      console.log(res.data);
    })
    .catch((error)=>{
    })
  }

  componentDidUpdate(prevProps, prevState){

  }

  cambio(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  anuncios(){
    var anunciosAlt = []
    for (var i = 0; i < this.state.anuncios.length; i++) {
      if(this.state.anuncios[i].title.toLowerCase().indexOf(this.state.search.toLowerCase()) != -1 ){
        anunciosAlt.push(this.state.anuncios[i]);
      }
    }
    console.log(anunciosAlt);
    if(anunciosAlt.length>0){
      const Anun = anunciosAlt.map((anuncio)=>(
        <div className="card cardAnun">
          <img src={anuncio.img} class="card-img-top imagenAnuncio" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{anuncio.title}</h5>
            <p class="card-text">{anuncio.cuerpo}</p>
          </div>
          <div class="card-footer footAnun">
            <button class="btn btn-primary">Ver Perfil</button>
            <small class="text-muted">{anuncio.fecha}</small>
          </div>
        </div>
      ))
      console.log("ASDSAD");
      return(
        <div className="buscadorAnun cardsAnun">
          {Anun}
        </div>
      )
    }
    console.log("asdasda");
    return(
      <div className="buscadorAnun cardsAnun">
        No se encontraron Anuncios
      </div>
    )
  }

  handleChange(event) {
    var Tarapaca = new Array("Arica");
    var Antofagasta = new Array("Alto Hospicio","Iquique","Pozo Almonte");
    var Atacama = new Array("Caldera","Chanaral","Copiapo","Diego de Almagro","El Salvador","Huasco","Tierra Amarilla","Vallenar");
    var Coquimbo = new Array("Andacollo","Combarbala","Coquimbo","El Palqui","Illapel","La Serena","Los Vilos","Montepatria","Ovalle","Salamanca","Vicuna");
    var Valparaiso = new Array("Algarrobo","Cabildo","Calle Larga","Cartagena","Casablanca","Catemu","Concon","El Melon","El Quisco","El Tabo","Hijuelas","La Calera","La Cruz","La Ligua","Las Ventanas","Limache","Llaillay","Los Andes","Nogales","Olmue","Placilla de Penuelas","Putaendo","Quillota","Quilpue","Quintero","Rinconada","San Antonio","San Esteban","San Felipe","Santa Maria","Santo Domingo","Valparaiso","Villa Alemana","Villa Los Almendros","Vina del Mar");
    var OHiggins = new Array("Chimbarongo","Codegua","Donihue","Graneros","Gultro","Las Cabras","Lo Miranda","Machali","Nancagua","Palmilla","Peumo","Pichilemu","Punta Diamante","Quinta de Tilcoco","Rancagua","Rengo","Requinoa","San Fernando","San Francisco de Mostazal","San Vicente de Tagua Tagua","Santa Cruz");
    var Maule = new Array("Cauquenes","Constitucion","Curico","Hualane","Linares","Longavi","Molina","Parral","San Clemente","San Javier","Talca","Teno","Villa Alegre");
    var BioBio = new Array("Arauco","Bulnes","Cabrero","Canete","Chiguayante","Chillan","Chillan Viejo","Coelemu","Coihueco","Concepcion","Conurbacion La Laja-San Rosendo","Coronel","Curanilahue","Hualpen","Hualqui","Huepil","Lebu","Los alamos","Los angeles","Lota","Monte aguila","Mulchen","Nacimiento","Penco","Quillon","Quirihue","San Carlos","San Pedro de la Paz","Santa Barbara","Santa Juana","Talcahuano","Tome","Yumbel","Yungay");
    var Araucania = new Array("Angol","Carahue","Collipulli","Cunco","Curacautin","Freire","Gorbea","Labranza","Lautaro","Loncoche","Nueva Imperial","Padre Las Casas","Pitrufquen","Pucon","Puren","Renaico","Temuco","Traiguen","Victoria","Villarrica");
    var LosLagos = new Array("Futrono","La Union","Lanco","Los Lagos","Paillaco","Panguipulli","Rio Bueno","San Jose de la Mariquina","Valdivia");
    var Aisen = new Array("Coihaique","Puerto Aisen");
    var MagallanesYAntartica = new Array("Punta Arenas","Puerto Natales");
    var Metropolitana = new Array("Alto Jahuel","Bajos de San Agustin","Batuco","Buin","Cerrillos","Cerro Navia","Colina","Conchali","Curacavi","El Bosque","El Monte","Estacion Central","Hospital","Huechuraba","Independencia","Isla de Maipo","La Cisterna","La Florida","La Granja","La Islita","La Pintana","La Reina","Lampa","Las Condes","Lo Barnechea","Lo Espejo","Lo Prado","Macul","Maipu","Melipilla","Nunoa","Padre Hurtado","Paine","Pedro Aguirre Cerda","Penaflor","Penalolen","Pirque","Providencia","Pudahuel","Puente Alto","Quilicura","Quinta Normal","Recoleta","Renca","San Bernardo","San Joaquin","San Jose de Maipo","San Miguel","San Ramon","Santiago","Talagante","Tiltil","Vitacura");
    var LosRios = new Array("Ancud","Calbuco","Castro","Fresia","Frutillar","Llanquihue","Los Muermos","Osorno","Puerto Montt","Puerto Varas","Purranque","Quellon","Rio Negro");
    var AricayParinacota = new Array("Antofagasta","Calama","Maria Elena","Mejillones","Taltal","Tocopilla");

    this.setState({value: event.target.value});
    var region = event.target.value;
    if (region !== 0) {
        var comunasId = eval(region);
        this.setState({region})
        this.setState({com:comunasId})
    }
    else{
      this.mylist = [];
      for(var i=0; i<10; i++) {
        this.mylist.push(i);
      }
      this.setState({ com: this.mylist });
    }

    event.preventDefault();
  }

  renderCom(){
    if(this.state.com){
      if(this.state.com.length>0){
        const Com = this.state.com.map((com)=>{
          return(

              <option value={com.replace(/\s/g, "")}>
                {com}
              </option>
          )
        })
        return(
          <select name="comuna" id="comuna" className="comuna custom-select" onChange={this.handleChange2}>
              <option>Comunas por Region</option>
              {Com}
          </select>
        )
      }
    }
  }

  handleChange2(event){
    var comuna = event.target.value;
    this.setState({comuna})
  }

  handleChange3(event){
    var mes = event.target.value;
    this.setState({mes})
  }

  buscar(){
    var link2 = "http://localhost:3001/eventos?"
    if(this.state.region != ''){
      link2 = link2+"region=" + this.state.region
    }
    if(this.state.comuna != ''){
      link2 = link2+"&comuna=" + this.state.comuna
    }
    if(this.state.mes != 0){
      link2 = link2+"&mes=" + this.state.mes
    }
    console.log(link2);
    axios.get(link2)
    .then(res=>{
      console.log(res.data);
      this.setState({anuncios:res.data})
    })
    .catch((error)=>{
    })
  }

  render(){
    return(
      <div className="row">
      <div className="col-2 margCalen">
      <div class=" border-right margSide">
        <div class="list-group list-group-flush">
          <Link className="sideE" to='/eventos'><a class="list-group-item list-group-item-action sideE"><i class="fas fa-search iconP"></i>    Eventos</a>
          </Link>
          <Link className="sideE" to='/crearAnuncio'><a class="list-group-item list-group-item-action sideE"><i class="fas fa-plus-circle iconP"></i>      Crear Evento</a>
          </Link>
        </div>
      </div>
      <h6>Próximos Eventos</h6>
        <div style={{fontSize: 9}}>
          <Calendar/>
        </div>

      </div>
        <div className="col-10 vistaAnun">
          <h3>Búsqueda de Eventos</h3>
          <div className="input-group buscadorAnun">
            <input className="form-control" placeholder="Buscar Evento" name="search" onChange={this.cambio}/>
            <select class="custom-select"  value={this.state.value} onChange={this.handleChange}>
              <option value="" selected="selected">Regiones</option>
              <option value="Tarapaca">Tarapaca</option>
              <option value="Antofagasta">Antofagasta</option>
              <option value="Atacama">Atacama</option>
              <option value="Coquimbo">Coquimbo</option>
              <option value="Valparaiso">Valparaiso</option>
              <option value="OHiggins">OHiggins</option>
              <option value="Maule">Maule</option>
              <option value="BioBio">Bio - Bio</option>
              <option value="Araucania">Araucania</option>
              <option value="LosLagos">Los Lagos</option>
              <option value="Aisen">Aisen</option>
              <option value="MagallanesYAntartica">Magallanes Y Antartica</option>
              <option value="Metropolitana">Metropolitana</option>
              <option value="LosRios">Los Rios</option>
              <option value="AricayParinacota">Arica y Parinacota</option>
            </select>
            {this.renderCom()}

            <select class="custom-select" id="inputGroupSelect01" onChange={this.handleChange3}>
              <option value="0" selected>Mes...</option>
              <option value="1">Enero</option>
              <option value="2">Febrero</option>
              <option value="3">Marzo</option>
              <option value="4">Abril</option>
              <option value="5">Mayo</option>
              <option value="6">Junio</option>
              <option value="7">Julio</option>
              <option value="8">Agosto</option>
              <option value="9">Septiembre</option>
              <option value="10">Octubre</option>
              <option value="11">Noviembre</option>
              <option value="12">Diciembre</option>
            </select>
            <div class="input-group-append">
              <button class="btn btn-primary" type="button" onClick={this.buscar}>Buscar</button>
            </div>
          </div>
          {this.anuncios()}
        </div>
      </div>
    )
  }
}

export default AnunciosEvento;
