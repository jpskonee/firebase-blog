import React, { useState } from 'react';
import { app } from "../../base";
import firebase from "firebase";

import { Alert, AlertTitle } from '@material-ui/lab';





const fwtBlog = app.firestore().collection("fwtBlog");

const Compose = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [img, setImg] = useState(null);

    const [doneImgUpload, setDoneImgUpload] = useState(false);
    const [sentToDB, setSentToDB] = useState(false)

    const handleImg = async (e) => {
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setImg(await fileRef.getDownloadURL());
        setDoneImgUpload(true);
    }

    const sendData = async (e) => {
        e.preventDefault();
        await fwtBlog.doc().set({
            title: title,
            content: content,
            photo: img,
            time:  new Date().toLocaleString(),
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        setSentToDB(true);
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        
    }

    return (
        <div className="form-page">
            <h1>Compose a Blog Page</h1>
             
            <div className="success-alert">
                {sentToDB && <Alert severity="success">
                 <AlertTitle>Blog Post Created</AlertTitle>
                   The blog post has been created in the DB — <strong>View in Home</strong>
                </Alert>}
            </div>
           
            <form onSubmit={sendData}>
                <div>
                    <input
                    type="file"
                    onChange={handleImg}
                    />
                </div>

                <div>
                     <input
                    value={title}
                    type="text"
                    placeholder="Title of Blog"
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    />
                </div>
                <div>
                <textarea
                    value={content}
                    onChange={(e) => {
                        setContent(e.target.value)
                    }}
                        placeholder="Enter Content"></textarea>
                </div>
                <div>
                   {doneImgUpload &&  <button type="submit"> Send </button>}
                </div>
            </form>
        </div>
    )
}

export default Compose
