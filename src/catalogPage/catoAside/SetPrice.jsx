import React from 'react'
import cl from './catside.module.css'

function SetPrice({filters, setFilters}) {
  return (
    <div>
        <h4>Price, $</h4>
        <div className={cl['price-box']}>
            <input type="text" maxLength={5} value={filters.price[0]} onInput={(e)=>{
                if(Number(e.target.value)==e.target.value){
                    setFilters({...filters, price:[e.target.value, filters.price[1]]})
                } else {
                    setFilters({...filters, price:[e.target.value.slice(0,e.target.value.length-1), filters.price[1]]})
                }
            }}/>
            <div></div>
            <input type="text" maxLength={5} value={filters.price[1]} onInput={(e)=>{
                if(Number(e.target.value)==e.target.value){
                setFilters({...filters, price:[filters.price[0], e.target.value]})
                } else {
                    setFilters({...filters, price:[filters.price[0], e.target.value.slice(0,e.target.value.length-1)]})
                }
            }}/>
        </div>
    </div>
  )
}

export default SetPrice