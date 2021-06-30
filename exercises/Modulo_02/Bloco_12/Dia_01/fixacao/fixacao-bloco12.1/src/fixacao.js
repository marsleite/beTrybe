import React from 'react';

class HandleClick extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      numeroDeclick: 0
    }
  }

  handleClick() {
    this.setState((estadoAnterior) => ({
      numeroDeclick: estadoAnterior.numeroDeclick + 1
    }))
  }

  render() {
    console.log(this)
    return(
      <div className="App-two">
        <div>
          <span>{this.state.numeroDeclick}</span>
        </div>
        <button onClick={this.handleClick}>Meu botão</button>
      </div>
    )
  }
}

export default HandleClick;