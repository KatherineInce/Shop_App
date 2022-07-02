import React, { Component } from 'react'

const styles = {
    logo: {
        fontWeight: '700',
        fontSize: '2rem',

    }
}

export class Logo extends Component {
  render() {
    return (
      <div style={styles.logo}>Kat Shop</div>
    )
  }
}

export default Logo