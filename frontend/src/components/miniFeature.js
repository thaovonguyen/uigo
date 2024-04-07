import React from 'react';
import '../styles/minipage.css';
import '../styles/fonts/simple-line-icons.min.css'
import '../styles/fonts/font-awesome.min.css'
function MiniFeature(props) {
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
           <div class="showcase" style={{width: '1200px'}}>
                <div class="container-fluid p-0">
                    <div class="row g-0">
                        <div class="col-lg-6 text-white order-lg-2 showcase-img" style={bodyStyle}><span></span></div>
                        <div class="col-lg-6 my-auto order-lg-1 showcase-text">
                            <h2 style={tabStyle1}>Fully Responsive Design</h2>
                            <p  style={tabStyle2}class="lead mb-0">When you use a theme created with Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                        </div>
                    </div>
                    <div class="row g-0">
                        <div class="col-lg-6 text-white showcase-img" style={bodyStyle}><span></span></div>
                        <div class="col-lg-6 my-auto order-lg-1 showcase-text">
                            <h2 style={tabStyle1}>Updated For Bootstrap 5</h2>
                            <p style={tabStyle2} class="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes are now using Bootstrap 5!</p>
                        </div>
                    </div>
                    <div class="row g-0">
                        <div class="col-lg-6 text-white order-lg-2 showcase-img" style={bodyStyle}><span></span></div>
                        <div class="col-lg-6 my-auto order-lg-1 showcase-text">
                            <h2 style={tabStyle1}>Easy to Use &amp;&nbsp;Customize</h2>
                            <p style={tabStyle2}  class="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MiniFeature;