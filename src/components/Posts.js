
import React, { useState, useEffect } from "react";
import { auth, db, storage } from "../firebaseConfig";

import { useAuthState } from "react-firebase-hooks/auth";
//import DownloadArticle from "./Download";
//import { storage} from "./../firebaseConfig";


import axios from 'axios'



export default function Posts() {
  const [articles, setArticles] = useState([]);
  const [user] = useAuthState(auth);
  const [file,setFiles]=useState([]);
  
  
  const fetchData=async()=>{
    return  await axios.get("http://localhost:4000/images").then((res)=>res.data)
  }
  useEffect(()=>{
      fetchData().then((data)=>setFiles(data))
  })
  
  return (
    <div>
      { !user && file.length === 0 ? (
        <p>No articles found!</p>
      ) : (
        file.map(
          (item) => (
            <div className="border mt-3 p-3 bg-light" key={item.Key} >
              <div className="row w-50">
              
                
                  
                    <img
                      src={item}
                      alt="item"
                      style={{ height: 180, width: 180 }}
                    />
                    {
                        user ? <a href={item} target='_blank' download={item} className="btn btn-success">Download</a> : ""
                    }
                    
                    
                    </div>
                    </div>
                    
                   
                  
                  
                  
                  
                  
               
                
                  
                    
                  
                
              
          )    
        )
        
      )}
    </div>
  );
}