import React from 'react'
import cl from '../info.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'


function ProductPayment() {
    const items = [
        {icon: faMoneyBill, info:'Payment upon receipt of goods, Google Pay, online card', href:''},
        {icon: faClockRotateLeft, info:'Installment plan 0% for 4 months', href:''},
        {icon: faHandHoldingDollar, info:'Credit, terms and conditions can be found', href:'here'}
    ]
    return (
        <div className={cl['payment-cont']}>
            <h4>Payment</h4>
            {items.map((e,i)=>{
                return  <div key={i} style={{height:'40px' ,display:'flex', gap:'10px', alignItems:'center'}}>
                            <FontAwesomeIcon color='#01579B' icon={e.icon} className={cl['info-icon']}/>
                            <p>{e.info} {e.href? <a href='#'>{e.href}</a> : ''}</p>
                        </div>
            })}
        </div>
    )
}

export default ProductPayment