import { Container } from '@material-ui/core';
import React, { useContext } from 'react';
import moment from "moment"
import { AuthContext } from "../State-Management/AuthState";
import { Link } from "react-router-dom";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const BlogHome = () => {

    const data = useContext(AuthContext);

    

    const blogDB = data.blogDB;

    return (
        <Container maxWidth="lg">
            <div>
                 <h2>Welcome Blog Home </h2>
                <div className="single-post">
                    {blogDB.map((post) => {
                        return (
                            <div key={post.id}>
                                <h2> {post.title}</h2>
                                <img src={post.photo} alt="blog-banner" height="300px" width="280px"/>
                                <p> {post.content.slice(0, 100)} ... <br />
                                    <Link to={`/posts/${post.id}`}>
                                        read more | Method: New Page  
                                    </Link> </p>
                                
                                <div >
                                    <Accordion style={{width: "98%", maxHeight:"20rem", overflow:"scroll"}}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                    <Typography >Read More </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        {post.content}
                                    </Typography>
                                    </AccordionDetails>
                                    </Accordion>
                                </div>
                                <div> {moment(post.time).fromNow()}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Container>
    )
}

export default BlogHome;
