import React, { useState } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './Form.module.css' 

export default function Form() {
    const [isLoginForm, setIsLoginForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    const usernameInp = useRef()
    const emailInp = useRef()
    const pwdInp = useRef()

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        const username = usernameInp.current.value
        const password = pwdInp.current.value

        // 模拟验证
        if (username === '' || password === '') {
            setErrorMessage('用户名或密码不能为空')
        } else {
            setErrorMessage('')
            // 这里可以添加实际的提交逻辑
        }
    }

    return (
        <div className={classes.container}>
            {errorMessage && <p className={classes['error-message']}>{errorMessage}</p>}
            <h2>{isLoginForm ? "登录" : '注册'}</h2>
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
                        setErrorMessage('') // 清除错误信息
                    }}>
                        {isLoginForm ? '没有账号？点击注册' : '已有账号？点击登录'}
                    </button>
                </div>
            </form>
        </div>
    )
}
