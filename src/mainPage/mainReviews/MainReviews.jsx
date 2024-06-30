import React, { useState } from 'react'
import reviews from '../../static/REVIEWS'
import cl from './mainRev.module.css'
import MainReviewCard from './MainReviewCard'

function MainReviews() {
  const changeId = (val)=>{
    document.querySelector(`.${cl.box}`).setAttribute('style', 'opacity:0;')
    setTimeout(()=>{
      if((id+val)<0){
        setId(reviews.length/2-1)
      } else{
        setId((id+val)%(reviews.length/2))
      }
      document.querySelector(`.${cl.box}`).setAttribute('style', 'opacity:1;')
    },400)
  }

  const[id, setId] = useState(0)
  return (
    <section className={cl.cont}>
        <h2>Last Reviews</h2>
        <div className={cl.box}>
            <MainReviewCard name={reviews[id*2].name} desc={reviews[id*2].desc} stars={reviews[id*2].stars} date={reviews[id*2].date} key={id*2}/>
            <MainReviewCard name={reviews[id*2+1].name} desc={reviews[id*2+1].desc} stars={reviews[id*2+1].stars} date={reviews[id*2+1].date} key={id*2+1}/>
        </div>
        <button className={cl.buttonPrev} onClick={()=>changeId(-1)}></button>
        <button className={cl.buttonNext} onClick={()=>changeId(1)}></button>
    </section>
  )
}

export default MainReviews