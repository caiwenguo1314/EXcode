import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

document.documentElement.style.fontSize = 100 / 750 + 'vw';
// 创建一个根节点
const root = ReactDOM.createRoot(document.getElementById("root"));
// 渲染App组件
root.render(
  // 使用React.StrictMode组件包裹App组件
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


