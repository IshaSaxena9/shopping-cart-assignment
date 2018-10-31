import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pid: ''
    }
    this.addItem = this.addItem.bind(this);
  }

  addItem(event) {
    this.props.handleAdd(event.target.value);
  }

  render() {
    if (this.props.data !== '')
      return (
        <div>
          <header>
            <h1 className='productHeading'>Products</h1>
            <Link to='/cart' className='cart' >
              <button><i className="fa fa-shopping-cart"> Cart</i></button>
            </Link>
          </header>
          <div className='flex-container'>
            {this.props.data.map(element =>
              <div className='card'>
                <img src={element.image} alt='not found' className='image' />
                <div className='details'>
                  <span>{element.name}</span>
                  <span className='price'>Price: {element.unit_price}</span>
                </div>
                <br></br>
                <button value={element.id} onClick={this.addItem} className='addButton'>Add Item</button>
              </div>)}
          </div>
        </div>
      )
    return <div></div>
  }
}
