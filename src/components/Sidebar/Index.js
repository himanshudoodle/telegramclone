import React from "react";
import Styles from "./Sidebar.module.css";
import SidebarContent from "./SidebarContent";
import SidebarNav from "./SidebarNav";

function Sidebar() {
  return (
    <div className={Styles.Sidebar}>
      <SidebarNav />
      <SidebarContent />
    </div>
  );
}

export default Sidebar;
