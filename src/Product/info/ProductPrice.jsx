import React, { useEffect } from 'react'
import cl from './info.module.css'

function ProductPrice({price, discount, cart, setCart,info}) {
    let total = price - price*discount/100
    useEffect(()=>{
        console.log(info)
        if(!discount) {
            document.querySelector(`.${cl['price-cont']}>h4`).setAttribute('style', 'grid-row-start: 1; align-self: center; text-align:left;')
        } else {
            document.querySelector(`.${cl['price-cont']}>h4`).setAttribute('style', 'color:#E93232')
        }
    }, [])
  return (
    <div className={cl['price-cont']}>
        {discount ? <h6><strike>$ {price%1==0 ? `${price}.00` : price}</strike></h6> : ''}
        <h4>$ {total % 1 == 0 ? `${total}.00` : total}</h4>
        <button onClick={()=>setCart([...cart, {...info, countItems:1}])}>Buy Now</button>
        <button onClick={()=>setCart([...cart, {...info, countItems:1}])}>Buy in credit</button>
    </div>
  )
}

export default ProductPrice