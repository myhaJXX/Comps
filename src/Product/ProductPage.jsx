import React, { useMemo, useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import cl from './productPage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import items from '../static/ITEMS';
import Info from './info/Info';
import ProductLinks from './ProductLinks';

import itemRevs from '../static/ITEMREVS';
import Parameters from './Parameters/Parameters';
import Reviews from './Reviews/Reviews';

function ProductPage({compare, setCompare, viewed, setViewed, liked, setLiked, cart, setCart}) {

    useEffect(()=>{
      window.scrollTo({top:0})
    }, [])

    const params = useParams()
    let info = items[params.id]

    useEffect(()=>{
      setViewed([...viewed, info])
    }, [])

    let [stars, setStars] = useState([0,0,0,0,0])

    const [link, setLink] = useState('Information')

    let [reviews, setReviews] = useState([...itemRevs[params.id]])
    let [len, setLen] = useState(itemRevs[info.id].length)

    useMemo(()=>{
      itemRevs[params.id] = reviews
      setLen(itemRevs[info.id].length)
    }, [reviews])

    let hrefs = [
      {title: 'Information', item:<Info compare={compare} setCompare={setCompare} info={info} setLink={setLink} reviews={reviews} setReviews={setReviews} liked={liked} setLiked={setLiked} key={'info'} cart={cart} setCart={setCart}/>},
      {title: 'Characteristics', item:<Parameters compare={compare} setCompare={setCompare} info={info} key={'params'} liked={liked} setLiked={setLiked} cart={cart} setCart={setCart}/>},
      {title: 'Reviews', item:<Reviews setReviews={setReviews} reviews={reviews} key={'reviews'}/>}
    ]

    const [STARS, setSTARS] = useState(0)
    useEffect(()=>{
      let STARS = 0
      reviews.forEach(e=>STARS+=e.stars)
      STARS = Math.round(STARS / reviews.length)
      setSTARS(STARS)
    }, [reviews])

  return (
    <main className={cl.cont}>

      <h2 style={{width: '100%'}}>{info.title}</h2>

      <div className={cl['stars-cont']}>
            {stars.map((e,i)=>{
                if(i<STARS) return <FontAwesomeIcon icon={faStar} color='#FFCD1B' key={i+'starsProduct'}/>
                return <FontAwesomeIcon icon={faStar} color='#c3c3c3' key={i+'starsProduct'}/>
            })}
            <h6 style={{paddingLeft: '10px'}}>Reviews: {len}</h6>
      </div>

      <ProductLinks link={link} setLink={setLink}/>

        {hrefs.map((e,i)=>{
          if(e.title == link) return e.item
        })}

    </main>
  )
}

export default ProductPage