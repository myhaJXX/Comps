import React, { useMemo } from 'react'
import { useEffect } from 'react'
import cl from './productPage.module.css'

function ProductLinks({setLink, link}) {

  useEffect(()=>{
    document.querySelectorAll(`.${cl.unActiveLink}`).forEach(e=>{
        if(e.textContent == link){
            e.classList.add(`${cl.activeLink}`)
        } else e.classList.remove(`${cl.activeLink}`)
    })
  }, [link])

    const links = ['Information', 'Characteristics', 'Reviews']
  return (
    <nav className={cl.links}>
        {links.map((e,i)=>{
            return <a className={cl.unActiveLink} href="" key={i} onClick={(e)=>{
                        e.preventDefault()
                        setLink(e.currentTarget.textContent)
                    }}>{e}</a>
        })}
    </nav>
  )
}

export default ProductLinks