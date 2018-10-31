import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Products from './Products';
import Cart from './Cart';

export default class AppRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={(props) => <Products data={this.props.data} handleAdd={this.props.handleAdd} />} />
        <Route path='/cart' render={(props) => <Cart data={this.props.data} cart={this.props.cart} />} />
      </Switch>
    )
  }
}