import React from "react";
import { Link } from "react-router-dom";
import classes from './MainMenu.module.css';

export default function MainMenu() {
  return (
<div className={classes.MainMenu} >    
      <ul>
        <li>
          <Link to={"/"}>首页</Link>
        </li>
        <li>
          <Link to={"/form"}>登录/注册</Link>
        </li>
        {
          <li>
            <Link to={"/profile"}>用户信息</Link>
          </li>
        }
      </ul>
    </div>
  );
}
