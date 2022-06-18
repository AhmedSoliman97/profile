import React from "react";

const Contact =()=>(

    <div className="container" id="contact">
        <h2 className="row title">Let's work together</h2>
        <div className="row justify-content-center">

            <div className="card col-5 col-sm-3" style={{backgroundColor:'salmon'}}>
                <a  className="card-img-contact"><i className="fas fa-phone"></i></a>
                <div className="card-body info">
                    <h3>Phone</h3>
                    <p>+201156646277</p>
                    <p>+201554103616</p>
                </div>
            </div>

            <div className="card col-5 col-sm-3" style={{backgroundColor:'salmon'}}>
                <a  className="card-img-contact"><i className="fas fa-envelope"></i></a>
                <div className="card-body info">
                    <h3>Email</h3>
                    <p>ahmedsoliman9977@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
)

export default Contact