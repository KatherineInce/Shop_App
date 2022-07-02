import React, { Component } from 'react'

const styles = {
    title: {
        marginBottom: '30px',
        color: '#d65cad'
    }
}

export class Title extends Component {
  render() {
    return (
      <h1 style={styles.title}>Your Online Shop</h1>
    )
  }
}

export default Title