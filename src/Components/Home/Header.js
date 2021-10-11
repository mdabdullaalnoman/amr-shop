import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (

        <header id="home">
            {/* Header - 1 */}
            <div className="header-1">
                <div className="share">
                    <span>follow us:</span>
                    {/* <a target="_blank" href="https://www.facebook.com/noman.apparel.4003" className="fab fa-facebook"></a>
                    <a target="_blank" href="https://www.instagram.com/developer_noman/" className="fab fa-twitter"></a>
                    <a target="_blank" href="https://www.instagram.com/developer_noman/" className="fab fa-instagram"></a>
                    <a target="_blank" href="https://www.linkedin.com/in/abdulla-al-noman-0701171ba/"
                        className="fab fa-linkedin"></a> */}
                </div>

                <div className="share">
                    <span>Call us:</span>
                    <a href="/notFound"> +88 01797701620</a>
                </div>

            </div>

            <div className="header-2">
                {/* Header ---- 2 */}

                <a href="#home" className="logo"><i className="fas fa-shipping-fast"></i> BD-SHOP</a>

                <form action="" className="search-bar-container">
                    <input type="search" id="search-bar" placeholder="search here..." />
                    <label htmlFor="search-bar" className="fas fa-search"></label>
                </form>

            </div>

            <div className="header-3">
                {/* Header - 3 */}

                <div href="" id="menu-bar" className="fas fa-bars"></div>

                <nav className="navbar">
                    <Link to="/home">Home</Link>
                    <Link to="/category">Category</Link>
                    <Link to="/mobile-collection">Product</Link>
                    <Link to="/deal">Deal</Link>
                    <Link to="/login">Login</Link>
                </nav>

                <div className="icons">
                    <Link to="/home" className="fas fa-shopping-cart"></Link>
                    <Link to="/home" className="fas fa-heart"></Link>
                    <Link to="/home" className="fas fa-user-circle"></Link>
                </div>
            </div>

        </header>
    );
};

export default Header;