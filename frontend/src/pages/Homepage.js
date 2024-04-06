import '../styles/homepage.css';
import logo from '../picture/logo.png'
function Homepage(){
    return(
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
                    <a href='#'>
                        <img className="logoUI" src={logo} alt="logoUI" />
                    </a>
                </div>
                Scroll to start
            </div>            
        </div>
    )
}
export default Homepage;