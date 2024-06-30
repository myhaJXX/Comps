import React, { useEffect } from 'react'
import MainIcon from './MainIcon'

import cl from './mainFirst.module.css'

import {faScrewdriver} from '@fortawesome/free-solid-svg-icons'
import {faCoins} from '@fortawesome/free-solid-svg-icons'
import {faTruck} from '@fortawesome/free-solid-svg-icons'
import {faAddressCard} from '@fortawesome/free-solid-svg-icons'
import {faMoneyCheckDollar} from '@fortawesome/free-solid-svg-icons'
import {faMedal} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'

import bg from '../../static/mainBG.jpg'


const links = [
    {icon: faScrewdriver, title:'Free assembly'},
    {icon: faCoins, title:'4 months / 0%'},
    {icon: faTruck, title:'Free delivery'},
    {icon: faAddressCard, title:'Official guarantee'},
    {icon: faMoneyCheckDollar, title:'Best price'},
    {icon: faMedal, title:'11 years On the market'},
    {icon: faUser, title:'Professional consultation'},
]

function MainFirstInfo({filters}) {
    let setImg
    useEffect(()=>{
    
    },[filters])

  return (
    <div className={cl['slider-cont']}>

        <div className={cl['slider-box']}>
            <img src={bg} alt="" />
            <div className={cl['slider-buttons']}>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>

        {links.map((e,i)=><MainIcon icon={e.icon} title={e.title} key={i}/>)}

    </div>
  )
}

export default MainFirstInfo