import React, { useEffect, useState } from 'react'
import cl from './parameters.module.css'
import ParamCard from './ParamCard'

function Parameters({compare, setCompare, info, liked, setLiked, cart, setCart}) {
    const [chars, setChars] = useState(new Array(12).fill({title: 'Lorem Ipsum', info:'Lorem Ipsum'}))
    useEffect(()=>{
        let array = []
        for(let key in info.params){
            let obj = {title: key, info:info.params[`${key}`]}
            array = [...array , obj]
        }
        setChars([...array, ...chars])
    }, [])

    // useEffect(()=>{
    //     console.log(chars)
    // }, [chars])

  return (
    <section className={cl.cont}>
        <h2>Characteristics</h2>
        <ParamCard liked={liked} setLiked={setLiked} compare={compare} setCompare={setCompare} title={info.title} price={info.price} count={info.count} img={info.img} discount={info.discount} info={info} cart={cart} setCart={setCart}/>
        <div style={{display: 'grid', gap:'20px'}}>
            <table>
                <tbody>
                    {chars.map((e,i)=>{
                        return  <tr key={i}>
                                    <td>{e.title}</td>
                                    <td>{e.info}</td>
                                </tr>
                    })}
                </tbody>
            </table>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
        </div>
    </section>
  )
}

export default Parameters