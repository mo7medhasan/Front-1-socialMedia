import React , { useContext } from 'react';

import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import Messenger from './pages/messenger/Messenger';
import { AuthContext } from './context/AuthContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
  Navigate  ,  
} from "react-router-dom";


function App() {
  const { user }=useContext(AuthContext)
  return (<>
 
      <Router>

    <Routes>
          
          <Route exact  path="/login" element= {user? <Navigate   to="/" />:<Login />} />
          
          <Route exact path="/register" element= {user? <Navigate   to="/" />:<Register />} />
          <Route exact path="/messenger" element= {!user? <Navigate   to="/" />:<Messenger />} />
          
          <Route exact path="/profile/:username" element={<Profile />} />
            
          <Route exact path="/" element=
          {user? <Home /> : <Register/>}
        />
         
        </Routes>
      
    </Router>
    </>
  );
}

export default App;
