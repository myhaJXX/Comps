import React from 'react'
import cl from './compareCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function CompareCard({info, deleteCard, index}) {
  return (
    <div className={cl.card}>
        <FontAwesomeIcon icon={faXmark} className={cl.delete} onClick={()=>deleteCard(index)}/>
        <img src={info.img} alt="" />
        <h4>{info.title}</h4>
        <div>
            {info.discount ? <p style={{color:"#E93232"}}>$ {info.price - info.price*info.discount/100}{info.price%1==0? '.00' : ''}</p> : <p>$ {info.price}{info.price%1==0? '.00' : ''}</p>}
        </div>
    </div>
  )
}

export default CompareCard