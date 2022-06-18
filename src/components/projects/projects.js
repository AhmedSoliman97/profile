import React from "react";


const Projects =()=>(

    <div className="container-fluid" id="projects" >
        <h2 className="row title" >Projects</h2>
        <div className="row row-cols-1 row-cols-sm-6 justify-content-center" >
           
            <div className="col card" style={{ backgroundColor: 'orange'}}>
                <a  className="card-img-top"><i className="fa fa-burger"></i></a>
                <div className="card-body">
                  <h5 className="card-title">Burger App</h5>
                  <p className="card-text">Fullay App to order burger with any shape any number  </p>
                  <button className="btn btn-secondary"><i className="fa-brands fa-github fa-spin"></i><a style={{textDecoration: 'none',color: 'white'}} href="https://github.com/AhmedSoliman97/Burger-App">code</a></button> <button className="btn btn-success animate__animated animate__swing animate__infinite"><a style={{textDecoration: 'none', color: 'white'}} href="https://burger-ba1c2.firebaseapp.com/">start</a></button>
                </div>
            </div>
            
            <div className="col card" style={{backgroundColor: 'darkcyan'}}>
                <a  className="card-img-top"><i className="fa fa-image" ></i></a>
                <div className="card-body">
                  <h5 className="card-title">Mygram</h5>
                  <p className="card-text">Fullay App to upload user photos and videoes also every user has his own data to show in a very good view</p>
                  <button className="btn btn-secondary"><i className="fa-brands fa-github fa-spin"></i><a style={{textDecoration: 'none', color: 'white'}} href="https://github.com/AhmedSoliman97/Mygram">code</a></button> <button className="btn btn-success animate__animated animate__wobble animate__infinite"><a style={{textDecoration: 'none', color: 'white'}} href="https://gallery-project-ef964.firebaseapp.com/">start</a></button>
                </div>
            </div>
            <div className="col card" style={{backgroundColor: 'rgb(220, 47, 20)' }}>
                <a  className="card-img-top"><i className="fa fa-shirt"></i></a>
                <div className="card-body">
                  <h5 className="card-title">Clothes Shop</h5>
                  <p className="card-text">Clothes market to choose from and added to your bag</p>
                  <button className="btn btn-secondary"><i className="fa-brands fa-github fa-spin"></i><a  style={{textDecoration: 'none',color: 'white'}} href="https://github.com/AhmedSoliman97/Clothes-Shop">code</a></button> <button className="btn btn-success animate__animated animate__jello animate__infinite">start</button>
                </div>
            </div>
            <div className="col card" >
                <a  className="card-img-top"><i className="fa fa-address-card"></i></a>
                <div className="card-body">
                  <h5 className="card-title">PortFolio</h5>
                  <p className="card-text">Portfolio model used to show skills for a user</p>
                  <button className="btn btn-secondary"><i className="fa-brands fa-github fa-spin"></i><a style={{textDecoration: 'none',color: 'white'}} href="https://github.com/AhmedSoliman97/profile">code</a></button> <button className="btn btn-success animate__animated animate__heartBeat animate__infinite"><a style={{textDecoration: 'none',color: 'white'}} href='https://portfolio-88443.firebaseapp.com/'>start</a></button>
                </div>
            </div>  
            <div className="col card" style={{ backgroundColor: 'rgb(197, 220, 23)'}}>
                <a  className="card-img-top"><i className="fa fa-cloud-sun"></i></a>
                <div className="card-body">
                  <h5 className="card-title">Weather Forecast</h5>
                  <p className="card-text">Weather details about where you are and the arounded regions in the country</p>
                  <button className="btn btn-secondary"><i className="fa-brands fa-github fa-spin"></i><a style={{textDecoration: 'none',color: 'white'}} href="https://github.com/AhmedSoliman97/weather_app">code</a></button> <button className="btn btn-success animate__animated animate__heartBeat animate__infinite"><a style={{textDecoration: 'none',color: 'white'}} href='https://weather-61be1.firebaseapp.com/'>start</a></button>
                </div>
            </div> 
        </div>
    </div>
);

export default Projects;