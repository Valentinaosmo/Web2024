import React from 'react';
import PropTypes from 'prop-types'

export function Button  ({type ,text, counter }) {
  const clickCounter = () =>{
    counter(type)
  }
  return (
    <button onClick={clickCounter} type={type} className='button'>{text}</button>
  )
}
Button.propTypes = {
  text:PropTypes.string.isRequired,
  type:PropTypes.string.isRequired,
  counter:PropTypes.func.isRequired,
}

