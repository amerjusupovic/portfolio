import { useState, useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { Menu } from 'antd';
import { GithubOutlined, GitlabOutlined } from '@ant-design/icons';
import { getGithubProjects } from "./ProjectApi";

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const [githubProjects, setGithubProjects] = useState([] as any);

  function setCollapsedTrue() { setCollapsed(true) }
  function setCollapsedFalse() { setCollapsed(false) }

  useEffect(() => {
    async function getProjects() {
      const data = await getGithubProjects();
      setGithubProjects(data);
    }
    getProjects();
  }, [])

  return (
    <Router>
      <div className="start sticky">
        <div className="sidebar-div sticky">
          <Menu onMouseOver={setCollapsedFalse} onMouseOut={setCollapsedTrue} mode={"inline"} theme={"dark"} inlineCollapsed={collapsed} className={"menu"}>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>About</Menu.Item>
            <Menu.Item>Skills</Menu.Item>
            <Menu.Item>Projects</Menu.Item>
            <div className="align-end">
              <div className="menu-icon-list">
                <a href="https://github.com/amerjusupovic"><GithubOutlined className={"menu-icon"}/></a>
                <a href="https://gitlab.com/amerj00"><GitlabOutlined className={"menu-icon"}/></a>
              </div>
            </div>
          </Menu>
        </div>
      </div>
      <Routes>
        <Route path="/" element = { <Home projects = {githubProjects}/> }/>
      </Routes>
    </Router>
  );
}

export default App;
