'use strict';

import React, { PropTypes } from 'react';
import Radium from 'radium';

const styles = {
  rightArrow : {
    height : '31px',
    width : '32px',
    backgroundColor : 'red',
    position : 'absolute',
    top : '423px',
    left : '299px',
    opacity : 0,
    cursor : 'pointer'
  },
  leftArrow : {
    height : '31px',
    width : '35px',
    backgroundColor : 'blue',
    position : 'absolute',
    top : '423px',
    left : '240px',
    opacity : 0,
    cursor : 'pointer'
  }
};


function Paddle(props) {
  return (
    <div>
      <button className="Paddle-right" style={styles.rightArrow} onClick={props.arrowRight} />
      <button className="Paddle-left" style={styles.leftArrow} onClick={props.arrowLeft} />
    </div>
  );
}

Paddle.propTypes = {
  arrowRight : PropTypes.func,
  arrowLeft : PropTypes.func
};

export default new Radium(Paddle);
