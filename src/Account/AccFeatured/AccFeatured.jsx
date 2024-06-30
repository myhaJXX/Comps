import React, { useEffect, useState } from 'react'
import cl from './accFeatured.module.css'
import HorizontalCard from '../../card/HorizontalCard'

function AccFeatured({liked, setLiked, doCompare}) {
  return (
    <div className={cl.cont}>
        {liked.map((e,i)=>{
            return <HorizontalCard params={e.params} liked={liked} setLiked={setLiked} info={e} doCompare={doCompare} id={e.id} key={'AF'+i}/>
        })}
    </div>
  )
}

export default AccFeatured