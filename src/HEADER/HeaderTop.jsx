import React, { useEffect, useState } from 'react'
import cl from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Login from './RegBars/Login'
import Register from './RegBars/Register'

function HeaderTop({auth, setAuth, setAccPage, active, setActive}) {
    const links = [
        "Stock", "Credit", "Payment and delivery", "Help", "Purchase of used", "Contacts"
    ]
    const nav = useNavigate()

    useEffect(()=>{
      if(active > 0) {
        document.querySelector('body').setAttribute('style', 'overflow: hidden')
      } else document.querySelector('body').setAttribute('style', 'overflow: auto')
    }, [active])

  return (
    <div className={cl['h-top']}>
        <nav>
            {links.map((e,i)=><a href='#' key={i} onClick={()=>nav('/error')}>{e}</a>)}
        </nav>
        <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
          <h4 style={{color: '#fff'}}>{auth.name}</h4>
          <FontAwesomeIcon icon={faUser} color='#fff' style={{cursor: 'pointer'}} onClick={()=>{
            if(auth.value){
              setAccPage(4)
              nav('/account')
            } else {
              setActive(1)
            }
          }}/>
        </div>

        {active == 1 ?  <Login setActive={setActive} setAuth={setAuth} auth={auth}/> : (
          active == 2 ? <Register setActive={setActive} setAuth={setAuth} auth={auth}/> : ''
        )}

    </div>
  )
}

export default HeaderTop