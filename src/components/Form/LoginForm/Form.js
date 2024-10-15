import React, { useState } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './Form.module.css'

export default function Form() {
    const [isLoginForm, setIsLoginForm] = useState(true)


    const usernameInp = useRef()
   
    
    console.log(usernameInp)
    const emailInp = useRef()
    const pwdInp = useRef()

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        const username = usernameInp.current.value
        const password = pwdInp.current.value

    }
    

    return (
        <div className={classes.container}>
            <form onSubmit={submitHandler}>
                <div>
                    <h2>用户名</h2>
                    <input ref={usernameInp} type="text" placeholder={'用户名'} />
                </div>
                {!isLoginForm && (
                    <div>
                        <h2>电子邮件</h2>

                        <input ref={emailInp} type="email" placeholder={'电子邮件'} />
                    </div>)
                }
                <div>
                    <h2>密码</h2>
                    <input ref={pwdInp} type="password" placeholder={'密码'} />
                </div>
                <div className={classes.btns}>
                    <button className={classes.login}>{isLoginForm ? "登录" : '注册'}</button>
                    <button className={classes.register} onClick={(event) => {
                        event.preventDefault()
                        setIsLoginForm(prevState => !prevState)

                    }}>
                        {isLoginForm ? '没有账号？点击注册' : '已有账号？点击登录'}
                    </button>
                </div>
            </form>
        </div>
    )
}
