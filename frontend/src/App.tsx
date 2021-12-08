import React from 'react';
import './App.scss';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function App() {
  return (
    <div className="start">
      <div className="sidebar-div">
        <ProSidebar width="100%" className="sidebar">
          <Menu iconShape="square">
            <MenuItem>Dashboard</MenuItem>
            <SubMenu title="Components">
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>
      </div>
      <div className="main">
        <div className="center-left">
          <div className="container">
            <div className="h title letter">H</div>
            <div className="e title letter">E</div>
            <div className="y title letter">Y</div>
            <div className="ex title letter">!</div>
          </div>
          <div className="container">
            <div className="si subtitle letter">I</div>
            <div className="sap subtitle letter">'</div>
            <div className="sm subtitle letter">M&nbsp;</div>
            <div className="sa subtitle letter">A</div>
            <div className="sm subtitle letter">M</div>
            <div className="se subtitle letter">E</div>
            <div className="sr subtitle letter">R</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
