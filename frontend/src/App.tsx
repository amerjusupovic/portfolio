import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { Menu } from 'antd';
import { GithubOutlined, GitlabOutlined } from '@ant-design/icons';

function App() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Router>
      <div className="start sticky">
        <div className="sidebar-div sticky">
          <Menu mode={"inline"} theme={"dark"} inlineCollapsed={collapsed}>
            <Menu.Item>Menu</Menu.Item>
            <Menu.SubMenu title="SubMenu">
              <Menu.Item>SubMenuItem</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item icon={<GitlabOutlined/>}/>
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
