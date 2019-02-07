import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div style={HeaderStyle}>
       <h1> Todo List</h1>
       <Link style={LinkStyle} to="/">Home</Link> |
       <Link style={LinkStyle} to="/About">About</Link>
    </div>
  )
}

const HeaderStyle= {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
}

const LinkStyle= {
  color: "#fff", 
}

export default Header