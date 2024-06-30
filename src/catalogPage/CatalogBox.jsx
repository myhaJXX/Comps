import React, { useEffect, useState } from 'react'
import cl from './catalog.module.css'
import SortCato from './SortCato'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableCells } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'

function CatalogBox({topC, setLateFilters, lateFilters, copy, setCopy, setCardView, filters}) {

    const [sort,setSort] = useState({
        title:'Sort By...',
        value:''
    })

    useEffect(()=>{
        if(sort.value == ''){
            setCopy([...copy])
        } else if(sort.value == 'nameA'){
            setCopy([...copy.sort((a,b)=>a.title.toLowerCase().localeCompare(b.title.toLowerCase()))])
        } else if(sort.value == 'nameZ'){
            setCopy([...copy.sort((b,a)=>a.title.toLowerCase().localeCompare(b.title.toLowerCase()))])
        } else if(sort.value == 'val0'){
            setCopy([...copy.sort((a,b)=>(a.price-a.price*a.discount/100)-(b.price-b.price*b.discount/100))])
        } else if(sort.value == 'val1') {
            setCopy([...copy.sort((b,a)=>(a.price-a.price*a.discount/100)-(b.price-b.price*b.discount/100))])
        }
    },[sort, filters])

  return (
    <div className={cl.sortBox}>

        {topC.length?
        <div>
            {topC.map((e,i)=><div className={cl.mark} key={i}
            onClick={()=>{
                let newArr = lateFilters[`${e.title}`].filter(el=>el!=e.info)
                setLateFilters({...lateFilters, [`${e.title}`]:[...newArr]})
                let ele = document.querySelector(`#${'cat'+e.info.replaceAll(' ','').replaceAll('"','').replaceAll('>','m').replaceAll('<','l').replaceAll('.','p').replaceAll('+','pl')+e.title.length+e.title[0]}`)
                console.log(ele)
                ele.checked = false
            }}
            >
                <p>{e.title} : {e.info}</p>

                <div></div>

            </div>)}
        </div>
        :
        <div><h4 style={{color:'#d4d4d4'}}>No Filters...</h4></div>}

        <div style={{display: 'flex', gap:'20px'}}>
            <FontAwesomeIcon onClick={()=>setCardView(0)} icon={faTableCells} className={cl.tableLink}/>
            <FontAwesomeIcon onClick={()=>setCardView(1)} icon={faList} className={cl.tableLink}/>
            <SortCato setSort={setSort} sort={sort}/>
        </div>

    </div>
  )
}

export default CatalogBox