import React from 'react'
import HeaderBottom from './HeaderBottom'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import logo from '../static/LogoFooter.png'
import cl from './header.module.css'
import { useNavigate } from 'react-router-dom'

function HeaderHamburger({filters, setFilters, compare, setCompare, liked, setAccPage, cart, setCart, active, setActive, auth, setAuth}) {
    const nav = useNavigate()

    useEffect(()=>{
      if(active > 0) {
        document.querySelector('body').setAttribute('style', 'overflow: hidden')
      } else document.querySelector('body').setAttribute('style', 'overflow: auto')
    }, [active])
  return (
    <div className={cl.hamburgerBox}>
        <div>
            <img src={logo} alt=""  onClick={()=>{
                // setActive(false)
                nav('/')
            }}/>
            <FontAwesomeIcon icon={faUser} onClick={()=>{
            if(auth.value){ 
                setAccPage(4)
                nav('/account')
            } else {
                setActive(1)
            }
            }}/>
        </div>
        <div className={cl.hamblinks}>
          <a href="" onClick={(e)=>{
            e.preventDefault()
            nav('/error')
          }}>Stock</a>
          <a href="" onClick={(e)=>{
            e.preventDefault()
            nav('/error')
          }}>Credit</a>
          <a href="" onClick={(e)=>{
            e.preventDefault()
            nav('/error')
          }}>Payment and delivery</a>
          <a href="" onClick={(e)=>{
            e.preventDefault()
            nav('/error')
          }}>Help</a>
          <a href="" onClick={(e)=>{
            e.preventDefault()
            nav('/error')
          }}>Purchase of used</a>
          <a href="" onClick={(e)=>{
            e.preventDefault()
            nav('/error')
          }}>Contacts</a>
        </div>
        <HeaderBottom filters={filters} setFilters={setFilters} compare={compare} setCompare={setCompare} liked={liked} setAccPage={setAccPage} cart={cart} setCart={setCart}/>
    </div>
  )
}

export default HeaderHamburger