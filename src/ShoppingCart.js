import React, { Component } from 'react';
import Item from './Item.js';


class ShoppingCart extends Component {
  constructor(props){
    super()
    this.state={
      items:[{
        name: "Gaiam Kids Yoga Headband - Pink/Blue",
        image: "https://scene7-secure.targetimg1.com/is/image/Target/39598742?wid=90&hei=90",
        price: 9.38,
        amount: 0,
        wrap: false
      },{
        name: "Hamburger Helper",
        image: "https://scene7-secure.targetimg1.com/is/image/Target/12953828?wid=90&hei=90",
        price: 11.52,
        amount: 0,
        wrap: false
      }],
      subtotal: 0,
      taxPercent: .05,
      tax: 0,
      delivery: 0,
      numberItems: 0,
      total:0
    }
  }
  addToCart(x){
    console.log(`------${x}`)
    this.setState({
      numberItems: this.state.numberItems + 1,
      subtotal: this.state.subtotal + x,
      tax: this.state.subtotal * this.state.taxPercent,
      total: this.state.subtotal + this.state.tax
    })
  }
  subtractFromCart(x){
    this.setState({
      numberItems: this.state.numberItems - 1,
      subtotal: this.state.subtotal - x,
      tax: this.state.subtotal * this.state.taxPercent,
      total: this.state.subtotal + this.state.tax

    })
  }
  render(){
    let items = this.state.items.map((item,index)=>
      (<Item body={item} key={index} addItem={(x)=>this.addToCart(x)} subtractItem={(x)=>this.subtractFromCart(x)} />)
    )
    let itemTotal = this.state.items.reduce((sum,item)=>(
        sum+item.amount
      )
    )
    return (
      <div className='cart'>
        <div className='items'>
          <h2>cart total: <span>{this.state.numberItems}</span></h2>
          <div className='half right'>
            <a href='#' className='checkout'>im ready to checkout</a>
          </div>
          {items}
        </div>
        <div className='summary'>
          <h3>order summary</h3>
          <div>
            <strong>subtotal</strong>
            <small> ({this.state.numberItems} items)</small>
            <strong className='right'>${this.state.subtotal.toFixed(2)}</strong>
          </div>
          <div>
            <strong>delivery</strong>
            <strong className='right red'>free</strong>
          </div>
          <div>
            <strong>estimated tax</strong>
            <strong className='right'>${this.state.tax.toFixed(2)}</strong>
          </div>
          <hr/>
          <h3>total <span className='right'>${this.state.total.toFixed(2)}</span></h3>
          <hr/>
          <small>cart number: 1016396673255</small>
        </div>
      </div>
    )
  }
}

export default ShoppingCart;
