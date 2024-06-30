import React, { useEffect, useState, useMemo } from 'react'
import cl from './catalog.module.css'
import items from '../static/ITEMS'
import VerticalCard from '../card/VerticalCard'
import CataAside from './catoAside/CataAside'
import CatalogBox from './CatalogBox'
import HorizontalCard from '../card/HorizontalCard'
import HeaderSearch from '../HEADER/HeaderSearch/HeaderSearch'

function Catalog({filters, setFilters, compare, setCompare, liked, setLiked, cart, setCart}) {

  const [cardView, setCardView] = useState(0)

  useEffect(()=>{
    let grid = document.querySelector(`.${cl.window}`)
    if(cardView){
      grid.setAttribute('style', 'grid-template: repeat(auto-fill, 150px) / repeat(auto-fill, 100%);')
    } else {
      grid.setAttribute('style', 'grid-template: repeat(auto-fill, 370px) / repeat(auto-fill, 250px);')
    }

    document.querySelectorAll(`.${cl.tableLink}`).forEach((e,i)=>{
      if(i == cardView){
        e.setAttribute('style', 'color:#01579B; border-color:#01579B')
      } else {
        e.setAttribute('style', 'color:#000; border-color:transparent')
      }
    })

  }, [cardView])

  let [lateFilters, setLateFilters] = useState({})

  const [copy, setCopy] = useState(items.slice())

  useMemo(()=>{
    // console.log(lateFilters)
    let cc = 0
    let length = 0
    //do easier in future....
    let newArr = items.filter(e=>{
      let flag = true
      for(let k in lateFilters){
        length++
        if(!lateFilters[`${k}`].length){
          cc++
        } else {
          if(!lateFilters[`${k}`].includes(e.params[`${k}`])){
            flag = false
          }
        }
      }
      if(flag) return e
    })

    newArr = newArr.filter(e=>e.type==filters.type)
    if(cc==length && !filters.type) newArr = items.slice()
    newArr = newArr.filter(e=>{
      let max = Number(filters.price[1]) ? Number(filters.price[1]) : 1000000
      let totalPrice = e.price - e.price*e.discount/100
      if(totalPrice>=Number(filters.price[0]) && totalPrice<=max) return e
    })
    setCopy(newArr)
  }, [lateFilters, filters])

  const [topC, setTopC] = useState([])


  useEffect(()=>{
    let newObj = []
    for(let key in lateFilters){
      if(lateFilters[`${key}`].length){
        lateFilters[`${key}`].forEach(e=>{
          newObj = [...newObj, {title:key, info:e}]
        })
      }
    }
    setTopC(newObj)
  },[lateFilters])

  const [size,setSize] = useState(window.innerWidth)

  window.addEventListener('resize', ()=>setSize(window.innerWidth))

  const [activeLittle, setActiveLittle] = useState(false)
  useMemo(()=>{
    let cont = document.querySelector(`.${cl.littleParams}`)
    if(activeLittle){
      if(cont) cont.setAttribute('style', 'width: 300px;')
    } else {
      window.scrollTo({top: 0})
      if(cont)cont.setAttribute('style', 'width: 20px;')
    }
  }, [activeLittle])
  return (
    <main className={cl.cont}>
        <h2>Catalog</h2>

        <div className={cl.box}>

          <CatalogBox filters={lateFilters} setCopy={setCopy} copy={copy} topC={topC} setLateFilters={setLateFilters} lateFilters={lateFilters} setCardView={setCardView}/>

          {size > 800 ? <CataAside filters={filters} setFilters={setFilters} lateFilters={lateFilters} setLateFilters={setLateFilters} activeLittle={activeLittle}/>
          :
          <div className={cl.littleParams} style={activeLittle ? {width: '300px'} : {width: '20px'}}>
            <button
            className={activeLittle ? cl.activeButton : cl.unActiveButton}
            onClick={()=>setActiveLittle(!activeLittle)}
            ></button>
            <CataAside filters={filters} setFilters={setFilters} lateFilters={lateFilters} setLateFilters={setLateFilters}  activeLittle={activeLittle}/>
          </div>
          }

          {size < 800 ? 
          <div style={{height: '40px', width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
            <HeaderSearch key="search600" position={'1'}/>
          </div>
          : ''}

          <div className={cl.window}>
            {/* {copy.map((e,i)=><VerticalCard title={e.title} stars={e.stars} price={e.price} discount={e.discount} key={'w'+i} id={e.id}/>)} */}
            {copy.length ? (
              copy.map((e,i)=>{
                if(cardView){
                  return <HorizontalCard key={'w'+i+e.id} id={e.id} params={e.params} doCompare={()=>setCompare([...compare, e])} liked={liked} setLiked={setLiked} info={e} cart={cart} setCart={setCart}/>
                } else {
                  return <VerticalCard key={'w'+i+e.id} id={e.id} doCompare={()=>setCompare([...compare, e])} liked={liked} setLiked={setLiked} info={e} cart={cart} setCart={setCart}/>
                }
              })
            ) : <h2 style={{textAlign:'center', fontSize:'3em',color:'#e4e4e4',gridColumnStart:'1', gridColumnEnd:'5'}}>NOTHING HERE</h2>}
          </div>

        </div>

    </main>
  )
}

export default Catalog