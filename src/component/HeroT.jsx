import React from 'react';

const HeroT = () => {
    return (
        <>
            <div className="hero herot">
                <div className="heroone">
                    <div className="herocard">
                        <img src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80" alt="" />
                    </div>
                    <div className="herotext">
                        <h1>We've been serving for</h1>
                        <h1 style={{ backgroundColor: "blue", color: "White", display: "inline-block" }}> <i> over 5 years.</i></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button> Latest Offer</button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default HeroT;
