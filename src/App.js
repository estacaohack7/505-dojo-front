import React, { Component } from 'react';
import './App.css';
import Cardapio from './cardapio';
let autenticado

class App extends Component {
  constructor(props){
    super(props);
    this.state={
       autenticado: false

    }
  }
  
  mudarPagina = () =>{
    this.setState({autenticado: true})
  }
  render() {
      if (!this.state.autenticado){
        return(
        <div className="botaoinicial">
          <button onClick={this.mudarPagina}>Iniciar Atendimento</button>
        </div>
        
        ) 
      }
       else {
        return(
        <Cardapio />
        
      )
      }
      //<div className="finalizar">

    }
  }


export default App;