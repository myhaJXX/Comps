import React from 'react'
import cl from './headerCard.module.css'
import { useNavigate } from 'react-router-dom'

function HeaderCard({info,id, setAct, cart, setCart}) {
    const nav = useNavigate()
  return (
    <div className={cl.card}>
        <img src={info.img} alt=""  onClick={()=>{
          setAct(false)
          nav(`/product/${id}`)
        }}/>
        <h5>ID: {info.ID}</h5>
        <h4>{info.title}</h4>
        <button onClick={()=>setCart([...cart, info])}>Buy</button>
    </div>
  )
}

export default HeaderCard