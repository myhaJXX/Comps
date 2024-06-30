import React, { useEffect } from 'react'
import cl from './cartBox.module.css'
import CartCard from './CartCard'
import { useNavigate } from 'react-router-dom'

function CartBox({setActiveCart, cart, setCart}) {
  const nav = useNavigate()
  console.log(cart)
  return (
    <div className={cl.cont} onClick={()=>setActiveCart(false)}>
        <div className={cl.box} onClick={(e)=>e.stopPropagation()}>
            <h2>Your Products</h2>
            <div style={{maxHeight: '350px', overflowY:'scroll'}}>
              {cart.map((e,i)=>{
                return <CartCard info={e} key={i+e.ID} id={e.id} cart={cart} setCart={setCart}/>
              })}
            </div>
            <button onClick={()=>{
              setActiveCart(false)
              nav('/payPage')
            }}>Pay your basket</button>
        </div>
    </div>
  )
}

export default CartBox