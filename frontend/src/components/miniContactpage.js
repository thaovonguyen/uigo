import React from 'react';
import '../styles/minipage.css';
import '../styles/fonts/simple-line-icons.min.css'
import '../styles/fonts/font-awesome.min.css'
function MiniContactpage(props) {
    const { prime, secondary, sup1, sup2, sup3 } = props;
    const bodyStyle = {
        backgroundColor: prime, // Set background color based on the prop
        color: secondary, // Set text color based on the prop
    };
    const tabStyle1 = { 
        color: sup1, // Set tab color based on the prop
    };
    const tabStyle2 = { 
        color: sup2, // Set tab color based on the prop
    };
    const headercolor={
        height: '300px',
        backgroundColor: sup3,
        backgroundPosition: 'center center', // Căn giữa theo chiều ngang và dọc
        backgroundSize: 'cover' // Hiển thị hình nền để che hết khu vực header
    }
    return (
        <>
            <div class="text-center text-white call-to-action" style={headercolor}>
                <div class="overlay"></div>
                <div class="container">
                    <div class="container d-flex flex-column justify-content-center align-items-center" >
                        <div class="col-xl-9 mx-auto position-relative">
                            <h2 class="mb-4">Ready to get started? Sign up now!</h2>
                        </div>
                        <div class="col-md-10 col-lg-8 col-xl-7 mx-auto position-relative">
                            <form>
                                <div class="row">
                                    <div class="col-12 col-md-9 mb-2 mb-md-0"><input class="form-control form-control-lg" type="text" placeholder="Enter your email..." /></div>
                                    <div class="col-12 col-md-3"><button class="btn btn-primary btn-lg" type="submit">Sign up!</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="bg-light footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 text-center text-lg-start my-auto h-100">
                            <ul class="list-inline mb-2">
                                <li class="list-inline-item"><a href="#">About</a></li>
                                <li class="list-inline-item"><span>⋅</span></li>
                                <li class="list-inline-item"><a href="#">Contact</a></li>
                                <li class="list-inline-item"><span>⋅</span></li>
                                <li class="list-inline-item"><a href="#">Terms of &nbsp;Use</a></li>
                                <li class="list-inline-item"><span>⋅</span></li>
                                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
                            </ul>
                            <p class="text-muted small mb-4 mb-lg-0">© Brand 2024. All Rights Reserved.</p>
                        </div>
                        <div class="col-lg-6 text-center text-lg-end my-auto h-100">
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item"><a href="#"><i class="fa fa-facebook fa-2x fa-fw"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fa fa-twitter fa-2x fa-fw"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fa fa-instagram fa-2x fa-fw"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default MiniContactpage;