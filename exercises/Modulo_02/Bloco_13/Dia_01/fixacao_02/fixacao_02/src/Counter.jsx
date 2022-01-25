import { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log('Construtor');
  }

  componentDidMount() {
    console.log('Component Did Mount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('ShouldComponentUpdate');
    return true;
  }

  componentDidUpdate(prevProps, PrevState) {
    console.log('component did update')
  }
  
  render() {
    console.log('render')
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={ () => this.setState((state) =>({ counter: state.counter + 1 })) }
        >
          Soma
        </button>
        <p>{ this.state.counter }</p>
      </div>
    )

  }
}

export default Counter;