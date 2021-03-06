import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '',
      productID: '',
      cart: [],
      total: 0.0,
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    this.callApi()
      .then(res => {
        console.log(res, "Response");
        this.setState({ response: res.express.map(data => data) })
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api');
    const body = await response.json();
    return body;
  }

  handleAdd(id) {
    fetch(`/api/${id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ response: res.express.map(data => data) })
        this.state.cart[parseInt(id) - 1] = this.state.response[parseInt(id) - 1];
        return 1;
      })
      .catch(err => console.log(err));
    // this.setState({
    //   cart: [...this.state.cart, this.state.response[parseInt(id)-1] ]
    // })
  }

  render() {
    return (
      <Router>
        <AppRoutes data={this.state.response} cart={this.state.cart} handleAdd={this.handleAdd} />
      </Router>
    );
  }
}

export default App;
