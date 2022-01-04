import React from "react";
import Styles from "./Sidebar.module.css";
import UserChat from "./UserChat";

function SidebarContent() {
  const chatdata = [
    {
      username: "Ankit Dubey",
      message: "Hello Aviraj!",
      count: 3,
      timeStamp: "16:22",
      UserAvatar: "https://picsum.photos/300",
    },
    {
      username: "Himanshu Ragi",
      message: "Hello Abhay.",
      count: 1,
      timeStamp: "15:52",
      UserAvatar: "https://picsum.photos/100",
    },
    {
      username: "Nick Williams",
      message: "Work is done!",
      count: 6,
      timeStamp: "15:38",
      UserAvatar: "https://picsum.photos/200",
    },
    {
      username: "Parshvi Jain",
      message: "OK",
      count: 4,
      timeStamp: "14:56",
      UserAvatar: "https://picsum.photos/230",
    },
    {
      username: "Abhishek Saini",
      message: "Good Morning",
      count: 2,
      timeStamp: "14:22",
      UserAvatar: "https://picsum.photos/202",
    },
    {
      username: "Abhay Chouksey",
      message: "Let's Party!",
      count: 4,
      timeStamp: "09:34",
      UserAvatar: "https://picsum.photos/206",
    },
    {
      username: "Himanshu Ragi",
      message: "Hello Abhay.",
      count: 1,
      timeStamp: "15:52",
      UserAvatar: "https://picsum.photos/100",
    },
    {
      username: "Nick Williams",
      message: "Work is done!",
      count: 6,
      timeStamp: "15:38",
      UserAvatar: "https://picsum.photos/200",
    },
    {
      username: "Parshvi Jain",
      message: "OK",
      count: 4,
      timeStamp: "14:56",
      UserAvatar: "https://picsum.photos/230",
    },
    {
      username: "Abhishek Saini",
      message: "Good Morning",
      count: 2,
      timeStamp: "14:22",
      UserAvatar: "https://picsum.photos/202",
    },
    {
      username: "Abhay Chouksey",
      message: "Let's Party!",
      count: 4,
      timeStamp: "09:34",
      UserAvatar: "https://picsum.photos/206",
    },
    {
      username: "Himanshu Ragi",
      message: "Hello Abhay.",
      count: 1,
      timeStamp: "15:52",
      UserAvatar: "https://picsum.photos/100",
    },
    {
      username: "Nick Williams",
      message: "Work is done!",
      count: 6,
      timeStamp: "15:38",
      UserAvatar: "https://picsum.photos/200",
    },
    {
      username: "Parshvi Jain",
      message: "OK",
      count: 4,
      timeStamp: "14:56",
      UserAvatar: "https://picsum.photos/230",
    },
    {
      username: "Abhishek Saini",
      message: "Good Morning",
      count: 2,
      timeStamp: "14:22",
      UserAvatar: "https://picsum.photos/202",
    },
    {
      username: "Abhay Chouksey",
      message: "Let's Party!",
      count: 4,
      timeStamp: "09:34",
      UserAvatar: "https://picsum.photos/206",
    },
  ];

  return (
    <div className={Styles.SidebarContent}>
      {chatdata.map((element) => {
        return <UserChat data={element} />;
      })}
    </div>
  );
}

export default SidebarContent;
