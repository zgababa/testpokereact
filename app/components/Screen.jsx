'use strict';

import React, { PropTypes } from 'react';
import Radium from 'radium';
import get from 'lodash.get';

class Screen extends React.Component {
  render() {
    return (
      <div>
        <img role="presentation" style={styles.image} src={get(this.props, 'pokemon.img')} />
      </div>
    );
  }
}

const styles = {
  image : {
    position : 'absolute',
    top : '200px',
    left : '144px'
  }
};

Screen.propTypes = {
  pokemon : PropTypes.object
};

export default new Radium(Screen);
