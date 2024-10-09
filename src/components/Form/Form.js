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
                    <input ref={usernameInp} type="text" placeholder={'用户名'} />
                </div>
                {!isLoginForm && (
                    <div>
                        <input ref={emailInp} type="email" placeholder={'电子邮件'} />
                    </div>
                )}
                <div>
                    <input ref={pwdInp} type="password" placeholder={'密码'} />
                </div>
                <div>
                    <button>{isLoginForm ? "登录" : '注册'}</button>
                    <button onClick={(event) => {
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
