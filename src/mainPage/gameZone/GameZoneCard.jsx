import React from 'react'
import cl from './gameZoneCard.module.css'

function GameZoneCard({title, img}) {
  return (
    <div className={cl.card}>
        <h4>{title}</h4>
        <img src={img} alt="" />
    </div>
  )
}

export default GameZoneCard