import React from 'react'
import cl from './footer.module.css'
import FooterColumn from './FooterColumn'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faViber } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcVisa } from '@fortawesome/free-brands-svg-icons'
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons'
import logo from '../static/LogoFooter.png'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const footLinks = [
        {title:'Information', links:['Stock', 'Credit', 'Payment and delivery', 'Guarantee', 'FAQ', 'News', 'Blog', 'About Us', 'Privacy Policy', 'Contacts']},
        {title:'Services', links:['v-comp Service Center', 'Used goods store', 'Purchase of used', 'PC and office equipment repair', 'Computer help', 'Cooperation', 'Home']},
        {title:'Contacts', links:['(067) 11-12-485 - Sales department', '(066) 484-39-22 - Sales department', '(066) 484-39-22 - Sales department', 'Monday-Friday 9:00-19:00 | Saturday-Sunday: from 9:00-16:00']},
    ]
    const nav = useNavigate()
  return (
    <footer>
        {footLinks.map((e,i)=><FooterColumn key={i} title={e.title} links={e.links}/>)}
        <div className={cl['f-social']}>
            <div>
                <h5>Follow us</h5>
                <div>
                    <FontAwesomeIcon icon={faInstagram} className={cl.footerIcon} onClick={()=>nav('/error')}/>
                    <FontAwesomeIcon icon={faFacebookF} className={cl.footerIcon} onClick={()=>nav('/error')}/>
                    <FontAwesomeIcon icon={faYoutube} className={cl.footerIcon} onClick={()=>nav('/error')}/>
                    <FontAwesomeIcon icon={faViber} className={cl.footerIcon} onClick={()=>nav('/error')}/>
                    <FontAwesomeIcon icon={faTelegram} className={cl.footerIcon} onClick={()=>nav('/error')}/>
                    <FontAwesomeIcon icon={faLinkedin} className={cl.footerIcon} onClick={()=>nav('/error')}/>
                </div>
            </div>
            <div>
                <h5>Subscribe for discounts</h5>
                <input type="text" placeholder='Enter your email'/>
            </div>
        </div>
        <div className={cl.footerBottom}>
            <div>
                <img src={logo} alt="" />
                <p>2008-2021 Online store v-comp.com.ua. All rights reserved</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faCcVisa} className={cl.lowerIcon}/>
                <FontAwesomeIcon icon={faCcMastercard} className={cl.lowerIcon}/>
            </div>
        </div>
    </footer>
  )
}

export default Footer