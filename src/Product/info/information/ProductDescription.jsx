import React from 'react'
import cl from '../info.module.css'

function ProductDescription() {
  return (
    <div className={cl['desc-cont']}>
        <h4>Description</h4>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <button onClick={()=>{
          let ele = document.querySelector(`.${cl['desc-cont']}>div`)
          ele.style.maxHeight = ele.style.maxHeight == '200px' ? '60px' : '200px'
        }}>Expand description</button>
    </div>
  )
}

export default ProductDescription