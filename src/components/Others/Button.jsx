import React, { Component } from 'react'

const styles = {
    button:{
        backgroundColor: '#d65cad',
        color: '#fff',
        padding: '15px 20px',
        border:'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
}

export class Button extends Component {
  render() {
    return (
      <button style={styles.button} {...this.props}/>
    )
  }
}

export default Button