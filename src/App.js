import React, { useEffect, useMemo, useState } from "react";

import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom'

import './app.css'
import MainPage from "./mainPage/MainPAge";
import Catalog from "./catalogPage/Catalog";
import Header from "./HEADER/Header";
import Compare from "./compare/Compare";
import ProductPage from "./Product/ProductPage";
import Account from "./Account/account";
import PayPage from "./Paypage/PayPage";
import Footer from "./FOOTER/Footer";
import ErrorPage from "./ErrorPage/ErrorPage";

function App() {

  const [filters, setFilters] = useState({
    type:'',
    price:['','']
  })

  const [compare, setCompare] = useState([])

  useMemo(()=>{
    if(compare.length > 1 && compare[compare.length-1].type != compare[0].type) {
      setCompare(compare.slice(0,compare.length-1))
    }
    else if(compare.length>3){
      setCompare(compare.slice(1,4))
    }
  }, [compare])

  const [auth, setAuth] = useState({
    name: '',
    email: '',
    phone: '',
    pass: '',
    passR:'',
    address:'',
    value: 0
  })

  const [liked, setLiked] = useState([])
  const [viewed, setViewed] = useState([])
  const [buy, setBuy] = useState([])

  useMemo(()=>{
    let arr = [...viewed]
    let flag = false
    for(let i = 0;i<arr.length;i++){
      for(let j = i+1;j<arr.length;j++){
        if(arr[i].ID == arr[j].ID) {
          flag = true
          arr.splice(j, 1)
        }
      }
    }
    if(flag) setViewed([...arr])
  }, [viewed])

  const [accPage, setAccPage] = useState(4)
  const [cart, setCart] = useState([])

  return (
    <HashRouter basename="/">
      <div className="App">
        <Header filters={filters} setFilters={setFilters} compare={compare} setCompare={setCompare} auth={auth} setAuth={setAuth} liked={liked} setAccPage={setAccPage} cart={cart} setCart={setCart}/>
        <Routes>
          <Route path="/" element={<MainPage setFilters={setFilters} filters={filters} compare={compare} setCompare={setCompare} liked={liked} setLiked={setLiked} cart={cart} setCart={setCart}/>}/>
          <Route path="/catalog" element={<Catalog filters={filters} setFilters={setFilters} compare={compare} setCompare={setCompare}  liked={liked} setLiked={setLiked} cart={cart} setCart={setCart}/>}/>
          <Route path="/compare" element={<Compare items={compare} setItems={setCompare} filters={filters} setFilters={setFilters}/>}/>
          <Route path="/product/:id" element={<ProductPage compare={compare} setCompare={setCompare} viewed={viewed} setViewed={setViewed} liked={liked} setLiked={setLiked} cart={cart} setCart={setCart}/>} />
          <Route path="/account" element={<Account auth={auth} setAuth={setAuth} liked={liked} setLiked={setLiked} doCompare={setCompare} viewed={viewed} accPage={accPage} buy={buy}/>}/>
          <Route path="/payPage" element={<PayPage cart={cart} setCart={setCart} auth={auth} buy={buy} setBuy={setBuy}/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
