import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Fiverr_logo.svg/1200px-Fiverr_logo.svg.png" alt="Logo" />
            <input className="header__input" type="search" placeholder="Find Services" />
            <button class="header__searchButton">Search</button>
            <nav className="header__nav">
                <ul>
                    <li>Dashboard</li>
                    <li>Messages</li>
                    <li>Orders</li>
                    <li>Gigs</li>
                    <li>Analytics</li>
                    <li>Earning</li>
                    <li>Commmunity</li>
                    <li>More</li>
                </ul>
                <div className="header__right">
                <button className="header__signinBtn">Sign In</button>
                <button className="header__joinBtn">Join</button>
            </div>
            </nav>
            
        </div>
    )
}

export default Header;
