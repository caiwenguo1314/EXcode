import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./LoginForm.module.css";
import { Button, Input, Form } from "antd";

export default function LoginForm() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const [form]=Form.useForm()


  const navigate = useNavigate();
  const onValuesChange = (value,allvalues) => {
console.log("value",value)
console.log("allvalues",allvalues) 
};

const onReset =()=>{
    form.resetFields()

}

const onValidate=()=>{
    console.log("validate")
    form.validateFields()

}

  return (
    <div className={classes.container}>
      <Form onValuesChange={onValuesChange} form={form}>
        <div>
          <h2>用户名</h2>
          <Form.Item name="username" rules={[{ required: true, message: "请输入用户名" }]}>
            <Input onChange={(e)=>{console.log(e.target.value)}} type="text" placeholder={"用户名"} />
          </Form.Item>
        </div>
        {!isLoginForm && (
          <div>
            <h2>电子邮件</h2>

            <Form.Item name="email">
              <Input type="email" placeholder={"电子邮件"} />
            </Form.Item>
          </div>
        )}
        <div>
          <h2>密码</h2> 
          <Form.Item name="password"  rules={[{ required: true, message: "请输入密码" }]}>
            <Input type="password" placeholder={"密码"} />
          </Form.Item>
        </div>
        <div className={classes.btns}>
          <Button className={classes.login} onClick={onValidate}>
            {isLoginForm ? "登录" : "注册"}
          </Button>

          <Button type="primary" className={classes.reset} onClick={onReset}>Reset</Button>
          <Button
            className={classes.register}
            onClick={(event) => {
              event.preventDefault();
              setIsLoginForm((prevState) => !prevState);
            }}
          >
            {isLoginForm ? "没有账号？点击注册" : "已有账号？点击登录"}
          </Button>
        </div>
      </Form>      
    </div>
  );
}
