import React from 'react'
import "./card.css"
function Card(props) {
  return (

    <div className='Card'>
        <img src={props.imgsrc} className="prImage"></img>
        <p>{props.title}</p>
        <div className='price'>
        <p>{props.stp}</p>
        <p>{props.price}</p>
        </div>
        <p>{props.Add}</p>
        <p>{props.Contact}</p>
    </div>

  )
}

export default Card