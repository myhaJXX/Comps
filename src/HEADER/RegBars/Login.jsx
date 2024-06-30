import React, { useEffect, useState } from 'react'
import cl from './regBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import RegBarInput from './RegBarInput'

function Login({setActive,auth, setAuth}) {
    const [check, setCheck] = useState(0)
    const [eye, setEye] = useState(false)
    useEffect(()=>{
        if(eye) {
            document.querySelector(`.${cl.inputPass}>input`).setAttribute('type', 'text')
        } else document.querySelector(`.${cl.inputPass}>input`).setAttribute('type', 'password')
    }, [eye])
  return (
    <form className={cl.cont} onClick={()=>setActive(0)}>
        <div className={cl.box} onClick={(e)=>e.stopPropagation()}>
            <div>
                <h4>Login</h4>
                {check ? <h5>This account doesn't exist</h5> : ''}
                <div className={cl.close} onClick={()=>setActive(0)}></div>
            </div>
            <RegBarInput type={"text"} placeholder={'Enter your email'} auth={auth} setAuth={setAuth} value={'email'}/>
            <div className={cl.inputPass}>
                <RegBarInput type={!eye ? "password" : "text"} placeholder={'Enter your password'} auth={auth} setAuth={setAuth} value={'pass'}/>
                <div onClick={()=>setEye(!eye)}>
                    {!eye ? <FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon={faEyeSlash}/>}
                </div>
            </div>
            <a href="">Forgot password?</a>
            <button onClick={(e)=>{
                e.preventDefault()
                setAuth({...auth, email:'', pass:''})
                setCheck(1)
            }}>Login</button>
            <div className={cl.del}>
                <p>Login with</p>
                <hr />
            </div>
            <div className={cl['brands-cont']}>
                <button><FontAwesomeIcon icon={faGoogle}/> <p>Google</p></button>
                <button><FontAwesomeIcon icon={faFacebookF}/> <p>Facebook</p></button>
            </div>
            <div className={cl.boxBottomLinks}>
                <p id='registerP'>Hasn't account?</p>
                <a onClick={(e)=>{
                    e.preventDefault()
                    setAuth({...auth, email:'', pass:''})
                    setActive(2)
                }} href="">Register</a>
            </div>
        </div>
    </form>
  )
}

export default Login