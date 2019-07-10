import React, {Component} from 'react';
import Calendar from 'react-calendar';
import '../css/crearAnuncio.css'
class CrearAnuncio extends Component{
    
    constructor(props) {
        super(props);
        this.state = {value: '0'};
    
        this.handleChange = this.handleChange.bind(this);
       
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
        <div className="col-2 margCalen">
          <Calendar/>
        </div>
        <div className=" col-10 ">
        <div  class="crearAnuncio">
        <br></br>
        <center><h4><label >Publicar Evento</label></h4></center>
       
        <table>
            <tr>
                <td><label>Nombre evento : </label></td><td><input type="text" ></input></td>
            </tr>
            <tr>
                <td><label for="tareaCheck2">Fecha : </label></td><td><input type="date" ></input></td>    
            </tr>
            <tr>
              <td><label>Imagen  : </label></td><td><input type="file" name="archivo" /><br /></td>
            </tr>
            <tr>
                <td><label>Dirección : </label></td><td><input type="text" ></input></td>
            </tr>
            <tr>
                <td><label>Región : </label></td>
                <td align="left"><select value={this.state.value} onChange={this.handleChange}>
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
                </td>
                <td align="left"><label>Comuna : </label></td><td>  
                    <select name="comuna" id="comuna" className="comuna">
                        <option value="0">Comunas por Region</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td><label>Cantidad Banda/músico <br></br>que necesita  </label></td><td align="left"><input className="cantidad" type="text" ></input></td>
            </tr>
            <tr>
            <td><label>Estilo : </label></td><td>
    
    <input type="text" ></input></td>
            </tr>
            <tr>
                <td ><label>Detalles adicionales  </label></td><td colSpan="3" rowSpan="2" align="left"><textarea  rows="4" cols="50"></textarea></td><td></td><td></td>
            </tr>
            <tr><br></br></tr>
            <tr>                
                <td colSpan="2"><button class="botonPublicar" >Aceptar</button></td>
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