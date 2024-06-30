import React, { useState } from 'react'
import cl from './createComment.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import CommentInput from './CommentInput'

function CreateComment({setCreateComment, reviews, setReviews}) {
    let date = new Date()
    let starsArr = new Array(5).fill(0)
    const [info, setInfo] = useState({
        name: '',
        desc: '',
        pluses: '',
        minuses: '',
        stars: 1,
        likes: 0,
        buy: 0,
        date: `${date.getDate()<10 ? '0'+date.getDate() : date.getDate()}.${date.getMonth() ? '0'+(date.getMonth()+1) : date.getMonth()+1}.${date.getFullYear()}`
    })
  return (
    <div className={cl.cont} onClick={()=>{
        setCreateComment(false)
    }}>
        <div onClick={(e)=>e.stopPropagation()} className={cl.box}>

            <div>
                <h4>Add new Review</h4>
                <div className={cl.close} onClick={()=>setCreateComment(false)}></div>
            </div>

            <div className={cl.stars}>
                {starsArr.map((e,i)=>{
                    if(i>info.stars-1) return <FontAwesomeIcon key={i} icon={faStar} className={cl.star} onClick={()=>setInfo({...info, stars:i+1})}/>
                    return <FontAwesomeIcon key={i} icon={faStar} className={cl.activeStar} onClick={()=>setInfo({...info, stars:i+1})}/>
                })}
            </div>

            <div style={{display: 'grid', gap:'10px'}}>
                <CommentInput placeholder={'Write your name'} info={info} value={'name'} setInfo={setInfo}/>
                <CommentInput placeholder={'Write your review'} info={info} value={'desc'} setInfo={setInfo}/>
                <CommentInput placeholder={'Write advantages of this product'} info={info} value={'pluses'} setInfo={setInfo}/>
                <CommentInput placeholder={'Write flaws of this product'} info={info} value={'minuses'} setInfo={setInfo}/>
            </div>

            <button onClick={()=>{
                let flag = 0
                let count = 0
                document.querySelectorAll(`.${cl.box} input`).forEach((e,i)=>{
                    if(e.value) {
                        e.style.borderColor = '#c4c4c4'
                        count++
                    } else {
                        e.style.borderColor = '#E93232'
                    }
                    if(count == 4) flag = 1
                })
                if(flag){
                    setReviews([info, ...reviews])
                    setCreateComment(false)
                }
            }}>Place Review</button>
            
        </div>
    </div>
  )
}

export default CreateComment