import React, { Component } from 'react';

class DadJoke extends Component {
  constructor() {
    super();

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }

    this.renderJokeElement = this.renderJokeElement.bind(this);
    this.saveJoke = this.saveJoke.bind(this);
  }

  async fetchJoke() {
    const requestHeaders = { headers: { Accept: 'application/json' } }
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
    const requestObject = await requestReturn.json();
    this.setState({
      jokeObj: requestObject,
    })
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    console.log('Salvar Piada')
  }
  
  
  renderJokeElement() {
    return (
      <div>
        <p>{ this.state.jokeObj.joke }</p>
        <button 
          type="button"
          onClick={ this.saveJoke }
        >
          Salvar Piada
        </button>
      </div>
    )
  }

  render() {
    const { storedJokes } = this.state;
    const loadingElement = <span>Loading...</span>
    return (
      <div>
        <span>
          { storedJokes.map(({ id, joke }) => (<p key={ id }>{ joke }</p>)) }
        </span>
      </div>
    )
  }
}

export default DadJoke;