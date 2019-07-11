import React, {Component} from 'react';
import Calendar from 'react-calendar';
import '../css/crearAnuncio.css'
import axios from 'axios';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';


class CrearAnuncio extends Component{

    constructor(props) {
        super(props);
        this.state = {
          value: '0',
          nombre: '',
          date: '',
          archivo: '',
          dir: '',
          reg: '',
          com: [],
          cant: 0,
          est: '',
          detalles: '',
          comuna: '',
          visible: false,
          visible2: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.cambio = this.cambio.bind(this)
        this.renderCom = this.renderCom.bind(this)
        this.onClickSub = this.onClickSub.bind(this)
        this.hide = this.hide.bind(this)
        this.show = this.show.bind(this)
        this.hide2 = this.hide2.bind(this)
        this.show2 = this.show2.bind(this)
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
            this.setState({reg:region})
            var comunasId = eval(region);

            this.setState({com:comunasId})
        }

        event.preventDefault();
      }

  cambio(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
          [name]: value
        });
      }


  renderCom(){
    const Com = this.state.com.map((com)=>{
      return(

          <option value={com.replace(/\s/g, "")}>
            {com}
          </option>
      )
    })
    return(
      <select name="comuna" id="comuna" className="comuna custom-select" onChange={this.handleChange2}>
          <option value="0">Comunas por Region</option>
          {Com}
      </select>
    )
  }

  handleChange2(event){
    var comuna = event.target.value;
    this.setState({comuna})
  }

  onClickSub(){
    if(this.state.nombre.length==''){
      this.show2()
    }
    else if (this.state.date == '') {
      this.show2()
    }
    else if (this.state.archivo == '') {
      this.show2()
    }
    else if (this.state.dir == '') {
      this.show2()
    }
    else if (this.state.dir == '') {
      this.show2()
    }
    else if (this.state.reg == '') {
      this.show2()
    }
    else if (this.state.comuna == '') {
      this.show2()
    }
    else if (this.state.cant <= 0) {
      this.show2()
    }
    else if (this.state.est == '') {
      this.show2()
    }
    else if (this.state.detalles == '') {
      this.show2()
    }
    else {
      var fecha = new Date(this.state.date);
      var mes = fecha.getMonth()+1;
      const Evento = {
        "title": this.state.nombre,
        "fecha": this.state.date,
        "img": this.state.archivo,
        "direccion": this.state.dir,
        "region": this.state.reg,
        "comuna": this.state.comuna,
        "cantidad": this.state.cant,
        "estilo": this.state.est,
        "cuerpo": this.state.detalles,
        "mes": mes
      }
      console.log(Evento);
      var link = "http://localhost:3001/eventos"
      axios.post(link, Evento)
      .then(res=>{
        console.log(res.data);
        this.show()
      })
      .catch((error)=>{
      })
    }
  }

  show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }
    show2() {
          this.setState({ visible2: true });
      }

      hide2() {
          this.setState({ visible2: false });
      }

  render(){
    return(
      <div className="row">
        <div className="col-2 margCalen">
        <h6>Próximos Eventos</h6>
          <div style={{fontSize: 9}}>
            <Calendar/>
          </div>
          <button onClick={this.show}>show</button>

          <Rodal visible={this.state.visible} onClose={this.hide} class="rodal-dialog rodal-zoom-enter" width={300} height={120}>
              <div class="header">Se ha creado el evento</div>
              <button class="rodal-confirm-btn" onClick={this.hide}>Aceptar</button>
          </Rodal>

          <Rodal visible={this.state.visible2} onClose={this.hide2} class="rodal-dialog rodal-zoom-enter" width={300} height={120}>
              <div class="header">Faltan campos por rellenar</div>
              <button class="rodal-confirm-btn" onClick={this.hide2}>Aceptar</button>
          </Rodal>

        </div>
        <div className=" col-10 ">
        <div  class="crearAnuncio">
        <br></br>
        <center><h4><label >Publicar Evento</label></h4></center>

        <table>
            <tr>
                <td><label>Nombre evento : </label></td><td><input type="text" className="form-control" name="nombre" onChange={this.cambio}></input></td>
            </tr>
            <tr>
                <td><label for="tareaCheck2">Fecha : </label></td><td><input type="date" className="form-control" name="date" onChange={this.cambio}></input></td>
            </tr>
            <tr>
              <td><label>Link de Imagen  : </label></td><td><input type="text" className="form-control" name="archivo" onChange={this.cambio}/></td>
            </tr>
            <tr>
                <td><label>Dirección : </label></td><td><input type="text" className="form-control" name="dir" onChange={this.cambio}></input></td>
            </tr>
            <tr>
                <td><label>Región : </label></td>
                <td align="left">
                  <select class="custom-select"  value={this.state.value} onChange={this.handleChange}>
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
                </td>
                <td align="left"><label>Comuna : </label></td><td>

                        {this.renderCom()}

                </td>
            </tr>
            <tr>
                <td><label>Cantidad Banda/músico <br></br>que necesita  </label></td><td align="left"><input className="cantidad" type="text" className="form-control" name="cant" onChange={this.cambio}></input></td>
            </tr>
            <tr>
            <td><label>Estilo : </label></td><td>

    <input type="text" className="form-control" name="est" onChange={this.cambio}></input></td>
            </tr>
            <tr>
                <td ><label>Detalles adicionales  </label></td><td colSpan="3" rowSpan="2" align="left"><textarea className="form-control" rows="4" cols="50" name="detalles" onChange={this.cambio}></textarea></td><td></td><td></td>
            </tr>
            <tr><br></br></tr>
            <tr>
                <td colSpan="2"><button class="btn btn-primary" onClick={this.onClickSub} >Crear Evento</button></td>
            </tr>
        </table>
        </div>
        </div>
      </div>
    )
  }
}

export default CrearAnuncio;

function buscarComunas(){
    alert("cambiooo");
}
