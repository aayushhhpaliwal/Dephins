import React from 'react'
import "./card.css"
function Card(props) {
  return (
    <div className='Cards'>
    <div className='Card'>
        <img src={props.imgsrc} className="prImage"></img>
       <div className='titlePrice'>
        <p className='title'>{props.title}</p>
        <div className='price'>
        <div className='Price1'>{props.Price}</div>
        <div>{props.stp}</div>
        </div>
        </div>
        <div className='CityAdd'>
        <div className='Address'>{props.Add}</div>
       
        <div className='City'>{props.City}</div>
        </div>
        <div className='Contact'>{props.Contact}
      </div>
      
        <div className='bottom'></div>
        </div>
    </div>

  )
}

export default Card