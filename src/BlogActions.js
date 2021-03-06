import { useState } from "react";

export const BlogActions = () => {
  let [blogs, setBlogs] = useState([]);
  //For the database results
  var [code, setCode] = useState({
    number: null,
    message: ""
  });

  const resetState = () => {
    setCode({code, number: null});  
    setCode({code, message: ""});  
  }

  const insertBlog = (entry) => {
    fetch("http://localhost/php-react/insert-blog.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {      
        setCode({code, number: data.code}); 
        console.log(data.msg); 
        setCode({code, message: data.msg});  
        if (data.success === 1) {                     
          setBlogs([
            {
              id: data.id,
              ...entry,
            },
            ...blogs,
          ]);
        }
        alert(data.msg);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return {
    insertBlog, 
    resetState,
  };
};