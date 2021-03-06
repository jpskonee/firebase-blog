import React, {useContext} from 'react'
import Container from '@material-ui/core/Container';
import BrandName from './BrandName';
import { Link } from "react-router-dom";

import {AuthContext} from "../components/State-Management/AuthState"


const NavBar = ({ login, setLogin }) => {
    
    const data = useContext(AuthContext);

    let num = data.numBlog;

    console.log(num);

    return (
        <nav>
            <Container maxWidth="md" className="nav-bar">
                <Link to="/home"> <BrandName />  </Link>  
                <div className="btn">
                    
                    <div className="sign-in"> <Link to="/blog"> Blog </Link> </div>
                    <div  className="sign-in"> <Link to="/aboutus"> About Us  </Link>  </div> 
                    <div  className="sign-in"> <Link to="/compose"> Compose BLog </Link>  </div> 
                    <div  className="join-now"> <Link to="/login">  Join now </Link></div>
                </div>
            </Container>
            
        </nav>
        
    )
}

export default NavBar
