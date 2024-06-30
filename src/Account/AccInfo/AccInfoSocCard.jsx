import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cl from './accInfo.module.css'
function AccInfoSocCard({icon, name}) {
  return (
    <div className={cl['soc-card']}>
        <FontAwesomeIcon icon={icon} size='2x' style={{gridRowStart: '1', gridRowEnd: '3', gridColumnStart:'1', gridColumnEnd:'2'}}/>
        <h5>{name}</h5>
        <p>Link to account</p>
    </div>
  )
}

export default AccInfoSocCard