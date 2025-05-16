import React from 'react'
import './card.css'

interface CardTypes {
    title : string,value : number
}
const Card :React.FC<CardTypes> = ({title,value})  => {
  return (
    <div className='card-main'>
        <div className='card-title'>{title}</div>
        <div className='card-value'>{value}</div>
    </div>
  )
}

export default Card