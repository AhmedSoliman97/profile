import React from "react";


const Footer=()=>(

    <footer className="footer" >
        <p className="footer-title">Copyrights@Ahmed Soliman</p>
        <div className="social-icons">
            <a className="btn btn-social-icon btn-danger" style={{marginRight:'2px'}} href="mailto:ahmedsoliman9977@gmail.com"><i className="fa fa-envelope fa-lg"></i></a>
            <a className="btn btn-social-icon btn-facebook" style={{marginRight:'2px'}} href="https://www.facebook.com/ahmed.soliman.37669528/"><i className="fa-brands fa-facebook-f fa-lg"></i></a>
            <a className="btn btn-social-icon btn-linkedin" style={{marginRight:'2px'}} href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3BFmSrl2iTTwud2wOx7tXLWQ%3D%3D"><i className="fa-brands fa-linkedin-in fa-lg"></i></a>
            <a className="btn btn-social-icon btn-github" style={{marginRight:'2px'}} href="https://github.com/AhmedSoliman97"><i className="fa-brands fa-github fa-lg"></i></a>
        </div>
    </footer>
)

export default Footer;