'use strict';

import React from 'react';
import Radium from 'radium';
import DetailInfo from './DetailInfo.jsx';
import Paddle from './Paddle.jsx';
import Screen from './Screen.jsx';
import ScreenInfo from './ScreenInfo.jsx';
import get from 'lodash.get';

import getPokemon from '../client/getPokemon';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {id : 0};
    this.arrowRight = this.arrowRight.bind(this);
    this.arrowLeft = this.arrowLeft.bind(this);
  }
  makeRequest(id) {
    return getPokemon(id)
      .then((data) => {
        this.setState({
          id,
          pokemon : get(data, 'body.pokemon')
        });
      }
    );
  }
  arrowRight() {
    this.makeRequest(this.state.id + 1);
  }
  arrowLeft() {
    if (this.state.id) {
      this.makeRequest(this.state.id - 1);
    }
  }
  render() {
    return (
      <div style={styles.background}>
        <Screen pokemon={this.state.pokemon} />
        <Paddle arrowRight={this.arrowRight} arrowLeft={this.arrowLeft} />
        <ScreenInfo pokemon={this.state.pokemon} />
        <DetailInfo pokemon={this.state.pokemon} />
      </div>
    );
  }
};

const styles = {
  background : {
    backgroundImage : 'url(pokedex.png)',
    backgroundRepeat : 'no-repeat',
    height : '600px',
    position : 'relative'
  }
};

export default new Radium(Pokedex);
