import React, { useEffect, useState } from 'react'
import cl from '../header.module.css'
import HeaderSearchBox from './HeaderSearchBox'

function HeaderSearch({position, cart, setCart}) {
  
  const [title, setTitle] = useState('')
  const [active, setActive] = useState(false)
  const [style, setStyle] = useState({})
  useEffect(()=>{
    if(position){
      let style = {
        width: '90%',
        display: 'grid'
      }

      setStyle({...style})
    }
  }, [])

  return (
    <div className={cl['search-cont']} style={{...style}}>
      <input type="text" placeholder='Enter the title' value={title} onInput={(e)=>setTitle(e.target.value)} onFocus={()=>setActive(true)} onBlur={()=>setActive(false)} />
      <HeaderSearchBox value={title} active={active} cart={cart} setCart={setCart}/>
    </div>
  )
}

export default HeaderSearch