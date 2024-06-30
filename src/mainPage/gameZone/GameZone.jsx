import React, { useEffect, useState } from 'react'
import items from '../../static/ITEMS'
import cl from './gameZone.module.css'
import VerticalCard from '../../card/VerticalCard'
import card from '../../card/verticalCard.module.css'
import GameZoneCard from './GameZoneCard'

import GK from '../../static/GK.png'
import GM from '../../static/GM.png'
import GMo from '../../static/GMo.png'
import GA from '../../static/GA.png'
import GL from '../../static/GL.png'
import GV from '../../static/GV.png'

const links = [
    {title: 'Keyboards', img:GK},
    {title: 'Mouses', img:GM},
    {title: 'Accessories', img:GA},
    {title: 'Gaming laptops', img:GL},
    {title: 'Video cards', img:GV},
    {title: 'Monitors', img:GMo},
]

function GameZone({compare, setCompare, liked, setLiked, cart, setCart}) {
    useEffect(()=>{
        document.querySelectorAll(`.${cl.cont} .${card.card}`).forEach(e=>e.classList.add(`${card.GEMCARD}`))
    }, [])
    const [max, setMax] = useState(5)

    window.addEventListener('resize', ()=>{
        if(window.innerWidth <= 1400 && window.innerWidth >500) setMax(4)
        if(window.innerWidth > 1400) {
            document.querySelectorAll(`.${cl.cont} .${card.card}`).forEach(e=>e.classList.add(`${card.GEMCARD}`))
            setMax(5)
        }
        if(window.innerWidth <= 500) setMax(2)
    })

    useEffect(()=>{
        if(window.innerWidth <=1400 && window.innerWidth >500) setMax(4)
        if(window.innerWidth > 1400) setMax(5)
        if(window.innerWidth <= 500) setMax(2)
      }, [])

      useEffect(()=>{
        console.log(max)
      }, [max])

  return (
    <section className={cl.cont}>

        <div>
            <div className={cl.gameTop}>
                <div></div>
                <h2>GAME ZONE</h2>
                <div></div>
            </div>
            <aside>
                {items.map((e,i)=>{
                    if(e.ID[0]=='7' && i<max) return <VerticalCard key={i+'g'} id={e.id} doCompare={()=>setCompare([...compare, e])} liked={liked} setLiked={setLiked} info={e} cart={cart} setCart={setCart}/>
                })}
            </aside>
        </div>

        <div className={cl.BG}></div>
        
    </section>
  )
}

export default GameZone