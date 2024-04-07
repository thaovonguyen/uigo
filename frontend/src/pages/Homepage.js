import '../styles/homepage.css';
import logo from '../picture/logo.png'
import { Link , NavLink} from "react-router-dom";
import muiten from '../picture/muiten.png'
import Navbar from "../Navbar"

function Homepage(){
    return(
        <>
            < Navbar />
            <div class="hpbackground">
                
                <div class="main">
                    <div>
                        <img className="logoUI" src={logo} alt="logoUI" />
                    </div>


                    <div class="script" style={{width: '40%'}}>
                        Chào bạn, chúng mình cung cấp cho các bạn scheme màu theo mong muốn và hướng dẫn sử dụng schema màu này cho 
                    </div>
                </div>
                <div class="footpage">
                    <div>
                        <NavLink to ="welcomepage">
                            <img className="logoUI" src={muiten} alt="logoUI" />
                        </NavLink>
                    </div>
                    Click to start
                </div>            
            </div>
        </>
    )
}
export default Homepage;