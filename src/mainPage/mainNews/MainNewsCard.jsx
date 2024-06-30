import React from 'react'
import cl from './mainNews.module.css'

function MainNewsCard({info}) {
  return (
    <div className={cl.card}>
        <img src={info.img} alt="" />
        <h4>{info.title}</h4>
        <p>{info.desc}</p>
        <div>
            <h6>{info.date}</h6>
            <a href="">Read more</a>
        </div>
    </div>
  )
}

export default MainNewsCard