import React, { useState, useEffect, createContext } from "react";
import { app } from "../../base";

const fwtBlog = app.firestore().collection("fwtBlog");

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [blogDB, setBLogDB] = useState([]);
    const [numBlog, setNumBlog] = useState(0);

    const getBlogPosts = async () => {
        const blogPosts = [];
        await fwtBlog.onSnapshot((snapshot) => {
            snapshot.forEach(post => {
                blogPosts.push({...post.data(), id: post.id});
            });
        });
        setBLogDB(blogPosts);
        setNumBlog(blogDB.length);
    }

    
    useEffect(() => {
        getBlogPosts();
    }, [])

    // const [activeUser, setActiveUser] = useState([])

    // useEffect(() => {
    //     app.auth().onAuthStateChanged((user) => {
    //         setActiveUser(user);
    //     });
    // });

    

    return (
        <AuthContext.Provider value={{
            msg: "Hello",
            blogDB: blogDB,
            numBlog: numBlog
        }}>
            {children}
        </AuthContext.Provider>
    )
}