import React from 'react'
import cl from '../info.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved} from '@fortawesome/free-solid-svg-icons'
import { faRotate } from '@fortawesome/free-solid-svg-icons'


function Assurance() {
    const items = [
        {icon: faShieldHalved, info:'36 months'},
        {icon: faRotate, info:'Exchange/return of goods within 14 days'},
    ]
    return (
        <div className={cl['assurance-cont']}>
            <h4>Assurance</h4>
            {items.map((e,i)=>{
                return  <div key={i} style={{height:'40px' ,display:'flex', gap:'10px', alignItems:'center'}}>
                            <FontAwesomeIcon color='#01579B' icon={e.icon} className={cl['info-icon']}/>
                            <p>{e.info}</p>
                        </div>
            })}
        </div>
    )
}

export default Assurance