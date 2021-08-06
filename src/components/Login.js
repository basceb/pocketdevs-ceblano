import React, { useState, useContext } from 'react';
import { AppContext } from '../Context';
import './CompStyle.css'
import formVideo from '../media/video_1.mp4'
import schoolLogo from '../etherion.png'

const LoginForm = () => {
  const { loginUser, code } = useContext(AppContext);
  const [newUser, setNewUser] = useState({});
  

  const addNewUser = (e, field) => {
    setNewUser({
      ...newUser, [field]: e.target.value
    }); 
  };

  const submitUser = (e) => {
    e.preventDefault();
    loginUser(newUser)
    e.target.reset();
  };

  return (
    <div className="flex-container">
      <div className="design-container">
        <video controls autoPlay loop muted>
          <source src={formVideo} type="video/mp4"></source>
        </video>
        <img src={schoolLogo} alt="Icon" />
        <h1>Etherion University</h1>
        <p>enter the site here</p>
      </div>
      <div className="container">
        <div className="card"></div>
        <div className="card">
              <div className="error-container">
                {/* Conditional rendering */}
                <span>{code.message}</span>
              </div>  
          <h1 className="title">Login</h1>
          <form className="regForm" onSubmit={submitUser}>
            <div className="input-container">
              <input type="#{type}"
                id="_name"
                onChange={(e) => addNewUser(e, "username")}
                autoComplete="off"
                required
              />
              <label htmlFor="_name">Username</label>
              <div className="bar"></div>
            </div>
            <div className="input-container">
              <input
                type="password"
                id="_password"
                onChange={(e) => addNewUser(e, "password")}
                autoComplete="off"
                required />
              <label htmlFor="_password">Password</label>
              <div className="bar"></div>
            </div>
            <div className="button-container">
              <button type="submit" value="insert"><span>LogIn</span></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;

