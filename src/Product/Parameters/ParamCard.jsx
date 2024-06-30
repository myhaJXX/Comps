import React from 'react'
import { useState, useEffect } from 'react'
import cl from './parameters.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faActiveHeart } from '@fortawesome/free-solid-svg-icons'

function ParamCard({title, img, price, discount, count, compare, setCompare, info, liked, setLiked, cart, setCart}) {

    const [activeLike, setActiveLike] = useState(false)

    useEffect(()=>{
        liked.forEach(e=>{
            if(e.id == info.id) setActiveLike(true)
        })
    }, [liked])

    useEffect(()=>{
        if(activeLike){
            setLiked([...liked, info])
        } else {
            let arr = [...liked].filter(e=>e.id!=info.id)
            setLiked([...arr])
        }
    }, [activeLike])

    let total = price - price*discount/100
  return (
    <article className={cl.card}>

        <div style={{gap: '20px'}}>
            <img src={img} alt="" />
            <h4>{title}</h4>
        </div>

        <div style={{justifyContent: 'space-between'}}>

            {discount ? 
            <div className={cl['price-cont']}>
                <strike>$ {price%1==0 ? `${price}.00` : price}</strike>
                <p>$ {total%1 == 0 ?  `${total}.00` : total}</p>
            </div>
            :
            <div className={cl['price-cont']}><p style={{color: '#000'}}>$ {price%1 == 0 ? price : `${price}.00`}</p></div>
            }

            <div className={cl.hasCont}>
                {
                count ? 
                <div> 
                    <FontAwesomeIcon icon={faCheckCircle} color='#06A56C'/> 
                    <p>In stock</p> 
                </div> 
                : 
                <div>
                    <div className={cl.NB}></div>
                    <p>Not avaible</p>
                </div>
                }
            </div>

            <div style={{display: 'flex', gap: '5px'}}>
                <FontAwesomeIcon icon={faScaleBalanced} className={cl.icon} color='#01579B' onClick={()=>setCompare([...compare, info])}/>
                <FontAwesomeIcon icon={activeLike ? faActiveHeart : faHeart} color={activeLike ? '#E93232' : '#01579B'} className={cl.icon} onClick={()=>setActiveLike(!activeLike)}/>
            </div>

        </div>

        <button onClick={()=>setCart([...cart, {...info, countItems:1}])}>Buy Now</button>
        <button onClick={()=>setCart([...cart, {...info, countItems:1}])}>Buy in Credit</button>

    </article>
  )
}

export default ParamCard