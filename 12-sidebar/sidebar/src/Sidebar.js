import React from "react";
import logo from "./logo.svg";
import { links, social } from "./data";
import {useAppContext } from "./context";

import { GrClose } from "react-icons/gr";

function Sidebar() {
  const { closeSidebar, isSidebarOpen } = useAppContext() ;

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar": "sidebar"} >
      <div className="sidebar-header">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <button type="button" className="close-btn" onClick={closeSidebar}>
          <GrClose />
        </button>
      </div>
      <div className="sidebar-links">
        <ul className="links">
          {links.map((link) => {
            const { id, url, icon, text } = link;
            return (
              <li key={id}>
                <a href={url}>
                  {icon} <span>{text}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sidebar-social">
        <ul className="social">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}> {icon} </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
