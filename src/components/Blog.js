import React, { useState, useContext } from 'react'
import { AppContext } from '../Context';
import '../App.css'
import './CompStyle.css'
import '../pages/HeroSection.css';

export default function Blog() {
    const {username, insertBlog} = useContext(AppContext)
    const [entry, setEntry] = useState({});

    const blogEntry = (e, field) => {
        setEntry({
            ...entry, [field]: e.target.value
        });
    };

    const submitBlogPost = (e) => {
        //Set the username
        setEntry({
            entry, "username": username
        });
        //Insert blog entry here
        e.preventDefault();
        e.target.reset();
    };

    return (
        <div className="blogs-container">
            <div className="container">
                <div className="card"></div>
                <div className="card">
                    <div className="error-container">
                        {/* Conditional rendering */}
                        <span>Logged in: {username}</span>
                    </div>  
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
                            <input type="#{type}"
                                id="_name"
                                autoComplete="off"
                                onChange={(e) => blogEntry(e, "blog_content")}
                                required
                            />
                            <label htmlFor="_title">What do you want to write?</label>
                            <div className="bar"></div>
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