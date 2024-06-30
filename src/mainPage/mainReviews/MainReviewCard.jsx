import React from 'react'
import cl from './mainRev.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
function MainReviewCard({name,desc,stars,date}) {
    let arrFill = new Array(stars).fill(0)
    let arrVoid = new Array(5-stars).fill(0)
  return (
    <div className={cl.card}>
        <FontAwesomeIcon icon={faUser} color='#999' size='2x' className={cl.icon}/>
        <h4>{name}</h4>
        <p>{desc}</p>
        <h5>{date}</h5>
        <div style={{display:'flex', gap: '1px', alignItems:'center'}}>
            {arrFill.map((e,i)=><FontAwesomeIcon icon={faStar} color='#FFCD1B' key={i}/>)}
            {arrVoid.map((e,i)=><FontAwesomeIcon icon={faStar} color='#e5e5e5' key={i}/>)}
        </div>
    </div>
  )
}

export default MainReviewCard