import React from 'react';
import '../styles/minipage.css';
import '../styles/fonts/simple-line-icons.min.css'
import '../styles/fonts/font-awesome.min.css'
import '../styles/bootstrap.min.css'
function MiniHomepage1(props) {
    const { prime, secondary, sup1, sup2, sup3 } = props;
    const bodyStyle = {
        backgroundColor: secondary, // Set background color based on the prop
        color: prime, // Set text color based on the prop
    };

    const bodyStyle1 = {
        backgroundColor: secondary, // Set background color based on the prop
        color: sup1, // Set text color based on the prop
    };

    const tabStyle1 = { 
        color: sup1, // Set tab color based on the prop
    };
    const tabStyle2 = { 
        color: sup2, // Set tab color based on the prop
    };

    const tabStyle3 = {
        color: sup3, // Set tab color based on the prop
    };

    const headercolor={
        // height: '300px',
        backgroundColor: prime,
        // backgroundPosition: 'center center', // Căn giữa theo chiều ngang và dọc
        // backgroundSize: 'cover' // Hiển thị hình nền để che hết khu vực header
    }
    return (
        <>
            <nav class="navbar" style={bodyStyle}>
                <div class="container"><a class="navbar-brand" href="#"  style={tabStyle1}>Brand</a><button data-bs-toggle style={bodyStyle}></button>
                    <div class="collapse navbar-collapse" id="navcol-1"><a class="btn ms-auto "style={bodyStyle} role="button" href="#">Sign In</a></div>
                </div>
            </nav>
            <header class="text-center text-white masthead" style={headercolor}>
                <div class="overlay"></div>
                <div class="container" id="minipagecontainer">
                    <div class="row">
                        <div class="col-xl-9 mx-auto position-relative ">
                            <h1 class="mb-5" style={tabStyle1}>Build a landing page for your business or project and generate more leads!</h1>
                        </div>
                        <div class="col-md-10 col-lg-8 col-xl-7 mx-auto position-relative">
                            <form>
                                <div class="row">
                                <div className="col-12 col-md-9 mb-2 mb-md-0">
                                    <input className="form-control form-control-lg" type="text" placeholder="Enter your email..." />
                                </div>
                                    <div class="col-12 col-md-3"><button class="btn btn-lg" type="submit" style={bodyStyle1}>Sign up!</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
            <section class="text-center bg-light features-icons">
                <div class="lcontainer">
                    <div class="row" >
                        <div class="col-lg-4">
                            <div class="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                                <div class="d-flex features-icons-icon"><i class="icon-screen-desktop m-auto" style={tabStyle3} data-bss-hover-animate="pulse"></i></div>
                                <h3 style={tabStyle3}>Fully Responsive</h3>
                                <p class="lead mb-0" style={tabStyle3}>This theme will look great on any device, no matter the size!</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                                <div class="d-flex features-icons-icon"><i class="icon-layers m-auto" style={tabStyle3} data-bss-hover-animate="pulse"></i></div>
                                <h3 style={tabStyle3}>Bootstrap 5 Ready</h3>
                                <p class="lead mb-0" style={tabStyle3}>Featuring the latest build of the new Bootstrap 5 framework!</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                                <div class="d-flex features-icons-icon"><i class="icon-check m-auto" style={tabStyle3} data-bss-hover-animate="pulse"></i></div>
                                <h3 style={tabStyle3}>Easy to Use</h3>
                                <p class="lead mb-0" style={tabStyle3}>Ready to use with your own content, or customize the source files!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MiniHomepage1;