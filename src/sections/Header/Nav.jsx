import React from "react";
import "../../dist/Header/Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <nav className="">
        <div className="sticky top-2 z-50 hidden md:flex md:flex-row md:w-full md:py-4 md:justify-around ">
         
          <p className="nav-item rounded-2xl hover:cursor-pointer transition-transform duration-300 hover:scale-110">
            Home
          </p>
          <p className="nav-item rounded-2xl hover:cursor-pointer transition-transform duration-300 hover:scale-110">
            About me
          </p>
          <p className="nav-item rounded-2xl hover:cursor-pointer transition-transform duration-300 hover:scale-110">
            Work-Ex
          </p>
          <p className="nav-item rounded-2xl hover:cursor-pointer transition-transform duration-300 hover:scale-110">
            Education
          </p>
          <p className="nav-item rounded-2xl hover:cursor-pointer transition-transform duration-300 hover:scale-110">
            Skills
          </p>
          <p className="nav-item rounded-2xl hover:cursor-pointer transition-transform duration-300 hover:scale-110">
            Projects
          </p>
          <p className="nav-item rounded-2xl hover:cursor-pointer transition-transform duration-300 hover:scale-110">
            Hobbies
          </p>
          <p className="nav-item rounded-2xl hover:cursor-pointer transition-transform duration-300 hover:scale-110">
            Description
          </p>
        
        </div>
      </nav>
    );
  }
}

export default Nav;