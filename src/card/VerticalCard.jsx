import React, { useEffect, useState } from 'react'
import cl from './verticalCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar, faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import { faHeart as faActiveHeart } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import itemRevs from '../static/ITEMREVS'

function VerticalCard({doCompare, id, liked, setLiked, info, cart, setCart}) {
  const [activeLiked, setActiveLike] = useState(false)
  useEffect(()=>{
    let flag
    liked.forEach(e=>{
      if(e.id == id) flag=true
    })
    setActiveLike(flag)
  }, [liked])

  const [STARS, setSTARS] = useState(0)
  useEffect(()=>{
    let STARS = 0
    itemRevs[id].forEach(e=>STARS+=e.stars)
    // console.log(STARS/ itemRevs[id].length)
    STARS = Math.round(STARS / itemRevs[id].length)
    setSTARS(STARS)
  }, [])

  const nav = useNavigate()
  return (
    <div className={cl.card}>

      <div className={cl.buttons}>
        <FontAwesomeIcon className={cl.icon} icon={faScaleBalanced} color='#060F42' onClick={()=>doCompare()}/>
        <FontAwesomeIcon className={cl.icon} icon={activeLiked ? faActiveHeart : faHeart} color={!activeLiked ? '#060F42' : '#E93232'} onClick={()=>{
          setActiveLike(!activeLiked)
          if(!activeLiked){
            setLiked([...liked, info])
          } else {
            let arr = liked.filter((e)=>e.id!=id)
            setLiked(arr)
          }
        }}/>
      </div>

      <img src={info.img} alt="" onClick={()=>nav(`/product/${id}`)}/>
      <h4>{info.title}</h4>

      <div className={cl.info}>
        <p><FontAwesomeIcon icon={faStar} color='#FFCD1B'/> {STARS}</p>
        <p>Reviews: {itemRevs[id].length}</p>
      </div>


        {
          info.discount ? (
            <div className={cl['price-box']}>
              <h4><strike>$ {info.price%1==0?`${info.price}.00` : info.price}</strike></h4>
              <h4 className={cl.priceDiscount}>$ {(info.price - info.price*info.discount/100)%1==0?`${info.price - info.price*info.discount/100}.00` : info.price - info.price*info.discount/100}</h4>
              <button onClick={()=>setCart([...cart, {...info, countItems:1}])}>Buy</button>
            </div>
          ) : (
            <div className={cl['price-box']}>
              <h4 className={cl.price}>$ {info.price %1==0?`${info.price}.00`:info.price}</h4>
              <button onClick={()=>setCart([...cart, {...info, countItems:1}])}>Buy</button>
            </div>
          )
        }


    </div>
  )
}

export default VerticalCard