import React, { useEffect, useState} from 'react';
import moment from "moment";
import {app} from "../../base"

import { Container } from '@material-ui/core';


const fwtBLog = app.firestore().collection("fwtBlog");

const SinglePost = ({ match }) => {

    const [searchedPost, setSearchedPost] = useState([]);

    const fetchBlogPost = async () => {
        const post = await fwtBLog.doc(match.params.id).get();
        setSearchedPost(await post.data());
    }

    useEffect(() => {
        fetchBlogPost();
    }, [])

    return (
        <div className="single-post" style={{ marginBottom: "10rem"}}>
            

            <Container maxWidth="md">
                        <h2>Welcome to Single Home </h2>
                        {<div key={searchedPost.id}>
                        <h4> {searchedPost.title}</h4>
                        <img src={searchedPost.photo} alt="blog-banner" height="300px" width="280px" />
                        <p> {searchedPost.content} </p>
                        <div> {moment(searchedPost.time).fromNow()}</div>
            </div> }
            </Container>
            
        </div>
    )
}

export default SinglePost;
            
