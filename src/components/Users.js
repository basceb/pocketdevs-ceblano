import React from 'react'
import '../App.css'
import BlogPosts from '../pages/BlogPosts';
import '../pages/HeroSection.css';
import Blog from './Blog'
import {Actions} from '../Actions'
import {BlogActions} from '../BlogActions'

function Users() {
  const data = Actions();
  const blogData = BlogActions();
  return (
    <>
      <BlogPosts value={data}/>
      <Blog value={{data, blogData}}/>
    </>
  );
}
export default Users;