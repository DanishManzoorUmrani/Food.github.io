import React from 'react';

const Customers = () => {
    const customer=[{
        img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
        detls:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
        Name:"Charlotte Hale"
    },
    {
        img:"https://cdn.pixabay.com/photo/2016/09/24/03/20/man-1690965_640.jpg",
        detls:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
        Name:"Adam Cuppy"
    },
    {
        img:"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
        detls:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
        Name:"Steven Marcetti"
    },
]
    return (
        <>
            <div className="customers">
                <div className="costomer">
                    <span>
                        <span>Customers</span>
                        <span style={{backgroundColor:"blue",color:"white",fontStyle: "italic",marginLeft:"5px"}}> Love Us.</span>
                    </span>
                    <div className="customerlist">
                        {
                            customer.map((items)=>{
                                return(
                                    <>
                                     <img src={items.img} alt="" />
                                     <p>{items.detls}</p>
                                     <h5>{items.Name}</h5>
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

export default Customers;
