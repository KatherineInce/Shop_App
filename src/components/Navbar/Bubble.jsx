import React, { Component } from 'react'
const styles = {

    bubble:{
        backgroundColor: '#33cc33',
        color:'#fff',
        fontWeight: '700',
        borderRadius: '15px',
        padding: '2px 10px',
        fontSize: '0.9rem',
        width: '20px'
    }
}
export class Bubble extends Component {
  getNumber = (n) =>{
    if(!n){return ''}
    return n > 9 ? '9+' : n
  }
  render() {
    const {value} = this.props
    return (
     <span style={styles.bubble}>
         {this.getNumber(value)}
     </span>
    )
  }
}

export default Bubble