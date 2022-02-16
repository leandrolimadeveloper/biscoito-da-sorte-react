import React, {Component} from 'react'
import './estilo.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textoFrase: ''
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
 'O riso é a menor distância entre duas pessoas.', 
 'Deixe de lado as preocupações e seja feliz.',
 'Realize o óbvio, pense no improvável e conquiste o impossível.', 'A maior barreira para o sucesso é o medo do fracasso.', 
 'A vida trará coisas boas se tiveres paciência.', 'Você é jovem apenas uma vez. Depois precisa inventar outra desculpa.', 
 'Sua visão se tornará clara apenas quando você puder olhar dentro de seu coração.', 'Aquele que se importa com o sentimento dos outros, não é um tolo.'];
  }

  quebraBiscoito() {
    let state = this.state
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
    state.textoFrase = this.frases[numeroAleatorio]
    this.setState(state)
  }

  render() {
    return (
      <div className='container'>
        <img src={require('./assets/fortune-cookie.jpg')} width="400px"></img>
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
        <h2 className='textoFrase'>{this.state.textoFrase}</h2>
      </div>
    )
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}

export default App