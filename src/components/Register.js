import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../Context';
import formVideo from '../media/video_1.mp4'
import schoolLogo from '../etherion.png'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Form = () => {
  const history = useHistory();
  const {insertUser, code, resetState} = useContext(AppContext);
  const [error, setError] = useState({
    username_error: "",
    password_error: "",
    confirm_password_error: "",
    submit_error: ""
  });

  const [newUser, setNewUser] = useState({
     username: "",
     password: "",
     confirm_password: ""
  });

  var Validate = (e, field) => {
    var isValid = false;
    var errorMessage = "";
    switch(field){
      case "username": 
        //check username  
        if(e.target.value === ""){
          errorMessage = "";
        } else {
          //Alphanumeric
          if((e.target.value).match(/^(?:[0-9]+[a-zA-Z]|[a-zA-Z]+[0-9])[a-zA-Z0-9]*$/)){
            errorMessage = ""; 
            isValid = true;       
          } else {
            errorMessage = "Username is not alphanumeric";                         
          }  
        }
        //Always set the error message
        setError({
          error, username_error: errorMessage
        });             
        break;
      case "password":
        //check password
        if(e.target.value === ""){
            errorMessage = "";
        } else {
          if((e.target.value).match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)){
            isValid = true;
          } else {
            errorMessage = "Must have at least 1 lowercase, 1 uppercase, 1 number and minimum 8 characters";
          }
        }
        setError({
          error, password_error: errorMessage
        });  
        break;
      case "confirm_password":
        //check confirm password
        if(e.target.value === ""){
            errorMessage = "";
        } else {
          if(e.target.value === newUser.password){
            isValid = true;
          } else {
            errorMessage = "Confirm Password does not match";
          }
        }
        setError({
          error, confirm_password_error: errorMessage
        });  
        break;
      default: 
        break;
    }
    return [isValid, errorMessage];
  };

  const addNewUser = (e, field) => {
    var [isValid] = Validate(e,field);
    if(isValid){
      setNewUser({
        ...newUser, [field]: e.target.value
      });
    } 
  };

  const submitUser = (e) => {
    e.preventDefault();
    if(newUser.password === newUser.confirm_password){
      insertUser(newUser);
    }
    e.target.reset();  
  };

  useEffect(() => {
    if(code.number === 1){
      resetState();
      history.push("/users");
    }    
  }, [code, history, resetState])

  return (  
    <div className="flex-container" onLoad={resetState}>
      <div className="design-container">
        <video controls autoPlay loop muted>
          <source src={formVideo} type="video/mp4"></source>
        </video>
        <img src={schoolLogo} alt="Icon" />
        <h1>Etherion University</h1>
        <p>Be part of our community</p>
      </div>
      <div className="container">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">Register</h1>
          <form className="regForm" onSubmit={submitUser}>
            <div className="input-container">
              <input type="#{type}"
                id="_name"
                onBlur={(e) => addNewUser(e, "username")}
                autoComplete="off"
                required
              />
              <label htmlFor="_name">Username</label>
              <div className="bar"></div>   
              <div className="error-container">
                {/* Conditional rendering */}
                <p>{error.username_error}</p>
              </div>                           
            </div>
            <div className="input-container">
              <input
                type="password"
                id="_password"
                onBlur={(e) => addNewUser(e, "password")}
                autoComplete="off"
                required />           
              <label htmlFor="_password">Password</label>                      
              <div className="bar"></div>
              <div className="error-container">
                {/* Conditional rendering */}
                <p>{error.password_error}</p>
              </div> 
            </div>
            <div className="input-container">
              <input
                type="password"
                id="_confirm_password"
                 onBlur={(e) => addNewUser(e, "confirm_password")} 
                autoComplete="off"
                required />
              <label htmlFor="_confirm_password">Confirm Password</label>          
              <div className="bar"></div>
              <div className="error-container">
                {/* Conditional rendering */}
                <p>{error.confirm_password_error}</p>
              </div> 
            </div>
            <div className="button-container">
              <button type="submit" value="insert"><span>Sign Up</span></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Form;

