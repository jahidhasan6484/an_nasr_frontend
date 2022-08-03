import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <Link to="" className='logo'>আন নাসর</Link>
                <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="menu">মেনু</span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" className='nav_menu'>হোম</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about" className='nav_menu'>তথ্য</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/branches" className='nav_menu'>শাখা সমূহ</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/peoples" className='nav_menu'>মানুষজন</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/files" className='nav_menu'>ফাইল</Link>
                        </li>
                    </ul>

                    <form class="buttons">
                        <Link to="/login" class="button login_btn nav_menu" type="submit">লগ ইন</Link>
                        <Link to="/register" class="button register_btn nav_menu" type="submit">রেজিষ্টার</Link>
                    </form>

                </div>
            </div>
        </nav>
    )
}

export default Header;