'use strict';

import React, { PropTypes } from 'react';
import Radium from 'radium';
import get from 'lodash.get';

const styles = {
  idPokemon : {
    position : 'absolute',
    top : '467px',
    left : '621px',
    color : 'whitesmoke',
    fontWeight : 'normal'
  }
};

function ScreenInfo(props) {
  return (
    <div style={styles.idPokemon}>
      {get(props, 'pokemon.orderFormatted')}
    </div>
  );
}

ScreenInfo.propTypes = {
  orderFormatted : PropTypes.string
};

export default new Radium(ScreenInfo);
