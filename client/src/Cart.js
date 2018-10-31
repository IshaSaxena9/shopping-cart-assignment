import React from 'react';
import './App.css';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0.0,
      tax: 0.0,
      grandTotal: 0.0
    }
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  calculateTotal() {
    let totalPrice = 0.0;
    this.props.cart.forEach(element =>
      totalPrice += parseFloat(element.unit_price) * parseInt(element.quantity)
    )
    let salesTax = (12.5 * totalPrice) / 100.0;
    this.setState({
      total: totalPrice.toFixed(2),
      tax: salesTax.toFixed(2),
      grandTotal: (totalPrice + salesTax).toFixed(2)
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
          <div className='container'>
            {this.props.cart.map(element =>
              <div className='grid-container'>
                <span>{element.name}</span>
                <span>{element.unit_price}</span>
                <span>X</span>
                <span>{element.quantity}</span>
                <span>={(element.unit_price * element.quantity).toFixed(2)}</span>
              </div>
            )}
          </div>
          <br></br>
          <div className='amount'>
            <div>Total price: {this.state.total}</div><br></br>
            <div>+ Tax: {this.state.tax} </div><br></br>
            <div>Grand Total: {this.state.grandTotal}</div><br></br>
          </div>
        </div>
      )
    }

    return (
      <div className='emptyCart'>
        <h2 className='heading'>Cart</h2>
        <div className='placeholder'>Cart is empty</div>
      </div>
    )
  }
}