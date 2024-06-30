import React from 'react'
import { useNavigate } from 'react-router-dom'

function FooterColumn({title, links}) {
  const nav = useNavigate()
  return (
    <div>
        <h4>{title}</h4>
        {links.map((e,i)=><a key={i} onClick={()=>nav('/error')}>{e}</a>)}
    </div>
  )
}

export default FooterColumn