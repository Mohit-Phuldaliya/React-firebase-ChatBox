import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lama chat</span>
      <div className="user">
        <img
          src="https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg?compress=1&resize=400x300"
          alt=""
        />
        <span>Mohit</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
