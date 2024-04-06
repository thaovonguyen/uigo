import React, { useState } from 'react';
import './styles/nav.css'
import menu from './picture/menu.png'

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
                {showMenu && <div className="hover-div">
                    <div><a href='#'>Thông tin</a></div>
                    <div><a href='#'>Huhu</a></div>
                </div>}
            </div>
            
            {/* Div sẽ hiển thị khi hover */}

        </>
    );
}

export default Navbar;