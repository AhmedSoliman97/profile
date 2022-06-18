import React, { Component } from 'react';
import './App.css';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Projects from './components/projects/projects';
import Services from './components/services/services';


class App extends Component {
    
    state={
        ID:"homeId",
    }
    clickedHandelr(id){
        this.setState({ID:id})
    }
    render() {
    return (
      <div>  

        <nav className="navbar navbar-dark navbar-expand-sm fixed-top">
                <div className="container">
                    <a href="/" className="logo mr-5">Ahmed</a>
                    <button className="navbar-toggler" id="collapseButton" type="button" data-toggle="collapse" data-target="#Navbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        
                    <div className="collapse navbar-collapse" id="Navbar" >
                        <ul className="navbar-nav mr-auto">
                            <li className={this.state.ID === "homeId" ?"nav-item active":"nav-item"}    onClick={()=>this.clickedHandelr("homeId")}><a className="nav-link" href="/"><span className="fa fa-home fa-lg"></span>Home </a></li>
                            <li className={this.state.ID === "projectsId"?"nav-item active":"nav-item"}    onClick={()=>this.clickedHandelr("projectsId")}><a className="nav-link" href="#projects"><i className="fa fa-folder fa-lg"></i> Projects </a></li>
                            <li className={this.state.ID === "contactId"?"nav-item active":"nav-item"}    onClick={()=>this.clickedHandelr("contactId")}><a className="nav-link" href="#contact"><span className="fa fa-list fa-lg"></span>Contact </a></li>
                            <li className={this.state.ID === "resumeId"?"nav-item active":"nav-item"}    onClick={()=>this.clickedHandelr("resumeId")}><a className="nav-link" href="https://drive.google.com/file/d/1QWUV2IydNUmLq1Fur3w6Gx9_OrsikdCH/view?usp=sharing"><i className="fa fa-file fa-lg"></i>Resume </a></li>
                                
                        </ul>
                        
                    </div>
                        
                </div>
        </nav>

        <Header/>
        <hr/>
        <Services/>
        <hr/>
        <Projects/>
        <hr/>
        <Contact/>
        <Footer/>

    </div>

    );
  }
}

export default App;
