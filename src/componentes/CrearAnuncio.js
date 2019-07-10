import React, {Component} from 'react';
import Calendar from 'react-calendar';
import '../css/crearAnuncio.css'
class CrearAnuncio extends Component{
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
                <td><label>Región : </label></td><td><input type="text" ></input></td><td><label>Comuna : </label></td><td><input type="text" ></input></td>
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
