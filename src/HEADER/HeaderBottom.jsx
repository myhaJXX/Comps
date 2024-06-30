import React, { useEffect, useState } from 'react'
import cl from './header.module.css'
import logo from '../static/Logo.png'
import { useNavigate } from 'react-router-dom'
import HeaderSearch from './HeaderSearch/HeaderSearch'


import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import HeaderIcon from './HeaderIcon/HeaderIcon'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import CartBox from '../CartBox/CartBox'

function HeaderBottom({filters, setFilters, compare, setCompare, liked, setAccPage, cart, setCart}) {
    const nav = useNavigate()
    const [activeCart, setActiveCart] = useState(false)
    useEffect(()=>{
      if(activeCart){
        window.scrollTo({top:0})
        document.querySelector('body').setAttribute('style', 'overflow:hidden')
      } else document.querySelector('body').setAttribute('style', 'overflow:auto')
    }, [activeCart])
  return (
    <div className={cl['h-bottom']}>
        <img onClick={()=>nav('/')} src={logo} alt="" />
        <button onClick={()=>{
          setFilters({...filters, type:''})
          nav('/catalog')
        }}>Catalog</button>
        <HeaderSearch cart={cart} setCart={setCart}/>
        <p>123 456 78 90</p>
        <hr />

        <div style={{display: 'flex', gap: '10px'}}>
          <HeaderIcon link={'/compare'} icon={faScaleBalanced} count={compare.length} clear={setCompare} setAccPage={setAccPage} accPage={4}/>
          <HeaderIcon link={'/account'} icon={faHeart} count={liked.length} setAccPage={setAccPage} accPage={1}/>
          <HeaderIcon link={''} icon={faCartShopping} count={cart.length} clear={setCart} setAccPage={setAccPage} accPage={4} activeCart={activeCart} setActiveCart={setActiveCart}/>
        </div>
        {activeCart ? <CartBox setActiveCart={setActiveCart} cart={cart} setCart={setCart}/> : ''}
    </div>
  )
}

export default HeaderBottom