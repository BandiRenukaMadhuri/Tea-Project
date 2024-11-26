
import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';

function Header() {
    return (
        <div className="header">
            <div className="logo">
             𝕋𝕖𝕒 𝕋𝕚𝕞𝕖
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." id="search-input" />
                <button onClick={handleSearch}>Search</button>
            </div>
            <nav className="navbar">
      <ul className="nav-items">
       <Link to ="/" ><li>Home</li></Link>
       <Link to ="/About" ><li>About Us</li></Link>
       <Link to ="/" ><li className="dropdown">Products
          <ul className="dropdown-menu">
          <Link to ="/" > <li>Web Development</li></Link>
          <Link to ="/" > <li>App Development</li></Link>
          <Link to ="/" ><li>SEO</li></Link>
          </ul>
        </li></Link>
        <Link to ="/" > <li className="dropdown">
          Store
          <ul className="dropdown-menu">
          <Link to ="/" ><li>Software</li></Link>
          <Link to ="/" > <li>Hardware</li></Link>
          <Link to ="/" ><li>Accessories</li></Link>
          </ul>
        </li></Link>
        <Link to ="/" > <li>Contact Us</li></Link>
      </ul>
    </nav>
        </div>
      );
    }

function handleSearch() {
    const query = document.getElementById('search-input').value;
    if (query) {
        alert(`Searching for: ${query}`);
        // Add your search logic here
    } else {
        alert('Please enter a search term.');
    }
}

export default Header; 

