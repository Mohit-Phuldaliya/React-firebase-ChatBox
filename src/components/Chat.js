import React from "react";
import cam from "../img/add-user.png";
import user from "../img/video-call.png";
import dots from "../img/dots.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Mohit</span>
        <div className="chatIcon">
          <img src={cam} alt="" />
          <img src={user} alt="" />
          <img src={dots} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
