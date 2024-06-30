import React, { useEffect } from 'react'
import cl from './catside.module.css'

function SetType({filters, setFilters, links}) {
    useEffect(()=>{
        document.querySelectorAll(`.${cl['filter-box']} input`).forEach(e=>e.checked = false
        )
    }, [filters])
  return (
    <div>
        <h4>Type:</h4>
        <div className={cl['filter-box']}>
            {links.map((e,i)=>{
                return <div 
                key={i}>
                    <input type='radio' id={'cat'+i+e[0]+e.length} name='cahngeType' checked={e==filters.type?true:false} readOnly/>
                    <label htmlFor={'cat'+i+e[0]+e.length}
                    onClick={()=>{
                        setFilters({...filters, type:e})
                    }}
                    >{e}</label>
                </div>
            })}
        </div>
        <h5 onClick={()=>setFilters({...filters, type:''})} className={cl.link}>Show All</h5>
    </div>
  )
}

export default SetType