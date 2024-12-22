import React from 'react';

const Amazing = () => {
    const amazing = [{
        img: "https://treact.owaiskhan.me/static/media/shop-icon.048628c95dd89e631ac8c652d04238fb.svg",
        name: 230 + "+ Location",

    },
    {
        img: "https://treact.owaiskhan.me/static/media/chef-icon.866e076bd2347712ef1d5cb77189d5fb.svg",
        name: "Professional Chefs",

    },
    {
        img: "https://treact.owaiskhan.me/static/media/celebration-icon.0d9bb9633fcda75b7632a11eaf12bbac.svg",
        name: "Birthday Catering",

    },]
    return (
        <>
            <div className="amazing">
                <div className="amz">
                    <span>
                        <span>Amazing </span>
                        <span style={{backgroundColor:"blue", color:"white" ,fontStyle:"italic"}}>Services .</span>
                    </span>
                    <div className="amazingcard">
                        {
                            amazing.map((items) => {
                                return (
                                    <>
                                        <div className="amzcard">
                                            <img src={items.img} alt="" />
                                            <h1>{items.name}</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                            <a href="#">Learn More</a>

                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    );
}

export default Amazing;
