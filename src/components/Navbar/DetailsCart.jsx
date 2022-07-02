import React, { Component } from 'react'

const styles = {
    details: {
        backgroundColor: '#fff',
        color:'#000000',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        marginRight: 20,
        right: 0
    },
    ul:{
        margin: 0,
        padding: 0
    },
    product:{
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa'
    }

}

export class DetailsCart extends Component {
  render() {
    const {cart} = this.props
    return (
      <div style={styles.details}>
        <ul style={styles.ul}>
            {cart.map(
                item => 
                <li key={item.name} style={styles.product}>
                   <img src={item.img} alt={item.name} width='50' height='32'/> 
                   {item.name}
                   <span>{item.cantidad}</span>
                </li>
            )}
            
        </ul>
      </div>
    )
  }
}

export default DetailsCart