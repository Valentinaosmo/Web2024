import React from "react";

export function Card (props) {
    console.log(props);
  const { img,about, text, price } = props
  return (
    <div id='products'>
      <img src={img} id='productimg' />
      <h3>{text}</h3>
      <p>{about}</p>
      <p>{price}</p>
    </div>
  )
}