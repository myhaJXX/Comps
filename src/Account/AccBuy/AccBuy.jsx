import React from 'react'
import PayCard from '../../Paypage/PayCard'

function AccBuy({buy}) {
    console.log(buy)
  return (
    <section style={{maxHeight: '500px', overflowY: 'scroll'}}>
        {buy.map((e,i)=>{
            return <PayCard info={e} key={i+'accBuy'}/>
        })}
    </section>
  )
}

export default AccBuy