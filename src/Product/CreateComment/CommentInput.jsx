import React from 'react'

function CommentInput({placeholder, info, setInfo, value}) {
  return (
    <input maxLength={80} type="text" value={info[`${value}`]} placeholder={placeholder} onInput={(e)=>setInfo({...info, [`${value}`]: e.currentTarget.value})}/>
  )
}

export default CommentInput