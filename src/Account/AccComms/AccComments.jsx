import React, { useEffect, useState } from 'react'
import cl from './accComments.module.css'
import itemRevs from '../../static/ITEMREVS'
import items from '../../static/ITEMS'
import ReviewCard from '../../Product/ReviewCard/ReviewCard'

function AccComments({name}) {
    const [comments, setComments] = useState([])
    useEffect(()=>{
        let eles = [];
        itemRevs.forEach((e,i)=>{
            let el = 0;
            e.forEach(e=>{
                if(e.name == name) el = {...e, name:items[i].title}
            })
            if(el) eles = [...eles, el]
        })
        setComments([...eles])
    }, [])
  return (
    <section className={cl.cont}>
        {comments.map((e,i)=>{
            return <ReviewCard info={e} key={'AccRev' + i}/>
        })}
    </section>
  )
}

export default AccComments