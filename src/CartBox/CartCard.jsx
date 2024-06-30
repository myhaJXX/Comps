import React, { useEffect, useMemo, useState } from 'react'
import cl from './cartBox.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

function CartCard({info, id, cart, setCart}) {
    let price = info.discount ? info.price - info.price*info.discount/100 : info.price
    const [count, setCount] = useState(info.countItems)
    const [total, setTotal] = useState(price)
    useEffect(()=>{
        if(count < 1) {
            setCart([...cart].filter(e=>e.id!=id))
        }
        else {
            setCart([...cart].map(e=>{
                if(e.id == id) return {...info, countItems: count}
                return e
            }))
        }
    }, [count])

    useMemo(()=>{
        console.log(price, total)
        setTotal(price * info.countItems)
    }, [cart])
  return (
    <div className={cl.card}>
        <img src={info.img} alt="" />
        <h4>{info.title}</h4>
        <div className={cl.cardCount}>
            <div onClick={()=>setCount(count-1)}></div>
            <h4>{info.countItems}</h4>
            <div onClick={()=>setCount(count+1)}></div>
        </div>
        <div className={cl.cardPrice}>$ {total % 1 == 0 ? `${total}.00` : total}</div>
        <FontAwesomeIcon icon={faTrashCan} className={cl.cardDelete} color='red' onClick={()=>{
            let arr = cart.filter(e=>e.ID != info.ID)
            console.log(arr)
            setCart(arr)
        }}/>
        <h5>ID: {info.ID}</h5>
    </div>
  )
}

export default CartCard