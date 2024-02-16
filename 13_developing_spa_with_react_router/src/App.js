import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import Profiles from "./pages/Profiles";
import HistorySample from "./pages/HistorySample";
import WithRouterSample from "./pages/WithRouterSample";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<About />} />
        <Route path="/profiles/*" element={<Profiles />} />
        <Route path="/history" element={< HistorySample />} />
      </Routes>
      <WithRouterSample />
    </div>
  );
}

export default App;