import React, { useEffect, useMemo, useState } from 'react'
import cl from './info.module.css'

function ProductSlider({img}) {

    const images = new Array(3).fill(img)

    const [active, setActive] = useState(0)

    const changeSlide = ()=>{
        document.querySelector(`.${cl['slider-cont']}>img`).setAttribute('style', 'opacity:0;')
        setTimeout(()=>{
            console.log('done')
            document.querySelector(`.${cl['slider-cont']}>img`).setAttribute('src', images[active])
            document.querySelector(`.${cl['slider-cont']}>img`).style.opacity = '1'
        }, 400)
    }

  return (
    <div className={cl['slider-cont']}>
        <aside>
            {images.map((e,i)=><img key={i} src={img} style={{cursor:'pointer'}} onClick={()=>{
                setActive(i)
                changeSlide()
            }}/>)}
        </aside>
        <img src={img} alt="" />
    </div>
  )
}

export default ProductSlider