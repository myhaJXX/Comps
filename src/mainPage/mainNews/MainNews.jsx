import React from 'react'
import cl from './mainNews.module.css'
import MainNewsCard from './MainNewsCard'
import news1 from '../../static/news1.png'
import news2 from '../../static/news2.png'
import news3 from '../../static/news3.png'
import news4 from '../../static/news4.png'

function MainNews() {
    const news = [
        {
            title:'Job vacancy! Content manager required', 
            desc:'The online store V-COMP requires a content manager for a permanent job. Working remotely (from home) is not difficult...',
            date: '07.06.2024',
            img:news1
        },
        {
            title:'Free PC assembly', 
            desc:'Friends! When you purchase all PC components from our company, PC assembly is free. You don\'t need to waste time and take risks...',
            date: '02.06.2024',
            img:news2
        },
        {
            title:'Free delivery', 
            desc:'Free delivery across the Dnieper (by courier) for purchases over 3000 UAH. (More details in the Payment and delivery section)...',
            date: '07.05.2024',
            img:news3
        },
        {
            title:'Promotion! Get your laptop ready for summer!', 
            desc:'We have an annual promotion "Get your laptop ready for summer!" 50% discount on laptop cleaning, 05.15.19-06.15.19 Cleaning includes...',
            date: '01.05.2024',
            img:news4
        },
    ]
  return (
    <section className={cl.cont}>

        <h2>News</h2>

        <div className={cl.box}>
            {news.map((e,i)=><MainNewsCard key={i} info={e}/>)}
        </div>

    </section>
  )
}

export default MainNews