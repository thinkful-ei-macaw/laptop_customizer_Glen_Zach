import React, { Component } from 'react';
import Header from './Components/Header';
import Features from './Components/Features';
import Cart from './Components/Cart';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes

import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
// const USCurrencyFormat = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD'
// });

//props in a component is coming from its parent
class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  //APP imports cart and passes it to cart

  render() {

    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Features features={this.props.features} selected={this.state.selected} onUpdateFeature={this.updateFeature} />
          <Cart selected={this.state.selected} />
        </main>
      </div>


    )

  }
}

export default App;
