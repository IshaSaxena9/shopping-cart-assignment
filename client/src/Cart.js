import React from 'react';
import './App.css';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0.0,
      tax: 0.0
    }
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  calculateTotal() {
    let totalPrice = 0.0;
    this.props.cart.forEach(element =>
      totalPrice += parseFloat(element.unit_price)
    )
    this.setState({
      total: totalPrice.toFixed(2),
      tax: (12.5 * totalPrice) / 100.0
    })
  }

  componentDidMount() {
    this.calculateTotal();
  }

  render() {
    if (this.props.cart.length > 0) {
      return (
        <div className='fullCart'>
          <h2 className='heading'>Cart</h2>
          <h3 className='heading'>Products</h3>
          {this.props.cart.map(element =>
            <div className='grid-container'>
              <span></span>
              <span className='name'>{element.name}</span>
              <span className='price'>{element.unit_price}</span>
              <span></span>
            </div>
          )}
          <br></br>
          <div>Total price: {this.state.total} </div>
          <div>Tax: {this.state.tax} </div>
        </div>
      )
    }

    return (
      <div className='emptyCart'>
        <h2 className='heading'>Cart</h2>
        Cart is empty
      </div>
    )
  }
}