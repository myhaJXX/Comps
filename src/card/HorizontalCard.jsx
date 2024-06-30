import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cl from './horizontalCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar, faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import { faHeart as faActiveHeart } from '@fortawesome/free-solid-svg-icons'
import itemRevs from '../static/ITEMREVS'

function HorizontalCard({params, doCompare, id, liked, setLiked, info, cart, setCart}) {
  const nav = useNavigate()
    const [inf, setInf] = useState([])
    useMemo(()=>{
        let arr = []
        for(let key in params){
            arr = [...arr, {title:key, info:params[`${key}`]}]
        }
        setInf([...arr])
    }, [liked])

    const [activeLike, setActiveLike] = useState(false)
    useEffect(()=>{
      let flag
      // console.log(activeLike)
      liked.forEach(e=>{
        if(e.id == id) flag=true
        console.log(e.id, id)
      })
      setActiveLike(flag)
    }, [liked, setLiked])

    const [STARS, setSTARS] = useState(0)
    useEffect(()=>{
      let STARS = 0
      itemRevs[id].forEach(e=>STARS+=e.stars)
      console.log(STARS/ itemRevs[id].length)
      STARS = Math.round(STARS / itemRevs[id].length)
      setSTARS(STARS)
    }, [])

  return (
    <div className={cl.card}>

      <img onClick={()=>nav(`/product/${id}`)} src={info.img} alt="" />
      <h4>{info.title}</h4>

      <h5>ID: {info.ID}</h5>

        <div className={cl.info}>
            <div>
                <p><FontAwesomeIcon icon={faStar} color='#FFCD1B'/> {STARS}</p>
                <p>Reviews: {itemRevs[id].length}</p>
            </div>

            <div>
                <FontAwesomeIcon className={cl.icon} icon={faScaleBalanced} color='#060F42' onClick={()=>doCompare()}/>
                <FontAwesomeIcon className={cl.icon} icon={!activeLike ? faHeart : faActiveHeart} color={!activeLike ? '#060F42' : '#E93232'} onClick={()=>{
                  setActiveLike(!activeLike)
                  if(!activeLike){
                    setLiked([...liked, info])
                  } else {
                    let arr = liked.filter(e=>e.id!=id)
                    setLiked(arr)
                  }
                }}/>
            </div>
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

        <div className={cl.params}>
            <h4>Parameters</h4>
            <div>
                {
                    inf.map((e,i)=><p key={i}>{e.title}: {e.info}</p>)
                }
            </div>
        </div>

    </div>
  )
}

export default HorizontalCard