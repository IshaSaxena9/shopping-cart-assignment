import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

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
          <h1 className='productHeading'>Products</h1>
          <Link to='/cart'>
            <button className='cart'>Cart</button>
          </Link>
          <div className='flex-container'>
            {this.props.data.map(element =>
              <div className='card'>
                <span>{element.name}</span>
                <img src={element.image} />
                <span>{element.unit_price}</span>
                <br></br>
                <button value={element.id} onClick={this.addItem} className='addButton'>Add Item</button>
              </div>)}
          </div>
        </div>
      )
    return <div></div>
  }
}
