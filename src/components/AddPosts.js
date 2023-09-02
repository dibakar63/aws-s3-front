import React, { useState } from "react";
//import { Timestamp, collection, addDoc } from "firebase/firestore";
//import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "./../firebaseConfig";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function AddPosts() {
  const [user] = useAuthState(auth);
  const [image,setImage]=useState('');
    const [file,setFile]=useState('')
   
    const imageUpload=async()=>{
      const form=new FormData();
      form.append('image', image);
      return axios.post('http://localhost:4000/images',form)
    }
    const fileUpload=async()=>{
      const form=new FormData();
      form.append('pdf',file);
      return await axios.post('http://localhost:4000/pdf',form)
    }

  

  

  

  return (
    <div className="border p-3 mt-3 bg-light" style={{ position: "fixed" }}>
      {!user ? (
        <>
          <h2>
            <Link to="/signin">Login to create article</Link>
          </h2>
          {/* Don't have an account? <Link to="/register">Signup</Link> */}
        </>
      ) : (
        <>
          <h2>Upload File</h2>
          <div className="form-group">
            <label htmlFor="">Upload File</label>
            <input
              type="file"
              
              className="form-control"
              
              onChange={(e)=>{setImage(e.target.files[0])}}
            />
            <button onClick={imageUpload} className="btn btn-success">Upload Image</button>
          </div>

          {/* description */}
          <div className="form-group">
          <label htmlFor="">Upload Pdf</label>
          <input
          type="file"
            name="description"
            className="form-control"
            
            onChange={(e)=>{setFile(e.target.files[0])}}
          />
          <button onClick={fileUpload} className="btn btn-success">Upload Pdf</button>
          </div>

         </>

          
          
      )}
    </div>
  );
}