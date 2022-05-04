import React, { Component } from 'react';
import './App.css';


class App extends Component {
  
    state={
        ID:'homeId'
    }
    clickHandelr=(id)=>{
        this.setState({ID:id})
    }

    render() {
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand-sm fixed-top">
            <div className="container">
                <a href="#" className="logo mr-5">Ahmed</a>
                <button className="navbar-toggler" id="collapseButton" type="button" data-toggle="collapse" data-target="#Navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    
                <div className="collapse navbar-collapse" id="Navbar" >
                    <ul className="navbar-nav mr-auto">
                        <li className={this.state.ID === "homeId" ?"nav-item active":"nav-item"}    onClick={()=>this.clickHandelr("homeId")}><a className="nav-link" href="#"><span className="fa fa-home fa-lg"></span>Home </a></li>
                        <li className={this.state.ID === "projectsId"?"nav-item active":"nav-item"}    onClick={()=>this.clickHandelr("projectsId")}><a className="nav-link" href="#projects"><i className="fa fa-folder fa-lg"></i> Projects </a></li>
                        <li className={this.state.ID === "contactId"?"nav-item active":"nav-item"}    onClick={()=>this.clickHandelr("contactId")}><a className="nav-link" href="#contact"><span className="fa fa-list fa-lg"></span>Contact </a></li>
                        <li className={this.state.ID === "resumeId"?"nav-item active":"nav-item"}    onClick={()=>this.clickHandelr("resumeId")}><a className="nav-link" href="https://drive.google.com/file/d/1J4rwEzhZOm55lljwv_NEkIep3IykKE6V/view?usp=sharing"><i className="fa fa-file fa-lg"></i>Resume </a></li>
                            
                    </ul>
                       
                </div>
                    
            </div>
        </nav>

        <header className="jumbotron">
            <div className="container">
            
                <div className="row">
                    <h2 className="col-12 col-sm-5">Hi, I'm Ahmed Soliman<br/></h2>
                </div>
                <div className="row">
                    <h3 className="col-12" >Fullstack Developer(Frontend Specialist)</h3>
                </div>
                <div className="row ">
                    <a role="button" href="#projects" className="btn btn-primary btn-lg main-btn">View my work</a>
                </div> 
                <div className="row social-icons">
                    <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3BFmSrl2iTTwud2wOx7tXLWQ%3D%3D"><i className="fa-brands fa-linkedin fa-shake"></i></a>
                    <a href="https://github.com/AhmedSoliman97"><i className="fa-brands fa-github fa-shake"></i></a>
                    <a href="https://www.facebook.com/ahmed.soliman.37669528/"><i className="fa-brands fa-facebook fa-shake"></i></a>
                    <a href="https://www.instagram.com/a7med_soly/"><i className="fa-brands fa-instagram fa-shake"></i></a>
                </div>
                
            </div>
        </header>
        <hr/>

        <div className="container">
        <h2 className="row title">Services</h2>
        <div className="row justify-content-center">
            
            <div className="col-10 col-sm-3 card" style={{width: '18rem'}}>
                <a  className="card-img-top"><i className="fa-brands fa-js-square"></i></a>
                <div className="card-body">
                  <h5 className="card-title">Fullstack Developer</h5>
                  <p className="card-text">Building Apps using React as a framework and Express for Node interact with MongoDB as a DataBase</p>
                </div>
            </div>

            <div className="col-10 col-sm-3 card" style={{width: '18rem'}}>
                <a  className="card-img-top"><i className="fa-brands fa-react"></i></a>
                <div className="card-body">
                  <h5 className="card-title">React Developer</h5>
                  <p className="card-text">Building Apps using React as a framework included packages like React-Router, Redux, axios, ReduxSaga and styledComponents, also using BootStrap, jQuery and SASS.</p>
                </div>
            </div>
            
            <div className="col-10 col-sm-3 card" style={{width: '18rem'}}>
                <a  className="card-img-top"><i className="fa-solid fa-microchip"></i></a>
                <div className="card-body">
                  <h5 className="card-title">Embedded System Engineer</h5>
                  <p className="card-text">Building Embedded System from scratch as a software then simulated then apply it on a hardware modules </p>
                </div>
            </div>
        </div>  
        </div>
        <hr/>

        <div className="container-fluid" id="projects" >
        <h2 className="row title" >Projects</h2>
        <div className="row row-cols-1 row-cols-sm-6 justify-content-center" >
           
            <div className="col card" style={{ backgroundColor: 'orange'}}>
                <a  className="card-img-top"><i className="fa fa-burger"></i></a>
                <div className="card-body">
                  <h5 className="card-title">Burger App</h5>
                  <p className="card-text">Fullay App to order burger with any shape any number  </p>
                  <button className="btn btn-secondary"><i className="fa-brands fa-github fa-spin"></i><a style={{textDecoration: 'none',color: 'white'}} href="https://github.com/AhmedSoliman97/Burger-App">code</a></button> <button className="btn btn-success animate__animated animate__swing animate__infinite">start</button>
                </div>
            </div>
            
            <div className="col card" style={{backgroundColor: 'darkcyan'}}>
                <a  className="card-img-top"><i className="fa fa-image" ></i></a>
                <div className="card-body">
                  <h5 className="card-title">Mygram</h5>
                  <p className="card-text">Fullay App to upload user photos and videoes also every user has his own data to show in a very good view</p>
                  <button className="btn btn-secondary"><i className="fa-brands fa-github fa-spin"></i><a style={{textDecoration: 'none', color: 'white'}} href="https://github.com/AhmedSoliman97/Mygram">code</a></button> <button className="btn btn-success animate__animated animate__wobble animate__infinite"><a style={{textDecoration: 'none', color: 'white'}} href="https://gallery-project-ef964.web.app/">start</a></button>
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
                  <button className="btn btn-secondary"><i className="fa-brands fa-github fa-spin"></i><a style={{textDecoration: 'none',color: 'white'}} href="https://github.com/AhmedSoliman97/Clothes-Shop">code</a></button> <button className="btn btn-success animate__animated animate__heartBeat animate__infinite"><a style={{textDecoration: 'none',color: 'white'}} href='https://portfolio-88443.web.app/'>start</a></button>
                </div>
            </div>   
        </div>
        </div>
        <hr/>
        
        <div className="container" id="contact">
        <h2 className="row title">Let's work together</h2>
        <div className="row justify-content-center">

            <div className="card col-5 col-sm-3" >
                <a  className="card-img-contact"><i className="fas fa-phone"></i></a>
                <div className="card-body info">
                    <h3>Phone</h3>
                    <p>+201156646277</p>
                    <p>+201554103616</p>
                </div>
            </div>

            <div className="card col-5 col-sm-3">
                <a  className="card-img-contact"><i className="fas fa-envelope"></i></a>
                <div className="card-body info">
                    <h3>Email</h3>
                    <p>ahmedsoliman9977@gmail.com</p>
                </div>
            </div>
        </div>
        </div>

        <footer className="footer" >
        <p className="footer-title">Copyrights@Ahmed Soliman</p>
        <div className="social-icons">
            <a className="btn btn-social-icon btn-danger" style={{marginRight:'2px'}} href="mailto:ahmedsoliman9977@gmail.com"><i className="fa fa-envelope fa-lg"></i></a>
            <a className="btn btn-social-icon btn-facebook" style={{marginRight:'2px'}} href="https://www.facebook.com/ahmed.soliman.37669528/"><i className="fa-brands fa-facebook-f fa-lg"></i></a>
            <a className="btn btn-social-icon btn-linkedin" style={{marginRight:'2px'}} href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3BFmSrl2iTTwud2wOx7tXLWQ%3D%3D"><i className="fa-brands fa-linkedin-in fa-lg"></i></a>
            <a className="btn btn-social-icon btn-github" style={{marginRight:'2px'}} href="https://github.com/AhmedSoliman97"><i className="fa-brands fa-github fa-lg"></i></a>
        </div>
        </footer>

    </div>

    );
  }
}

export default App;
