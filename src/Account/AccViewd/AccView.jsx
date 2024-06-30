import React from 'react'
import cl from './accView.module.css'
import HorizontalCard from '../../card/HorizontalCard'

function AccView({viewed, doCompare, liked, setLiked}) {
  return (
    <div className={cl.cont}>
      {viewed.map((e,i)=>{
        return <HorizontalCard liked={liked} setLiked={setLiked} doCompare={doCompare} id={e.id} info={e} params={e.params} key={'AV'+i}/>
      })}
    </div>
  )
}

export default AccView