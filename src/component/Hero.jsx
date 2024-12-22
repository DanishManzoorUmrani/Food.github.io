import React from 'react';

const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="heroone">
                    <div className="herotext">
                        <h1>Delicious & Affordable</h1>
                        <h1 style={{backgroundColor:"blue", color:"White" ,display:"inline-block"}}> <i> Meals Near You.</i></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button> Order Now</button>
                    </div>
                    <div className="herocard">
                        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80" alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
