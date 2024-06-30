import React, { useEffect, useState } from 'react'
import cl from './payPage.module.css'

function PayCard({info}) {
  const [totalPrice, setTotalPrice] = useState(info.price)
  useEffect(()=>{
    let pr = totalPrice
    if(info.discount) setTotalPrice(pr - pr*info.discount/100)
  }, [])
  return (
    <div className={cl.card}>
      <img src={info.img} alt="" />
      <h4>{info.title}</h4>
      <div>
        <h4>Count</h4>
        <h5>{info.countItems}</h5>
      </div>
      <div>
        <h4>Price</h4>
        <h5>$ {(totalPrice).toFixed(2)}</h5>
      </div>
      <div>
        <h4>Total Price</h4>
        <h5>$ {(totalPrice*info.countItems).toFixed(2)}</h5>
      </div>
      <h5>ID: {info.ID}</h5>
    </div>
  )
}

export default PayCard