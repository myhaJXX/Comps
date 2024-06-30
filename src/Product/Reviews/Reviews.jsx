import React, { useEffect, useState } from 'react'
import cl from './reviews.module.css'
import ReviewCard from '../ReviewCard/ReviewCard'
import CreateComment from '../CreateComment/CreateComment'

function Reviews({reviews, setReviews}) {
  const [createComment, setCreateComment] = useState(false)
  useEffect(()=>{
    if(createComment) {
      window.scrollTo({top: 0})
      document.querySelector('body').setAttribute('style', 'overflow:hidden')
    } else {
      document.querySelector('body').setAttribute('style', 'overflow:auto')
    }
  }, [createComment])
  return (
    <section className={cl.cont}>
      <h2>Reviews</h2>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <p>Write your review</p>
        <button onClick={()=>setCreateComment(true)}>Add Review</button>
      </div>
      {createComment ? <CreateComment setCreateComment={setCreateComment} reviews={reviews} setReviews={setReviews}/> : ''}
      <div>
        {reviews.map((e,i)=><ReviewCard info={e} key={'m'+e.name}/>)}
      </div>
    </section>
  )
}

export default Reviews