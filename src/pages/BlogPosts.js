import React, { useState, useContext } from 'react'
import { AppContext } from '../Context'
import './Cards.css'
import '../components/CompStyle.css'

const BlogPosts = () => {
  //Loads all the blog from the dataase
  const {
    blogs,
    blogLength,
    editMode,
    cancelEdit,
    updateBlog,
    deleteBlog,
  } = useContext(AppContext);

  // Storing blog data when they are editing their blog
  const [newData, setNewData] = useState({});

  const saveBtn = () => {
    updateBlog(newData);
  };

  const updateNewData = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value,
    });
  };

  const enableEdit = (id, blog_title, blog_content) => {
    setNewData({ id, blog_title, blog_content });
    editMode(id);
  };

  const deleteConfirm = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteBlog(id);
    }
  };


  return !blogLength ? (
    <p>{blogLength == null ? "Loading..." : "No blogs yet."}</p>
  ) : (
    <div className="cards">
      <table>
        <thead>
          <tr>
            {/* <th>Blog ID:</th> */}
            <th>Posted By:</th>
            <th>Blog Title</th>
            <th>Blog Content</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map(({ id, username, blog_title, blog_content, isEditing }) => {
            return isEditing === true ? (
              <tr key={id}>
                <td className="title-data">
                  <input
                    className="content-data"
                    type="text"
                    defaultValue={blog_title}
                    onChange={(e) => updateNewData(e, "blog_title")}
                  />
                </td>
                <td>
                  <textarea
                    className="textarea-content content-data content-paragraph"
                    type="text"
                    defaultValue={blog_content}
                    onChange={(e) => updateNewData(e, "blog_content")}
                  />
                </td>
                <td className="title-data">
                  <input
                    type="text"
                    disabled
                    defaultValue={"Posted by: " + username}
                  //onChange={(e) => updateNewData(e, "username")}
                  />
                </td>
                <td className="button-data">
                  <button className="btn-blog" onClick={() => saveBtn()}>
                    Save
                  </button>
                  <button
                    className="btn-blog"
                    onClick={() => cancelEdit(id)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={id}>
                <td className="title-data">{blog_title}</td>
                <td>Posted By: {username}</td>
                <td className="content-data content-paragraph">{blog_content}</td>
                {(localStorage.getItem("user") === username) ? 
                  <td className="button-data">
                    <button
                      className="btn-blog"
                      onClick={() => enableEdit(id, username, blog_title, blog_content)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-blog"
                      onClick={() => deleteConfirm(id)}
                    >
                      Delete
                    </button>
                  </td>: <></>}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}
export default BlogPosts
