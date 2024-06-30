import React, { useEffect, useState } from 'react'
import cl from '../header.module.css'
import items from '../../static/ITEMS'
import HeaderCard from './HeaderCard'

function HeaderSearchBox({value, active, cart, setCart}) {

  const [act, setAct] = useState(false)

  useEffect(()=>{
    if(active){
      setAct(true)
    } else {
      setTimeout(()=>{
        setAct(false)
      },100)
    }
  }, [active])

  const [newItems, setnewItems] = useState([])

  useEffect(()=>{
    setnewItems([...items].filter(e=>e.title.toLowerCase().includes(value.toLowerCase())))
  }, [value])

  return (
    <div className={cl['search-box']}>
      {act ? newItems.map((e,i)=><HeaderCard key={i} id={e.id} info={e} setAct={setAct} cart={cart} setCart={setCart}/>) : ''}
    </div>
  )
}

export default HeaderSearchBox