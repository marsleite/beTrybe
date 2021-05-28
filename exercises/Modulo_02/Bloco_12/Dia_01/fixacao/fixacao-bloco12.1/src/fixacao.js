import React from 'react';

class HandleClick extends React.Component {

  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log(this)
    console.log('Clicou!')
  }

  render() {
    return(
      console.log(this),
      <button onClick={this.handleClick}>Meu botão</button>
    )
  }
}

export default HandleClick;