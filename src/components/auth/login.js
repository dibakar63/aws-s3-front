import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { auth,provider } from "../../firebaseConfig";
import { SignInWithPopup } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
//import "./autn.css"
export default function Register() {
 
  const [value,setValue]=useState('');
  
  useEffect(()=>{
    setValue(localStorage.getItem('email'));
  },[])
  let navigate = useNavigate();

  
  const handleClick=()=>{
    signInWithPopup(auth,provider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem("email",data.user.email);
      navigate("/");
    })
  }
  return (
    <div className="border p-3 bg-light container " style={{ marginTop: 70 }}>
      <h1>Login</h1>
      
      

      
      <br />
      <button className="btn btn-danger ml-5" onClick={handleClick}>Signin with Google</button>
      
    </div>
  );
}