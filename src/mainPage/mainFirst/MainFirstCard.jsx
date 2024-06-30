import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cl from './mainFirst.module.css'

import { useNavigate } from 'react-router-dom'

function MainFirstCard({title, icon, setFilters, update, filters}) {
  const nav = useNavigate()
  return (
    <div className={cl.card} onClick={()=>{
      setFilters({...filters, type:title})
      nav('/catalog')
    }}>
        <FontAwesomeIcon icon={icon} color='#060F42'/>
        <h4>{title} {update ? <sup>NEW</sup> : ''}</h4>
    </div>
  )
}

export default MainFirstCard