import React, { useState } from 'react';
import './styles/nav.css';
import menu from './picture/menu.png';
import { Link } from "react-router-dom";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const handleButtonClick = () => {
        setShowMenu(!showMenu); // Toggle hiển thị menu
    };

    return (
        <div className="navcontainer">
            {/* <button onClick={()=>handleButtonClick}>
                <img className="menuicon" src={menu} alt="menuicon" />
            </button> */}
                <img className="menuicon" src={menu} alt="menuicon" />
                <div className="hover-div dropdown-menu">
                    <div><a className="dropdown-item " href='#'>Trang chủ</a></div>
                    <div><Link to="welcomepage" className="dropdown-item">Color Generator</Link></div>
                    <div><a className="dropdown-item" href='#'>Color Palette</a></div>
                    <div><a className="dropdown-item" href='/fontgen'>Font Pair</a></div>
                </div>
            
        </div>
    );
}

export default Navbar;
