import React, { Component } from 'react'
import Button from '../Others/Button'
const styles = {
    product:{
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0,0,0,0.3)', //izq. derecha,up abajo , blur, color
        width: '30%',
        padding:'10px 15px',
        margin: '5px',
        borderRadius:'5px',
        backgroundColor: '#d9d9d9'
    },
    image:{
        
        
    }
}

export class Product extends Component {
  render() {
    const {product,add} = this.props
    const {name,price,img} = this.props.product
    return (
      <div style={styles.product}>
          <img className='image' src={img} alt={name} />
          <h3>{name}</h3>
          <p>{price}</p>
          <Button 
            onClick={()=>add(product)}
          >Add</Button>
      </div>
    )
  }
}

export default Product