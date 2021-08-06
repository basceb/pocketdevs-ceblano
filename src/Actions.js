import { useState } from "react";

export const Actions = () => {
  let [users, setUsers] = useState([]);
    //userLength is for showing the Data Loading message.
  let [userLength, setUserLength] = useState(null);
  var [code, setCode] = useState({
    number: null,
    message: ""
  });

  function functionLogin() {
    //create session
    //transfer to logged in state
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
          functionLogin();
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
        console.log("inside fetch");
        setCode({code, number: data.code});  
        setCode({code, message: data.msg});  
        console.log("CODE:" + data.msg);
        if (data.success === 1) {     
          functionLogin();       
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
    code
  };
};