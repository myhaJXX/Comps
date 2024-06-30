import React from 'react'

function RegBarInput({type, placeholder, auth, setAuth, value}) {
  return (
    <input name={value} type={type} placeholder={placeholder} value={auth[`${value}`]} onInput={(e)=>setAuth({...auth, [`${value}`]:e.target.value})}/>
  )
}

export default RegBarInput