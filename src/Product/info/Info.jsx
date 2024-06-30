import React, { useEffect } from 'react'
import ProductSlider from './ProductSlider';
import { useState } from 'react';

import cl from './info.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faActiveHeart } from '@fortawesome/free-solid-svg-icons';
import ProductPrice from './ProductPrice';
import ProductDel from './information/ProductDel';
import ProductChars from './information/ProductChars';
import ProductPayment from './information/ProductPayment';
import Assurance from './information/Assurance';
import ProductDescription from './information/ProductDescription';
import ProductRevs from './information/ProductRevs';
import CreateComment from '../CreateComment/CreateComment';
import itemRevs from '../../static/ITEMREVS';

function Info({info, compare, setCompare, setLink, reviews, setReviews, liked, setLiked, cart, setCart}) {
    const [createComment, setCreateComment] = useState(false)

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
            let arr = liked.filter(e=>e.id!=info.id)
            setLiked([...arr])
        }
    }, [activeLike])

    useEffect(()=>{
        window.scrollTo({top:0})
        if(createComment){
            document.querySelector('body').setAttribute('style', 'overflow: hidden;')
        } else {
            document.querySelector('body').setAttribute('style', 'overflow: auto;')
        }
    }, [createComment])

  return (
    <section className={cl['info-box']}>

        <ProductSlider img={info.img}/>

        <div className={cl.topButtons}>
            <h4>Lorem ipsum dolor sit amet</h4>
            {info.count ? 
            <div className={cl.avaible}>
                <FontAwesomeIcon icon={faCheckCircle} color='#06A56C'/>
                <h5 style={{color: '#06A56C'}}>In stock</h5>
            </div> 
            : 
            <div className={cl.avaible}>
                <div className={cl.NA}></div>
                <h5 style={{color: '#c4c4c4'}}>Not available</h5>
            </div>
            }
            <div>
                <FontAwesomeIcon icon={faScaleBalanced} className={cl.topIcon} color='#060F42' onClick={()=>{setCompare([...compare, info])}}/>
                <FontAwesomeIcon icon={activeLike ? faActiveHeart : faHeart} className={cl.topIcon} color={activeLike ? '#E93232' : '#060F42'} onClick={()=>{
                    setActiveLike(!activeLike)
                }}/>
            </div>
        </div>

        <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </h5>

        <ProductPrice price={info.price} discount={info.discount} cart={cart} setCart={setCart} info={info}/>
        <ProductDel/>
        <ProductChars info={info.params} setLink={setLink}/>
        <ProductPayment/>
        <Assurance/>
        <ProductDescription/>
        <ProductRevs setLink={setLink} reviews={reviews} setCreateComment={setCreateComment}/>

        {createComment ? <CreateComment setCreateComment={setCreateComment} reviews={reviews} setReviews={setReviews}/> : ''}

    </section>
  )
}

export default Info