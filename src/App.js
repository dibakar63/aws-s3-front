
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/auth/login";
import Posts from './components/Posts'
import AddPosts from './components/AddPosts'
function App() {
  return (
    <div className="container">
      
        <Routes>
          
          <Route path="/signin" element={<Login />} />
          
          <Route
            path="/"
            element={
              <div className="row mt-5">
                <div className="col-md-8">
                  <Posts />
                </div>
                <div className="col-md-4">
                  <AddPosts />
                </div>
              </div>
            }
          />
        </Routes>
        <Navbar />
      
    </div>
  );
}
export default App;
