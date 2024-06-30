import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'
import Login from './RegBars/Login'
import Register from './RegBars/Register'
import cl from './header.module.css'
import { useState, useEffect } from 'react'
import HeaderHamburger from './HeaderHamburger'


function Header({filters, setFilters, compare, setCompare, auth, setAuth, liked, setAccPage, cart, setCart}) {
  const [active, setActive] = useState(0)
  const [hambA, setHambA] = useState(false)

  const [size, setSize] = useState(window.innerWidth)
  window.addEventListener('resize', ()=>setSize(window.innerWidth))

  useEffect(()=>{
    if(hambA){
      document.querySelector(`.${cl.hamburger}`).classList.add(`${cl.hamburgerActive}`)
      document.querySelector(`.${cl.hamburgerBox}`).setAttribute('style', 'height: 200px;')
      setTimeout(()=>{
        document.querySelector(`.${cl.hamburgerBox}`).style.overflow = 'visible';
      }, 400)
    } else {
      document.querySelector(`.${cl.hamburger}`).classList.remove(`${cl.hamburgerActive}`)
      document.querySelector(`.${cl.hamburgerBox}`).setAttribute('style', 'height: 0px;')
      setTimeout(()=>{
        document.querySelector(`.${cl.hamburgerBox}`).style.overflow = 'hidden';
      }, 400)
    }
  }, [hambA])
  return (
    <header>

        <HeaderTop auth={auth} setAuth={setAuth} setAccPage={setAccPage} active={active} setActive={setActive}/>
        {
          size > 800 ? 
          <HeaderBottom filters={filters} setFilters={setFilters} compare={compare} setCompare={setCompare} liked={liked} setAccPage={setAccPage} cart={cart} setCart={setCart}/>
          :
          ''
        }
        
        <div className={cl.hamburger} onClick={()=>setHambA(!hambA)}>
          <div></div>
          <div></div>
          <div></div>
        </div>

      <HeaderHamburger  
      auth={auth} setAuth={setAuth} setAccPage={setAccPage} active={active} setActive={setActive}
      filters={filters} setFilters={setFilters} compare={compare} setCompare={setCompare} liked={liked} cart={cart} setCart={setCart}
      />

      {active == 1 ?  <Login setActive={setActive} setAuth={setAuth} auth={auth}/> : (
          active == 2 ? <Register setActive={setActive} setAuth={setAuth} auth={auth}/> : ''
        )}

    </header>
  )
}

export default Header