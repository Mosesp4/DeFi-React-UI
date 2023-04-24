import React, { useState } from 'react';
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg"

// Define a functional component called Header.
const Header = () => {

    // Define a state variable called isExpanded and a function to update it called setIsExpanded.
    const [isExpanded, setIsExpanded] = useState(false);
  
    // Define a function called toggleExpanded to update the isExpanded state variable by toggling its value.
    const toggleExpanded = () =>
      setIsExpanded((prevIsExpanded) => !prevIsExpanded);

    // Return JSX that will be rendered in the browser.
    return (
        <>
        {/* Render a div that contains the header elements */}
        <div className="header-container">
            {/* Render the logo */}
            <div className= "logo">MoSwap</div>

            {/* Render the menu */}
            <div className= "menu">
                {/* Render the menu links */}
                <div className= "menu-links">
                    <a href='/'>App</a>
                    <a href='/'>Product</a>
                    <a href='/'>Build</a>
                    <a href='/'>Careers</a>
                    <a href='/'>About</a>
                </div>
            </div>

            {/* Render the wallet connect button */}
            <div className="wallet-btn">
                <button className="primary">Connect App</button>
            </div>

            {/* Render the menu icon */}
            <button className="hamburger" onClick={toggleExpanded}>
                <MenuIcon />
            </button>
        </div>

        {/* Render the menu overlay when isExpanded is true */}
        {isExpanded && (
            <div className="menu-overlay">
                <div className="menu-links">
                    <a href="/">App</a>
                    <a href="/">Products</a>
                    <a href="/">Build</a>
                    <a href="/">Careers</a>
                    <a href="/">About</a>
                    <a href="/">Enter App</a>
                </div>
            </div>
        )}
        </>
    );
};

// Export the Header component so that it can be used elsewhere.
export default Header;
