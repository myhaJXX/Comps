import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cl from './mainFirst.module.css'

function MainIcon({icon,title}) {
  return (
    <div className={cl['card-info']}>
        <FontAwesomeIcon icon={icon} size='3x' color='#060F42'/>
        <h4 style={{textAlign:'center', color:'#060F42'}}>{title}</h4>
    </div>
  )
}

export default MainIcon