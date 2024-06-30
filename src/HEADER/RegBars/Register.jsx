import React, { useEffect, useState } from 'react'
import cl from './regBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import RegBarInput from './RegBarInput'

function Register({setActive, auth, setAuth}) {
    const [eye1, setEye1] = useState(false)
    const [eye2, setEye2] = useState(false)
    useEffect(()=>{
        if(eye1) {
            document.querySelectorAll(`.${cl.inputPass}>input`)[0].setAttribute('type', 'text')
        } else document.querySelectorAll(`.${cl.inputPass}>input`)[0].setAttribute('type', 'password')
    }, [eye1])
    useEffect(()=>{
        if(eye2) {
            document.querySelectorAll(`.${cl.inputPass}>input`)[1].setAttribute('type', 'text')
        } else document.querySelectorAll(`.${cl.inputPass}>input`)[1].setAttribute('type', 'password')
    }, [eye2])
  return (
    <form className={cl.cont} onClick={()=>setActive(0)}>
        <div className={cl.regBox} onClick={(e)=>e.stopPropagation()}>
            <div>
                <h4>Register</h4>
                <div className={cl.close} onClick={()=>setActive(0)}></div>
            </div>
            <RegBarInput type={"text"} placeholder={'Enter your email'} auth={auth} setAuth={setAuth} value={'email'}/>
            <div className={cl.inputPass}>
                <RegBarInput type={!eye1 ? "password" : "text"} placeholder={"Enter your password"} auth={auth} setAuth={setAuth} value={'pass'}/>
                <div onClick={()=>setEye1(!eye1)}>
                    {!eye1 ? <FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon={faEyeSlash}/>}
                </div>
            </div>
            <div className={cl.inputPass}>
                <RegBarInput type={!eye2 ? "password" : "text"} placeholder={'Repeat pasword'} auth={auth} setAuth={setAuth} value={'passR'}/>
                <div onClick={()=>setEye2(!eye2)}>
                    {!eye2 ? <FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon={faEyeSlash}/>}
                </div>
            </div>
            <RegBarInput type={"text"} placeholder={'Enter your phone'} auth={auth} setAuth={setAuth} value={'phone'}/>
            <RegBarInput type={"text"} placeholder={'Enter your name'} auth={auth} setAuth={setAuth} value={'name'}/>
            <a href="">Forgot password?</a>
            <button onClick={(e)=>{
                e.preventDefault()
                let flag = true
                document.querySelectorAll(`.${cl.regBox} input`).forEach(e=>{
                    if(!e.value) {
                        flag = false
                        e.setAttribute('style', 'border-color: red;')
                    }else e.setAttribute('style', 'border-color: #c4c4c4;')
                })
                document.querySelectorAll(`.${cl.inputPass} input`).forEach(e=>{
                    if(!e.value) {
                        flag = false
                        e.parentElement.setAttribute('style', 'border-color: red;')
                    } 
                })
                if(flag) {
                    if(auth.pass == auth.passR){
                        setAuth({...auth, value:1})
                        setActive(0)
                    } else {
                        document.querySelectorAll(`.${cl.inputPass}`).forEach(e=>e.style.borderColor = 'red')
                    }
                }
            }}>Register</button>
            <div className={cl.del}>
                <p>Login with</p>
                <hr />
            </div>
            <div className={cl['brands-cont']}>
                <button><FontAwesomeIcon icon={faGoogle}/> <p>Google</p></button>
                <button><FontAwesomeIcon icon={faFacebookF}/> <p>Facebook</p></button>
            </div>
            <div className={cl.boxBottomLinks}>
                <p id='registerP'>Has account?</p>
                <a onClick={(e)=>{
                        e.preventDefault()
                        setActive(1)
                }} href="">Login</a>
            </div>
        </div>
    </form>
  )
}

export default Register