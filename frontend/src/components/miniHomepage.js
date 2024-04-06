import React from 'react';
import './miniHomepage.css';

function MiniHomepage(props) {
    const { prime, secondary, sup1, sup2, sup3 } = props;
    const bodyStyle = {
        backgroundColor: prime, // Set background color based on the prop
        color: secondary, // Set text color based on the prop
    };
    const tabStyle = { 
        color: sup1, // Set tab color based on the prop
    };
    return (
        <div className="miniHomepage">
        <div class="container clearfix" style={bodyStyle}>
            <div class="grid_8 omega">
            <ul class="nav">
                <li><a style={tabStyle} href="#">About</a></li>
                <li><a style={tabStyle} href="#">Cupcakes &amp; Prices</a></li>
                <li><a style={tabStyle} href="#">Locations</a></li>
                <li class="last"><a style={tabStyle} href="#">Contact Us</a></li>
            </ul>
            </div>
            <div class="grid_4">
                <img src="https://treehouse-code-samples.s3.amazonaws.com/WWIsland1/stage4/img/logo.gif" alt="Smells Like Bakin"/>
            </div>
            <div id="intro" class="grid_9">
                <h1>Opposites really do attract, especially in our kitchen! We combine unexpected flavors that melt together to create ironically delicious desserts.</h1>
                <p><a href="#" class="btn">Browse Our Cupcakes</a></p>
            </div>

            <div id="featured-cupcake" class="grid_7">
                <h2>Cupcake of the Week</h2>
                <p>This week's featured cupcake is the <a href="#">Avocado Chocolate cupcake</a>. Its strange combo of flavors will kick your taste buds into fiesta mode!</p>
            </div>

            <div id="new-cupcakes" class="grid_5 omega">
                <h2>Fresh Out the Oven</h2>
                <p>Our newest cupcakes are <a href="#">Bacon Me Crazy</a> and <a href="#">Jalapeño So Spicy</a>. </p>
            </div>


            <div class="grid_7">
                <h2>Inside the Kitchen</h2>
                <p>Smells Like Bakin’ started out in the garage of the husband wife duo Allison &amp; Joseph. Allison is the baker, and Joseph found a way for them to make a business out of her tasty treats. Flash forward to today and they have a successful store front, catering business and cupcake truck. </p>
                <p><a href="#" class="btn-small">Read More</a></p>
            </div>

            <div class="grid_5 omega">
            <h2>Get Bakin' with Us</h2>

                <div id="contact">
                    <p>Call us: <span>1-555-CUP-CAKE</span><br/>
                    Email us: <a href="#">bakeon@smellslikebakin.com</a></p>
                </div>


            <p>We announce all of our new flavors first through Facebook &amp; Twitter, and even take requests!</p>
            <a href="https://www.facebook.com/SmellsLikeBakin"><img src="https://treehouse-code-samples.s3.amazonaws.com/WWIsland1/stage4/img/facebook.gif" alt="Facebook"/></a>
            <a href="https://twitter.com/#!/smellslikebakin"><img src="https://treehouse-code-samples.s3.amazonaws.com/WWIsland1/stage4/img/twitter.gif" alt="Twitter"/></a>
            </div>

            <div id="copyright" class="grid_12">
            <   p>&copy; 2012 Smells Like Bakin' Cupcake Company. All Rights Reserved.</p>
            </div>

        </div>
        </div>
    );
}

export default MiniHomepage;