import React from 'react';

const Services = ()=>(
    <div className="container">
        <h2 className="row title">Services</h2>
        <div className="row justify-content-center">
            
            <div className="col-10 col-sm-3 card" style={{width: '18rem',backgroundColor:'#ccc'}}>
                <a  className="card-img-top"><i className="fa-brands fa-js-square"></i></a>
                <div className="card-body">
                  <h5 className="card-title">Fullstack Developer</h5>
                  <p className="card-text">Building Apps using React as a framework and Express for Node interact with MongoDB as a DataBase</p>
                </div>
            </div>

            <div className="col-10 col-sm-3 card" style={{width: '18rem',backgroundColor:'#ccc'}}>
                <a  className="card-img-top"><i className="fa-brands fa-react"></i></a>
                <div className="card-body">
                  <h5 className="card-title">React Developer</h5>
                  <p className="card-text">Building Apps using React as a framework included packages like React-Router, Redux, axios, ReduxSaga and styledComponents, also using BootStrap, jQuery and SASS.</p>
                </div>
            </div>
            
            <div className="col-10 col-sm-3 card" style={{width: '18rem',backgroundColor:'#ccc'}}>
                <a  className="card-img-top"><i className="fa-solid fa-microchip"></i></a>
                <div className="card-body">
                  <h5 className="card-title">Embedded System Engineer</h5>
                  <p className="card-text">Building Embedded System from scratch as a software then simulated then apply it on a hardware modules </p>
                </div>
            </div>
        </div>  
    </div>
);

export default Services;