import React, { Component } from 'react'

class ErrorBoundary extends Component {
    state={ok:true}
    componentDidCatch(){
        this.setState({ok:false})
    }
    render = () => (this.state.ok ? this.props.children : <p>'Error'</p>)
  }
export class App extends Component {
componentDidMount(){
    throw new Error('Could not load data')
}
  render() {
    return (
      <ErrorBoundary>
        <div>this</div>
        <Bug/>
      </ErrorBoundary>
    )
  }
}

const Bug = () => <p>{undefined.bug}</p>
export default App