import React from 'react'
import cl from './accInfo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import AccInfoCard from './AccInfoCard'
import AccInfoSocCard from './AccInfoSocCard'
import { useNavigate } from 'react-router-dom'

function AccInfo({auth, setAuth}) {
    const nav = useNavigate()
  return (
    <div className={cl.cont}>
        <h2>Personal Information</h2>
        <div className={cl.box}>

            <div style={{gap: '5px'}}>
                <FontAwesomeIcon icon={faUser} className={cl.iconAva}/>
                <a href="">Add Photo</a>
            </div>

            <div style={{gap: '40px'}}>

                <article>
                    <AccInfoCard value={'Name'} info={auth['name']} key={'AccName'}/>
                    <AccInfoCard value={'Phone'} info={auth['phone']} key={'AccPhone'}/>
                    <AccInfoCard value={'Email'} info={auth['email']} key={'AccEmail'}/>
                    <AccInfoCard value={'Delivery address'} info={auth['address']} key={'AccDelivery'}/>
                </article>

                <article>
                    <h4>Social media</h4>
                    <div>
                        <AccInfoSocCard key={'AccInfoG'} icon={faGoogle} name={'Google'}/>
                        <AccInfoSocCard key={'AccInfoF'} icon={faFacebookF} name={'Facebook'}/>
                    </div>
                </article>

            </div>

        </div>

        <button onClick={()=>nav('/error')}>Change Password</button>
        <button onClick={()=>{
            setAuth({
                name: '',
                email: '',
                phone: '',
                pass: '',
                passR:'',
                address:'',
                value: 0
              })
            nav('/')
        }}>Exit</button>

    </div>
  )
}

export default AccInfo