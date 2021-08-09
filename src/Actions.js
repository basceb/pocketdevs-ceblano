import { useState } from "react";

export const Actions = () => {
  let [users, setUsers] = useState([]);
  let [userLength, setUserLength] = useState(null);
  const [isAuth, userHasAuth] = useState(false);
  const [username, setUsername] = useState("");
  var [code, setCode] = useState({
    number: null,
    message: ""
  });

  const resetState = () => {
    setCode({code, number: null});  
    setCode({code, message: ""});  
  }

  const insertUser = (newUser) => {
    fetch("http://localhost/php-react/insert-user.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {      
        setCode({code, number: data.code}); 
        console.log(data.msg); 
        setCode({code, message: data.msg});  
        if (data.success === 1) {                     
          setUsers([
            {
              id: data.id,
              ...newUser,
            },
            ...users,
          ]);
          setUserLength(true);
          userHasAuth(true);
          setUsername(data.user);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

 
  const loginUser = (newUser) => {
    fetch("http://localhost/php-react/login-user.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }) 
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCode({code, number: data.code});  
        setCode({code, message: data.msg})
        if(data.code === 1){
          userHasAuth(true);
          setUsername(data.user);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    users,
    insertUser,
    userLength,
    loginUser,
    code, 
    isAuth,
    resetState,
    username,
    userHasAuth
  };
};