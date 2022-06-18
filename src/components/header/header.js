import React from "react";


const Header=()=>(

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
)

export default Header;