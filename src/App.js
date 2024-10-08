import Layout from "./components/Layout/Layout";
import "./App.css";
import TopMenu from "./UI/TopMenu/TopMenu";
import Home from "./components/Home/Home";
import Form from './components/Form/Form'
import { Route, Routes, Navigate, } from "react-router-dom";

// 定义一个名为App的函数组件
function App() {
  // 返回一个div元素，类名为App
  return (
    <div className="App">
      {/* 渲染Layout组件 */}
      <Layout>
        {/* 渲染Routes组件 */}
        <Routes>
          {/* 定义一个路径为"/"的路由，当路径匹配时，渲染Home组件 */}
          <Route exact path="/" element={<Home />} />

          <Route exact path="/form" element={<Form />} />
          {/* 定义一个路径为"*"的路由，当路径不匹配时，重定向到"/" */}
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </Layout>
    </div>
  );
}

// 导出App组件
export default App;
