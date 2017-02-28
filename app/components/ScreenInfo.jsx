'use strict';

import React, { PropTypes } from 'react';
import Radium from 'radium';
import get from 'lodash.get';

const styles = {
  info : {
    position : 'absolute',
    top : '213px',
    left : '446px',
    width : '244px',
    textAlign : 'center',
    color : 'whitesmoke',
    fontWeight : 'normal',
    fontSize : '1.1em',
    textTransform : 'uppercase'
  }
};

function ScreenInfo(props) {
  return (
    <div style={styles.info}>
      {get(props, 'pokemon.name')}
    </div>
  );
}

ScreenInfo.propTypes = {
  pokemon : PropTypes.shape({
    name : PropTypes.string
  })
};

export default new Radium(ScreenInfo);
