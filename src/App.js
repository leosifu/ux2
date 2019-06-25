import React, {Component} from 'react';
import './App.css';
import Content from './componentes/Children/Content';
import Nav from './componentes/NavBar'

class App extends Component {
  render() {
    const { children } = this.props;
    return(
      <div>
        <Nav />
        <Content body={children} />
      </div>
    )
  }
}

export default App;
