import React, { useState, useContext } from 'react'
import { AppContext } from '../Context';
import '../App.css'
import './CompStyle.css'
import '../pages/HeroSection.css';
import homeVideo from "../media/video_2.mp4"

export default function Blog() {
    const {username, insertBlog, resetState} = useContext(AppContext)
    const [entry, setEntry] = useState({});
    entry.username = username;
    const blogEntry = (e, field) => {
        setEntry({
            ...entry, [field]: e.target.value
        })
    };

    const submitBlogPost = (e) => {
        //Insert blog entry here
        insertBlog(entry)
        e.preventDefault();
        e.target.reset();
    };

    return (
        <div className="blogs-container" onLoad={resetState}>
            <video controls autoPlay loop muted> 
                    <source src={homeVideo} type="video/mp4"></source>
                </video>
            <div className="container blog-container">
                <div className="card"></div>
                <div className="card">
                    <h1 className="title">Blog</h1>
                    <form className="writeForm" onSubmit={submitBlogPost}>
                        <div className="input-container">
                            <input type="#{type}"
                                id="_name"
                                autoComplete="off"
                                onChange={(e) => blogEntry(e, "blog_title")}
                                required
                            />
                            <label htmlFor="_title">Title</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <p className="content-p"> Blog Content </p>
                            <textarea type="#{type}"
                                id="_name"
                                autoComplete="off"
                                onChange={(e) => blogEntry(e, "blog_content")}
                                required
                                className="textarea-content"
                            />     
                        </div>
                        <div className="button-container">
                            <button type="submit" value="insert"><span>Submit Blog</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}