import Layout from "./components/Layout/Layout";
import "./App.css";
import TopMenu from "./UI/TopMenu/TopMenu";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />          
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
