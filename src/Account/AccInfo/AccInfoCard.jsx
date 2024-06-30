import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

function AccInfoCard({value, info}) {
  const nav = useNavigate()
  return (
    <div>
    <h4 style={{fontSize: '1em'}}>{value}</h4>
    <p>{info}</p>
    <FontAwesomeIcon icon={faPen} color='#01579B' style={{cursor: 'pointer'}} onClick={()=>nav('/error')}/>
</div>
  )
}

export default AccInfoCard