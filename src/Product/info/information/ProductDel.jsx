import React from 'react'
import cl from '../info.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faJ } from '@fortawesome/free-solid-svg-icons'
import { faH } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons'

function ProductDel() {
    const items = [
        {title:'Pickup from the store (Gorki)', icon:faTruckFast, info1:'Free', info2:'', ship:'Ship Today'},
        {title:'Pickup from Justin', icon:faJ, info1:'Carrier tariffs', info2:'Or free from $300', ship:'Ship Today'},
        {title:'Pickup from BELPOSHTA', icon:faLocationDot, info1:'Carrier tariffs', info2:'Or free from $200', ship:'Ship Today'},
        {title:'Pickup from Nova Poshta', icon:faH, info1:'Carrier tariffs', info2:'Or free from $300', ship:'Ship Today'},
        {title:'Courier to your address', icon:faBoxArchive, info1:'Carrier tariffs', info2:'Or free from $200', ship:'Ship Tomorrow'},
    ]
  return (
    <div className={cl['delivery-cont']}>
        <h4>Delivery</h4>
        {items.map((e,i)=>{
            return  <div key={i} className={cl['delivery-card']}>
                        <div style={{width:'30%' ,display:'flex', gap:'10px', alignItems:'center'}}>
                            <FontAwesomeIcon icon={e.icon} color='#01579B' className={cl['info-icon']}/>
                            <h5 style={{textAlign:'left'}}>{e.title}</h5>
                        </div>
                        <h5>{e.ship}</h5>
                        <div style={{marginLeft:'auto'}}>
                            <h5 style={{color:'#01579B'}}>{e.info1}</h5>
                            {e.info2 ? <h5>{e.info2}</h5> : ''}
                        </div>
                    </div>
        })}
    </div>
  )
}

export default ProductDel