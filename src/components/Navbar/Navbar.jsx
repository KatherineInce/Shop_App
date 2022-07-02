import React, { Component } from 'react'
import Logo from './Logo'
import Cart from './Cart'

const styles = {
    navbar: {
        display:'flex',
        backgroundColor: '#d65cad',
        color: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        height: '80px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)',
        marginBottom: '30px'
    }
}

export class Navbar extends Component {
  render() {
    const {cart} = this.props
    return (
      <nav style={styles.navbar}>
        <Logo/>
        <Cart cart={cart}/>
      </nav>
    )
  }
}

export default Navbar