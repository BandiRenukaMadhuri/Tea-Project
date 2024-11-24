

import React from 'react';

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
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li className="dropdown">
          <a href="#">Products</a>
          <ul className="dropdown-menu">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">App Development</a></li>
            <li><a href="#">SEO</a></li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="#">Store</a>
          <ul className="dropdown-menu">
            <li><a href="#">Software</a></li>
            <li><a href="#">Hardware</a></li>
            <li><a href="#">Accessories</a></li>
          </ul>
        </li>
        <li><a href="#">Contact Us</a></li>
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
