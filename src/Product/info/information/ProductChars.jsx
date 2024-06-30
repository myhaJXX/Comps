import React, { useMemo, useState } from 'react'
import cl from '../info.module.css'

function ProductChars({info, setLink}) {
    const [keys, setKeys] = useState([])
    useMemo(()=>{
        let keys = []
        for(let key in info) keys =[...keys, key]
        for(let i = 0;i<6;i++) keys = [...keys, 0]
        setKeys(keys)
    }, [])
    return (
        <article className={cl['params-cont']}>
            {keys.map((e,i)=>{
                return  <div key={i} className={cl['params-card']}>
                            <h6>{e ? e : "Lorem Ipsum"}</h6>
                            <h6>{e ? info[`${e}`] : "Lorem Ipsum lorem ipsum"}</h6>
                        </div>
            })}
            <h5 style={{cursor:'pointer'}} onClick={()=>setLink('Characteristics')}>Check all characteristics</h5>
        </article>
    )
}

export default ProductChars