import React, { useState } from 'react';
import './styles/nav.css'
import menu from './picture/menu.png'
import { Link , NavLink} from "react-router-dom";
function Navbar(){

    const [showMenu, setShowMenu] = useState(false); // State để kiểm soát việc hiển thị của div

  // Function để xử lý khi di chuột vào element
    const handleMouseEnter = () => {
        setShowMenu(true);
    };

    // Function để xử lý khi di chuột ra khỏi element
    const handleMouseLeave = () => {
        setShowMenu(false);
    };

    return (
        <>
            <div
                className="navcontainer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img className="menuicon" src={menu} alt="menuicon" />
                {showMenu && <div className="hover-div dropdown-menu">
                    <div><a class="dropdown-item" href='#'>Trang chủ</a></div>
                    <div><Link to="welcomepage" class="dropdown-item" >Color Generator</Link></div>
                    <div><a class="dropdown-item" href='#'>Color TBalette</a></div>
                    <div><a class="dropdown-item" href='#'>Font Pair</a></div>
                </div>}
            </div>
        </>
    );
}

export default Navbar;