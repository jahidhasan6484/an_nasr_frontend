import React, { useState } from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import Home from '../Home/Home';
import About from '../About/About';
import Branches from '../Branches/Branches';
import Peoples from '../Peoples/Peoples';
import Files from '../Files/Files';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleShowMenu = () => {
        setShowLogin(false);
        setShowRegister(false);
        setShowMenu(true);
    }

    const handleLoginShow = () => {
        setShowLogin(true);
        setShowRegister(false);
        setShowMenu(false);
    }

    const handleRegisterShow = () => {
        setShowLogin(false);
        setShowRegister(true);
        setShowMenu(false);
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a href='#home' className='logo' onClick={handleShowMenu}>আন নাসর</a>
                    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="menu">মেনু</span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-lg-0">
                            <li class="nav-item">
                                <a href="#home" className='nav_menu' onClick={handleShowMenu}>হোম</a>
                            </li>
                            <li class="nav-item">
                                <a href="#about" className='nav_menu' onClick={handleShowMenu}>তথ্য</a>
                            </li>
                            <li class="nav-item">
                                <a href="#branches" className='nav_menu' onClick={handleShowMenu}>শাখা সমূহ</a>
                            </li>
                            <li class="nav-item">
                                <a href="#peoples" className='nav_menu' onClick={handleShowMenu}>মানুষজন</a>
                            </li>
                            <li class="nav-item">
                                <a href="#files" className='nav_menu' onClick={handleShowMenu}>ফাইল</a>
                            </li>
                        </ul>

                        <div class="buttons">
                            <a href="#login" class="button login_btn nav_menu" onClick={handleLoginShow} >লগ ইন</a>
                            <a href="#register" class="button register_btn nav_menu" onClick={handleRegisterShow}>রেজিষ্টার</a>
                        </div>
                    </div>
                </div>
            </nav>

            {
                showMenu &&
                <>
                    <Home />
                    <About />
                    <Branches />
                    <Peoples />
                    <Files />
                    <Footer />
                </>
            }

            {
                showLogin && <Login />
            }

            {
                showRegister && <Register />
            }
        </>
    )
}

export default Header;