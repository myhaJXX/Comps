import React, { useEffect, useState, useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faMessage } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

import cl from './account.module.css'
import AccInfo from './AccInfo/AccInfo'
import AccFeatured from './AccFeatured/AccFeatured'
import AccView from './AccViewd/AccView'
import AccComments from './AccComms/AccComments'
import AccBuy from './AccBuy/AccBuy'

function Account({auth, setAuth, liked, setLiked, doCompare, viewed, accPage, buy}) {

    const [accLiked, setAccLiked] = useState([...liked])

    useEffect(()=>{
        setLiked([...accLiked])
    }, [accLiked])

    const links = [
        {title: 'Orders history', icon:faShoppingCart},
        {title: 'Featured', icon:faHeart},
        {title: 'Viewed products', icon:faEye},
        {title: 'My reviews', icon:faMessage},
        {title: 'My profile', icon:faUser}
    ]


    const [activeLink, setActiveLink] = useState(accPage)

    useEffect(()=>{
        document.querySelectorAll(`.${cl['link-card']}`)[activeLink].classList.add(`${cl.activeLinkCard}`)
        document.querySelectorAll(`.${cl['link-card']}`).forEach((e,i)=>{
            if(i!=activeLink) e.classList.remove(`${cl.activeLinkCard}`)
        })
    }, [activeLink])

    const chooseEle = (id)=>{
        switch(activeLink){
            case 0: return <AccBuy buy={buy}/>;
            case 1: return <AccFeatured liked={accLiked} setLiked={setAccLiked} doCompare={doCompare} key={'AccFeat'}/>;
            case 2: return <AccView viewed={viewed} doCompare={doCompare} liked={accLiked} setLiked={setAccLiked} key={'AccView'}/>;
            case 3: return <AccComments key={'AccComms'} name={auth.name}/>
            case 4: return <AccInfo auth={auth} setAuth={setAuth} key={'AccInfo'}/>;
        }
    }

  return (
    <main>
        <section className={cl.cont}>
            <aside>
                {links.map((e,i)=>{
                    return  <div className={cl['link-card']} onClick={()=>setActiveLink(i)} key={i}>
                                <FontAwesomeIcon icon={e.icon} className={cl.icon}/>
                                <h4 style={{fontWeight:'400'}}>{e.title}</h4>
                            </div>
                })}
            </aside>
            {chooseEle(activeLink)}
        </section>
    </main>
  )
}

export default Account