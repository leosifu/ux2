import React, {Component} from 'react';
import '../css/vistaPrincipal.css'

class VistaPrincipal extends Component{
  render(){
    return(
      <div>
      <div class="row ">
        <div class="col-3 lateralI">col-8 kbdkjsab dsajdbsakjbd
        asb sjdhsajd</div>

        <div class="col-8">
        <center>
        <div id="carouselExampleIndicators" class="carousel slide carrusel" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img width="100" height="250" class="d-block w-100" src="https://thewowunicorn.com/wp-content/uploads/2018/12/uso-moviles-eventos-musicales-the-last-unicorn.jpg" alt="First slide" />
              </div>
              <div class="carousel-item">
                <img width="100" height="250" class="d-block w-100" src="http://www.calleboticaeventos.com/wp-content/uploads/2016/05/calle-botica-eventos-concierto-6-2.jpg" alt="Second slide" />
              </div>
              <div class="carousel-item">
                <img width="100" height="250" class="d-block w-100" src="https://s3.pixers.pics/pixers/700/FO/34/90/42/82/700_FO34904282_a5a8025222fec644ee4d4b7b09141326.jpg" alt="Third slide" />
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
        </div>
       
        </center>
        <div class="noticias">
        <hr></hr>
        Noticias
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Evento 1</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <a href="#" class="btn botonLeer">Leer noticia</a>
          </div>
        </div>
        <hr></hr>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Evento pasado 2</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <a href="#" class="btn  botonLeer">Leer noticia</a>
          </div>
        </div>
        </div>

        </div>
        
      </div>
      </div>
    )
  }
}

export default VistaPrincipal;
