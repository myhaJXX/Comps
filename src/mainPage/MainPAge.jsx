import React, { useEffect } from 'react'
import MainFirst from './mainFirst/MainFirst'
import Featured from './featured/Featured'
import GameZone from './gameZone/GameZone'
import MainReviews from './mainReviews/MainReviews'
import MainNews from './mainNews/MainNews'

function MainPAge({setFilters, filters, compare, setCompare, liked, setLiked, cart, setCart}) {
  return (
    <main>
        <MainFirst setFilters={setFilters} filters={filters}/>
        <Featured compare={compare} setCompare={setCompare} liked={liked} setLiked={setLiked} cart={cart} setCart={setCart}/>
        <GameZone compare={compare} setCompare={setCompare} liked={liked} setLiked={setLiked} cart={cart} setCart={setCart}/>
        <MainReviews/>
        <MainNews/>
    </main>
  )
}

export default MainPAge