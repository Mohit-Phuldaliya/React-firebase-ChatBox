import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img
          src="https://images.pexels.com/photos/9433003/pexels-photo-9433003.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
