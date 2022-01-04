import React from "react";
import Chatbox from "../../components/Chatbox/Index";
import Sidebar from "../../components/Sidebar/Index";
import Styles from "./Home.module.css";

function Home() {
  const mql = window.matchMedia("(max-width: 670px)");
  return (
    <div className={Styles.Home}>
      <Sidebar />
      {!mql.matches && <Chatbox />}
      {/* {ShowSection === ("chatbox" || "both") && <Chatbox />} */}
    </div>
  );
}

export default Home;
