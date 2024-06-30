import React from 'react'
import cl from './catside.module.css'

function CatFilter({title, links, lateFilters, setLateFilters}) {
  return (
    <div>
        <h4>{title}</h4>
        <div className={cl['filter-box']}>
            {links.map((e,i)=>{
                return <div 
                key={i}>
                    <input type='checkbox' id={'cat'+e.replaceAll(' ','').replaceAll('"','').replaceAll('>','m').replaceAll('<','l').replaceAll('.','p').replaceAll('+','pl')+title.length+title[0]}/>
                    <label htmlFor={'cat'+e.replaceAll(' ','').replaceAll('"','').replaceAll('>','m').replaceAll('<','l').replaceAll('.','p').replaceAll('+','pl')+title.length+title[0]}
                    onClick={()=>{
                        let ele = document.querySelector(`#${'cat'+e.replaceAll(' ','').replaceAll('"','').replaceAll('>','m').replaceAll('<','l').replaceAll('.','p').replaceAll('+','pl')+title.length+title[0]}`)
                        if(!ele.checked){
                            let arr = lateFilters[`${title}`];
                            setLateFilters({...lateFilters, [`${title}`]:[...arr, e]})
                        } else {
                            let arr = lateFilters[`${title}`];
                            arr = arr.filter(ele=>!ele.includes(e))
                            setLateFilters({...lateFilters, [`${title}`]:[...arr]})
                        }

                    }}
                    >{e}</label>
                </div>
            })}
        </div>
    </div>
  )
}

export default CatFilter