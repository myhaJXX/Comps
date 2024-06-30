import React, { useState } from 'react'
import cl from './payPage.module.css'
import { useEffect } from 'react';
import PayCard from './PayCard';
import { useNavigate } from 'react-router-dom';

function PayPage({cart, setCart, auth, buy, setBuy}) {
  const nav = useNavigate()

  const links = [
    {title: 'Name', value: auth.name},
    {title: 'Email', value: auth.email},
    {title: 'Phone', value: auth.phone},
    {title: 'Address', value: auth.address},
  ]

  const [total, setTotal] = useState(0)
  useEffect(()=>{
    let total = 0;
    cart.forEach(e=>{
      if(e.discount) {
        total+=(e.price - e.price * e.discount / 100)*e.countItems
      } else total+=e.price*e.countItems
    })
    setTotal(total)
  }, [cart])
  
  return (
    <main>
      <section className={cl.cont}>

        <h2>Placing an order</h2>

        <div className={cl.box}>
          <h4>Your order</h4>
          <div className={cl['cards-cont']}>
            {cart.map((e,i)=><PayCard info={e} key={i}/>)}
          </div>
        </div>

        <div className={cl.totalBox}>
            <h4>Total</h4>

            <div>
              <p>{cart.length} items worth</p> 
              <p>$ {total%1 == 0 ? `${total}.00` : total}</p>
            </div>

            <div>
              <p>Price of Delivery</p>
              <p>Free</p>
            </div>
            <hr />
            <div>
              <p>Total payable</p>
              <h2>$ {total%1 == 0 ? `${total}.00` : total}</h2>
            </div>
            <button onClick={()=>{
              setCart([])
              setBuy([...buy, ...cart])
              nav('/')
            }}>Confirm payment</button>
        </div>

        <div className={cl.box}>
          <h4>Your contact details</h4>
          <div style={{display: 'flex', flexWrap: 'wrap', columnGap: '10%', rowGap: '20px'}}>
            {links.map((e,i)=>{
              return  <div style={{width: '45%',display: 'flex', alignItems: 'center', justifyContent:'space-between'}} key={i}>
                        <h4>{e.title}</h4>
                        <p>{e.value}</p>
                      </div>
            })}
          </div>
        </div>

        <textarea name="" id="" cols="30" placeholder='Place Your Comment' maxLength={180}></textarea>

      </section>
    </main>
  )
}

export default PayPage