import React from 'react'
import '../App.css'
import BlogPosts from '../pages/BlogPosts';
import '../pages/HeroSection.css';
import Blog from './Blog'
import {Actions} from '../Actions'
import Footer from '../pages/Footer'
import './Users.css'

function Users() {
  const data = Actions();
  return (
    <>  
        <BlogPosts value={data}/>
        <Blog classname="blog-comp" value={data}/>
        <Footer/>
    </>
  );
}
export default Users;