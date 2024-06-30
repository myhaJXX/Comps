import React, { useEffect, useMemo, useState } from 'react'
import cl from './catside.module.css'
import CatFilter from './CatFilter'
import items from '../../static/ITEMS'
import secFilters from '../../static/SECFILTERS'
import SetPrice from './SetPrice'
import SetType from './SetType'

let types = [
    "PC components", "Monitors", "Computers", "Laptops", "Game consoles", "Accessories for laptops",
    "Tablets", "Printers and MFDs", "Acoustic speakers", "Network hardware"
]

let itt = []

function CataAside({filters, setFilters, lateFilters, setLateFilters, activeLittle}) {
    // useMemo(()=>{
    //     console.log(lateFilters)
    // },[lateFilters])
    useMemo(()=>{
        itt = []
        secFilters.forEach(e=>{
            if(e.title == filters.type){
                itt = e.filters.slice()
            }
        })
    }, [filters])

    useEffect(()=>{
        let newParams = {}
        itt.forEach(e=>{
            newParams = {...newParams, [`${e.title}`]:[]}
        })
        setLateFilters({...newParams})
    }, [filters])

    const [flag, setFlag] = useState(false)
    useMemo(()=>{
        if(activeLittle && window.innerWidth< 800) {
            setFlag(true)
        } else setFlag(false)
        if(window.innerWidth> 800) setFlag(true)
    }, [activeLittle])

  return (
    <aside className={cl.cont} style={!flag ? {display: 'none'} : {display: 'grid'}}>

        <SetType filters={filters} setFilters={setFilters} links={types}/>

        <SetPrice filters={filters} setFilters={setFilters}/>

        {
            itt.length ? itt.map((e,i)=> <CatFilter title={e.title} links={e.links} key={i} lateFilters={lateFilters} setLateFilters={setLateFilters}/>) : <h5>CHOOSE TYPE TO SEE MORE OPTIONS</h5>
        }
    </aside>
  )
}

export default CataAside