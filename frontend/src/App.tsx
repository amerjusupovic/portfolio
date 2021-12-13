import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { Menu } from 'antd';

function App() {
  return (
    <Router>
      <div className="start">
        <div className="sidebar-div">
          <Menu>
            <Menu.Item>Menu</Menu.Item>
            <Menu.SubMenu title="SubMenu">
              <Menu.Item>SubMenuItem</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </div>
      </div>
      <Routes>
        <Route path="/" element = { <Home/> }/>
      </Routes>
    </Router>
  );
}

export default App;
