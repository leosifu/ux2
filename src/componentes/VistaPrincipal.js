import React, {Component} from 'react';
import '../css/vistaPrincipal.css'

class VistaPrincipal extends Component{
  render(){
    return(
      <div>
      <div class="row ">
        <div class="col-2 lateralI">col-8 kbdkjsab dsajdbsakjbd
        asb sjdhsajd</div>

        <div class="col-10">col-4
        <div id="carouselExampleIndicators" class="carousel slide carrusel" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="https://s.yimg.com/ny/api/res/1.2/oRs63wqnTyfOAexy6BYGhg--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/5f2acfff720e9a2c822eaa0b4f37e3dd" alt="First slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="https://nombres-web.com/wp-content/uploads/2018/08/nombres-para-perritos-1.jpg" alt="Second slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="https://www.imagenesdeamor.cc/wp-content/uploads/2015/06/perrito-sacando-su-lengua.gif" alt="Third slide" />
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
        <div class="noticias">
        Noticias
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
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
