import React, { useEffect, useState } from 'react'
import cl from './featured.module.css'

import items from '../../static/ITEMS'

import VerticalCard from '../../card/VerticalCard'

function Featured({compare, setCompare, liked, setLiked, cart, setCart}) {
  const [max, setMax] = useState(5)
  window.addEventListener('resize', ()=>{
    if(window.innerWidth <=1400) setMax(4)
    if(window.innerWidth > 1400) setMax(5)
  })
  useEffect(()=>{
    if(window.innerWidth <=1400) setMax(4)
    if(window.innerWidth > 1400) setMax(5)
  }, [])
  return (
    <section className={cl.cont}>
        <h2>Featured</h2>

        <div className={cl.box}>
            {items.map((e,i)=>{
                if(e.ID[0]=='7' && i<max) return <VerticalCard key={i+'f'} id={e.id} doCompare={()=>setCompare([...compare, e])} info={e} liked={liked} setLiked={setLiked} cart={cart} setCart={setCart}/>
            })}
        </div>

    </section>
  )
}

export default Featured