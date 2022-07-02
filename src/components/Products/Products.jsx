import React, { Component } from 'react'
import Product from './Product'

class Products extends Component {
  render() {
    const {products,add} = this.props
    return (
      <div className='row'>
        {
            products.map(product => <Product
                className='col-4'
                add={add}
                product={product}
                key={product.name}
            />)
        }
      </div>
    )
  }
}

export default Products