import React, { Component } from 'react'
import Products from './components/Products/Products'
import Layout from './components/Others/Layout'
import Title from './components/Others/Title'
import Navbar from './components/Navbar/Navbar'

import Tomate from './productos/tomate.jpg'
import Arveja from './productos/arbejas.jpg'
import Lechuga from './productos/lechuga.jpg'
import Pollo from './productos/pollo.jpg'
import Carne from './productos/carne.jpg'
import Queso from './productos/queso.jpg'


class App extends Component {
  state = {
    products:[
      {name:'Tomato', price:1500, img:`${Tomate}`},
      {name:'Beans', price:2500, img:`${Arveja}`},
      {name:'Lettuce', price:500, img:`${Lechuga}`},
      {name:'Chicken', price:500, img:`${Pollo}`},
      {name:'Meat', price:500, img:`${Carne}`},
      {name:'Cheese', price:500, img:`${Queso}`}
    ],
    cart:[]
  }
  add = (product) =>{
    const {cart} = this.state
    if(cart.find(x=> x.name === product.name))
    {
      const newCart = cart.map(item=>
        (item.name === product.name)
        ?({
          ...item,
          cantidad: item.cantidad + 1
        })
        
        : item)
      return this.setState({cart:newCart})
    }
      
  
    return this.setState({
      cart:[
        ...this.state.cart,
        {
        ...product,
        cantidad:1
        }
      ]
    })
  }
  render() {
    return (
      <div>
        <Navbar cart={this.state.cart}></Navbar>
        <Layout>
          <Title/>
          <Products
                add={this.add}
                products={this.state.products}
              />
        </Layout>
      </div>
    )
  }
}

export default App