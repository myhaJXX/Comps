import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cl from './compare.module.css'
import CompareTable from './CompareTable';
import CompareCard from './CompareCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

function Compare({items, setItems, filters, setFilters}) {
  const nav = useNavigate()

  useEffect(()=>{
    if(items.length>1){
      document.querySelector(`.${cl.topCards}`).setAttribute('style', `grid-template: 150px / repeat(${items.length+1}, 1fr);`)
    }
  }, [items])

  const deleteCard = (id)=>{
    let arr = items.slice()
    arr.splice(id,1)
    setItems(arr)
  }

  return (

    <main className={cl.cont}>
      
      {items.length>1 ? <h2>Product comparison: {items[0].type}</h2> : ''}

      {items.length > 1 ?
      <div className={cl['buttons-box']}>
        <button onClick={()=>{
          setFilters({...filters, type:items[0].type})
          nav('/catalog')
        }}>Add Model <FontAwesomeIcon icon={faPlus}/></button>
        <button onClick={()=>setItems([])}>Clear the list <FontAwesomeIcon icon={faTrashCan}/></button>
      </div> 
      : ''  
      }

      {items.length>1 ? 
      
      <div className={cl.box}>

        <div className={cl.topCards}>
          <h2>Filters & Cards</h2>
          {items.map((e,i)=><CompareCard deleteCard={deleteCard} info={e} index={i} key={i}/>)}
        </div>

        <CompareTable items={items}/>

      </div>
      :
      <p>ADD MORE TO SEE INFORMATION</p>
      }

    </main>
  )
}

export default Compare