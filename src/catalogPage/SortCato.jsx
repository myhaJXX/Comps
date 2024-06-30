import React from 'react'
import cl from './sort.module.css'

function SortCato({sort,setSort}) {
    const options = [
        {title:'By name A-Z', val:'nameA'},
        {title:'By name Z-A', val:'nameZ'},
        {title:'By value 0-1', val:'val0'},
        {title:'By value 1-0', val:'val1'},
    ]
  return (
    <div className={cl.cont}>
        <div className={cl.box}
        onClick={(e)=>{
            e.currentTarget.style.height = e.currentTarget.style.height == '200px' ? '40px' : '200px'
        }}
        >
            <p>{sort.title}</p>
            {options.map((e,i)=><option value={e.val} key={i} onClick={()=>setSort({title:e.title, value:e.val})}>{e.title}</option>)}
        </div>
    </div>
  )
}

export default SortCato