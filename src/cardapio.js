import React, { Component } from 'react';
import './cardapio.css';

class Cardapio extends Component {
    constructor(props){
    super(props);
    this.state={
       autenticado: false
    }
    }
  

  enviarPedido = () =>{
      fetch('http://localhost:5000/cardapio',{
        method: "POST"
      }).then(()=>{
          console.log("olá")
      }).then()
  }

  render() {

     
    return (
        <div>
            <div className="input"> 
                <input value="feijoada" name="refeicoes" type="radio" />Feijoada
                <input value="macarrao" name="refeicoes" type="radio"/>Macarrao
                <input value="sushi" name="refeicoes" type="radio"/>Sushi
                <input value="brigadeiro" name="refeicoes" type="radio"/>Brigadeiro
                <input value="goiaba" name="refeicoes" type="radio"/>Goiaba
            </div>
            <div className="enviarPedido">
                <button onClick={this.enviarPedido}>Enviar Pedido</button>
            </div>
        </div>
    );
  }

}
export default Cardapio;