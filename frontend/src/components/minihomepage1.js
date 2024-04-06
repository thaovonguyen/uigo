import React from 'react';
import '../styles/minipage.css';

function MiniHomepage1(props) {
    const { prime, secondary, sup1, sup2, sup3 } = props;
    const bodyStyle = {
        backgroundColor: prime, // Set background color based on the prop
        color: secondary, // Set text color based on the prop
    };
    const tabStyle = { 
        color: sup1, // Set tab color based on the prop
    };
    return (
        <>
            <nav class="navbar navbar-expand navigation-clean}" style={bodyStyle}>
                <div class="container"><a class="navbar-brand" href="#"  style={tabStyle}>Brand</a><button style={bodyStyle}></button>
                    <div class="collapse navbar-collapse" id="navcol-1"><a class="btn ms-auto "style={bodyStyle} role="button" href="#">Sign In</a></div>
                </div>
            </nav>
            <header class="text-center text-white masthead" style={bodyStyle}>
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-9 mx-auto position-relative">
                            <h1 class="mb-5" style={tabStyle}>Build a landing page for your business or project and generate more leads!</h1>
                        </div>
                        <div class="col-md-10 col-lg-8 col-xl-7 mx-auto position-relative">
                            <form>
                                <div class="row">
                                {/* <div className="col-12 col-md-9 mb-2 mb-md-0">
                                    <input className="form-control form-control-lg" placeholder="Enter your email..." />
                                </div> */}
                                    <div class="col-12 col-md-3"><button class="btn btn-lg" type="submit" style={bodyStyle}>Sign up!</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
            <section class="text-center bg-light features-icons">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                                <div class="d-flex features-icons-icon"><i class="icon-screen-desktop m-auto" style={tabStyle} data-bss-hover-animate="pulse"></i></div>
                                <h3>Fully Responsive</h3>
                                <p class="lead mb-0">This theme will look great on any device, no matter the size!</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                                <div class="d-flex features-icons-icon"><i class="icon-layers m-auto text-primary" data-bss-hover-animate="pulse"></i></div>
                                <h3>Bootstrap 5 Ready</h3>
                                <p class="lead mb-0">Featuring the latest build of the new Bootstrap 5 framework!</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                                <div class="d-flex features-icons-icon"><i class="icon-check m-auto text-primary" data-bss-hover-animate="pulse"></i></div>
                                <h3>Easy to Use</h3>
                                <p class="lead mb-0">Ready to use with your own content, or customize the source files!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MiniHomepage1;