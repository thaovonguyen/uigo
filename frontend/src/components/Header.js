import logo from "../picture/logo.png"
import { Link, NavLink } from "react-router-dom";
import Navbar from "../Navbar"
import '../styles/header.css'
function Header(){
    return(
        <div class="headercomponent">
            <div>
                <NavLink to="/">
                    <img class="logoheader " src={logo}></img>
                </NavLink>
            </div>
            <Navbar />
        </div>
    )
}

export default Header