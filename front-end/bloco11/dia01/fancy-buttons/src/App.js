import './App.css';
import React from 'react';


class App extends React.Component {
  constructor() {
  super()
  this.state = {
    numeroDeCliques1: 0,
    numeroDeCliques2: 0,
    numeroDeCliques3: 0,
  }
  this.imprime1 = this.imprime1.bind(this);
  this.imprime2 = this.imprime2.bind(this);
  this.imprime3 = this.imprime3.bind(this);
  }

  imprime1() {
    console.log('funcionou1');
    this.setState((estadoAnterior, _pros) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1,
    }), () => {
      console.log(`Botão 1: ${this.changeColor(this.state.numeroDeCliques1)}`)
    })
  }
  
  imprime2() {
    console.log('funcionou2');
    this.setState((estadoAnterior, _pros) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1,
    }), () => {
      console.log(`Botão 2: ${this.changeColor(this.state.numeroDeCliques2)}`)
    })
  }
  
  imprime3() {
    console.log('funcionou3');
    this.setState((estadoAnterior, _pros) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1,
    }), () => {
      console.log(`Botão 3: ${this.changeColor(this.state.numeroDeCliques3)}`)
    })
  }

  changeColor (num) {
   return num % 2 === 0 ? 'blue' : 'white';
  }

  render() {
    console.log(this);
    return (
      <div>
      <button onClick={this.imprime1}
      style={{backgroundColor: this.changeColor(this.state.numeroDeCliques1)}}>{this.state.numeroDeCliques1}</button>

      <button onClick={this.imprime2}
      style={{backgroundColor: this.changeColor(this.state.numeroDeCliques2)}}>{this.state.numeroDeCliques2}</button>

      <button onClick={this.imprime3}
      style={{backgroundColor: this.changeColor(this.state.numeroDeCliques3)}}>{this.state.numeroDeCliques3}</button>
      </div>
    )
  }
}

export default App;
