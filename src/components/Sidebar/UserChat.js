import React from "react";
import Styles from "./Sidebar.module.css";

function UserChat({ data }) {
  return (
    <div className={Styles.SidebarRow}>
      <div className={Styles.UserInfoContainer}>
        <img alt="" src={data.UserAvatar}></img>
        <div>
          <h6>{data.username}</h6>
          <p>{data.message}</p>
        </div>
      </div>
      <div className={Styles.TimeDetails}>
        <p>{data.timeStamp}</p>
        <div>{data.count}</div>
      </div>
    </div>
  );
}

export default UserChat;
