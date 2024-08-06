import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaMagnifyingGlass } from "react-icons/fa6";


function Navbar() {
  return (
    <div className="navbar">
        <h1 className='logo'>NEWS Hub</h1>
            <nav>
                <ul>
                    <li>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/general" activeClassName="active">General</NavLink>
                    </li>
                    <li>
                    <NavLink to="/Business" activeClassName="active">Business</NavLink>
                    </li>
                    <li>
                    <NavLink to="/entertainment" activeClassName="active">Entertainment</NavLink>
                    </li>
                    <li>
                    <NavLink to="/science" activeClassName="active">Science</NavLink>
                    </li>
                    <li>
                    <NavLink to="/health" activeClassName="active">Health</NavLink>
                    </li>
                    <li>
                    <NavLink to="/technology" activeClassName="active">Technology</NavLink>
                    </li>
                    <li>
                    <NavLink exact to="/sports" activeClassName="active">Sports</NavLink>
                    </li>
                </ul>
            </nav>
            <div className='search-box'>
              <input type='text' placeholder='Search'  />
              <FaMagnifyingGlass style={{ cursor: "pointer",}}  />
            </div>
    </div>
  );
}

export default Navbar;
