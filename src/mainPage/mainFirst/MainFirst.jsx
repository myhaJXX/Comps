import React from 'react'
import MainFirstCard from './MainFirstCard'
import cl from './mainFirst.module.css'

import {faComputer} from '@fortawesome/free-solid-svg-icons'
import {faDesktop} from '@fortawesome/free-solid-svg-icons'
import {faLaptop} from '@fortawesome/free-solid-svg-icons'
import {faGamepad} from '@fortawesome/free-solid-svg-icons'
import {faTabletScreenButton} from '@fortawesome/free-solid-svg-icons'
import {faPrint} from '@fortawesome/free-solid-svg-icons'
import {faVolumeHigh} from '@fortawesome/free-solid-svg-icons'
import {faNetworkWired} from '@fortawesome/free-solid-svg-icons'
import MainFirstInfo from './MainFirstInfo'

function MainFirst({setFilters, filters}) {

    const links = [
        {title: 'PC components', icon: faComputer, update: 0},
        {title: 'Monitors', icon: faDesktop, update: 0},
        {title: 'Computers', icon: faComputer, update: 0},
        {title: 'Laptops', icon: faLaptop, update: 0},
        {title: 'Game consoles', icon: faGamepad, update: 1},
        {title: 'Accessories for laptops', icon: faLaptop, update: 0},
        {title: 'Tablets', icon: faTabletScreenButton, update: 0},
        {title: 'Printers and MFDs', icon: faPrint, update: 0},
        {title: 'Acoustic speakers', icon: faVolumeHigh, update: 0},
        {title: 'Network hardware', icon: faNetworkWired, update: 0}
    ]

  return (
    <section className={cl.cont}>

        <aside>
            {links.map((e,i)=><MainFirstCard title={e.title} icon={e.icon} setFilters={setFilters} update={e.update} key={i} filters={filters}/>)}
        </aside>

        <MainFirstInfo filters={filters}/>

    </section>
  )
}

export default MainFirst