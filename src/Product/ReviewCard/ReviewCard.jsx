import React, { useState } from 'react'
import cl from './Reviewcard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faThumbsUp as activeThumb} from '@fortawesome/free-solid-svg-icons'

function ReviewCard({info}) {
  let stars = new Array(5).fill(0)

  const [likes, setLikes] = useState({count:info.likes, active:0})
  return (
    <div className={cl.card}>
      <FontAwesomeIcon icon={faUser} color='#e4e4e4' className={cl.avatar}/>

      <div className={cl['info-box']}>

        <div className={cl.topInfo}>
          <h4>{info.name}</h4>
          <div style={{gap:'5px', alignItems:'center'}}>
            {info.buy ? <FontAwesomeIcon icon={faCircleCheck} className={cl.check} color='#06A56C'/> : <div className={cl.NB}></div>}
            {info.buy ? <p style={{color:'#06A56C'}}>Was Bought</p> : <p style={{color:'#E93232'}}>Not Bought</p>}
          </div>
          <div style={{gap: '2px'}}>
            {stars.map((e,i)=>{
              if(i<info.stars) return <FontAwesomeIcon icon={faStar} color='#FFCD1B' key={i} className={cl.star}/>
              return <FontAwesomeIcon icon={faStar} color='#c4c4c4' key={i} className={cl.star}/>
            })}
          </div>
          <h5>{info.date}</h5>
        </div>

        <h5>
          {info.desc}
        </h5>

        <div className={cl.infoMark}>
          <h4>Advantages:</h4>
          <p>{info.pluses}</p>
        </div>

        <div className={cl.infoMark}>
          <h4>Flaws:</h4>
          <p>{info.minuses}</p>
        </div>

        <div style={{display: 'flex', justifySelf: 'flex-end', alignItems:'center', gap:'5px'}}>
          {!likes.active ? <FontAwesomeIcon icon={faThumbsUp} className={cl.icon} color='#01579B' onClick={()=>setLikes({active:1, count:likes.count+1})}/> : <FontAwesomeIcon icon={activeThumb} className={cl.icon} color='#01579B' onClick={()=>setLikes({active:0, count:likes.count-1})}/>}
          <h6 style={{color:'#01579B'}}>{likes.count}</h6>
        </div>

      </div>

    </div>
  )
}

export default ReviewCard