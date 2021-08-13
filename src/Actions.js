import { useState, useEffect } from "react";
import { store } from 'react-notifications-component'

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
    setCode({ code, number: null });
    setCode({ code, message: "" });
    console.log("Reset State");
  }

  //REGISTER
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
        setCode({ code, number: data.code });
        console.log(data.msg);
        setCode({ code, message: data.msg });
        if (data.success === 1) {
          setUsers([
            {
              id: data.id,
              ...newUser,
            },
            ...users,
          ]);
          setUserLength(true);
          userHasAuth(true)
          setUsername(data.user);
          //Set in the localStorage with the key of the user
          localStorage.setItem('user', data.user);
          localStorage.setItem('isAuth', true);
          store.addNotification({
            title: "You are now registered",
            message: data.msg,
            type: "success",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 800,
              onScreen: false
            }
          });
        } else {
          store.addNotification({
            message: data.msg,
            type: "warning",
            insert: "top",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //LOGIN
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
        setCode({ code, number: data.code });
        setCode({ code, message: data.msg })
        //LOGIN SUCCESS
        if (data.code === 1) {
          userHasAuth(true);
          setUsername(data.user);
          localStorage.setItem('user', data.user);
          localStorage.setItem('isAuth', true);
          //Success Notif
          store.addNotification({
            title: "Login Success",
            message: data.msg,
            type: "success",
            insert: "top",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 800,
              onScreen: false
            }
          });
        } else {
          //LOGIN FAILED
          //Fail Notif
          store.addNotification({
            title: "Login Fail",
            message: data.msg,
            type: "danger",
            insert: "top",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  //BLOGS CRUD
  let [blogs, setBlogs] = useState([]);
  let [blogLength, setBlogLength] = useState(null); //blogLength is for showing the Data Loading message. 

  useEffect(() => {
    fetch("http://localhost/php-react/all-blogs.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setBlogs(data.blog_table.reverse());
          setBlogLength(true);
        } else {
          setBlogLength(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  //INSERT BLOG
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
        setCode({ code, number: data.code });
        console.log(data.msg);
        setCode({ code, message: data.msg });
        if (data.success === 1) {
          setBlogs([
            {
              id: data.id,
              ...entry,
            },
            ...blogs,
          ]);
          setBlogLength(true);
          store.addNotification({
            title: "",
            message: data.msg,
            type: "info",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: true
            }
          });
        } else {
          store.addNotification({
            title: "",
            message: data.msg,
            type: "warning",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: true
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Enables the edit mode for the listed blogs
  const editMode = (id) => {
    blogs = blogs.map((blog) => {
      if (blog.id === id) {
        blog.isEditing = true;
        return blog;
      }
      blog.isEditing = false;
      return blog;
    });
    setBlogs(blogs);
  };

  //Cencel the edit mode
  const cancelEdit = (id) => {
    blogs = blogs.map((blog) => {
      if (blog.id === id) {
        blog.isEditing = false;
        return blog;
      }
      return blog;
    });
    setBlogs(blogs);
  };

  //Update a blog
  const updateBlog = (blogData) => {
    fetch("http://localhost/php-react/update-blog.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          blogs = blogs.map((blog) => {
            if (blog.id === blogData.id) {
              blog.isEditing = false;
              //blog.username = blogData.username;
              blog.blog_title = blogData.blog_title;
              blog.blog_content = blogData.blog_content;
              return blog;
            }
            return blog;
          });
          setBlogs(blogs);
          store.addNotification({
            title: "Edit Blog Success",
            message: data.msg,
            type: "success",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: false
            }
          });
        } else {
          store.addNotification({
            title: "Edit Blog Failed",
            message: data.msg,
            type: "warning",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: false
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Delete a blog
  const deleteBlog = (theID) => {
    // filter outing the user.
    let blogDeleted = blogs.filter((blog) => {
      return blog.id !== theID;
    });
    fetch("http://localhost/php-react/delete-blog.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: theID }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setBlogs(blogDeleted);
          if (blogs.length === 1) {
            setBlogLength(0);
          }
          store.addNotification({
            title: "Delete Blog Success",
            message: data.msg,
            type: "success",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: true
            }
          });
        } else {
          store.addNotification({
            title: "Delete Blog Failed",
            message: data.msg,
            type: "warning",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: false
            }
          });
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
    userHasAuth,
    resetState,
    username,
    setUsername,
    insertBlog,
    blogLength,
    blogs,
    editMode,
    cancelEdit,
    updateBlog,
    deleteBlog
  };
};