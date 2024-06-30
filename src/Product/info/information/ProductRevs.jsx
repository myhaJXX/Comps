import React, { useState } from 'react'
import cl from '../info.module.css'
import ReviewCard from '../../ReviewCard/ReviewCard'

function ProductRevs({setLink, reviews, setCreateComment}) {

    return (
        <div className={cl.reviewCont}>
            <h4>Reviews ({reviews.length})</h4>
            <div style={{display:'grid', gap:'20px'}}>
                {reviews.map((e,i)=>{
                    if(i<3) return <ReviewCard key={e.name} info={e}/>
                })}
            </div>
            <div className={cl.reviewBottom}>
                <button onClick={()=>setCreateComment(true)}>Place New Comment</button>
                <a onClick={()=>setLink("Reviews")}>Check all reviews</a>
            </div>
        </div>
    )
}

export default ProductRevs