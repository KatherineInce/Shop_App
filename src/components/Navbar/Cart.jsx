import React, { Component } from 'react'
import { FaCartPlus } from "react-icons/fa";
import Bubble from './Bubble'
import DetailsCart from './DetailsCart'

const styles = {
    cart:{
        
        backgroundColor: '#fff',
        border: 'none',
        borderRadius: '10px',
        boxShadow: '0 4px 4px rgb(0,0,0,0.5)'
    },
    icon:{
        color: '#d65cad',
        fontSize: '40px'
    },
    bubble:{
        position: 'relative',
        left:12,
        bottom:20
    }
}

export class Cart extends Component {
    state = {
        activeCart: false
    }
  render() {
    const {cart} = this.props
    const cantidad = cart.reduce((acc,el)=> acc+el.cantidad,0)
    return (
    <div>
        <span style={styles.bubble}>
        {cantidad != 0 &&
            <Bubble value={cantidad}></Bubble>
        }
        </span>
        <button style={styles.cart} onClick={()=> cart.length > 0 && this.setState({activeCart: !this.state.activeCart})}><FaCartPlus style={styles.icon}/></button>
        {this.state.activeCart  && 
            <DetailsCart cart={cart}/>
        }
    </div>
    )
  }
}

export default Cart