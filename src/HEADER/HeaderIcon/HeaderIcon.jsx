import React, { useEffect } from 'react'
import cl from './headerIcon.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

function HeaderIcon({link, icon, count, clear, setAccPage, accPage, activeCart, setActiveCart}) {
    const nav = useNavigate()
  return (
  <div style={{display: 'grid', alignItems: 'center'}}>
    <div onClick={()=>{
          if(activeCart === false) setActiveCart(true)
      // setAccPage ? (setAccPage(4), nav(link)) : nav(link)
      setAccPage(accPage)
      if(link) nav(link)
    }} className={cl['header-icon-cont']}>
      <FontAwesomeIcon icon={icon} className={cl.icon}/>
      <div className={cl.count}>{count}</div>
    </div>
    {clear ? <p className={cl.clear} onClick={()=>clear([])}>Clear</p> : ""}
  </div>
  )
}

export default HeaderIcon