import React, {useContext} from 'react'
import { AppContext } from '../Context';
import './Cards.css'

function BlogPosts() {
    //Loads all the blog from the dataase
    const {username, code} = useContext(AppContext);
    return (
        <div className="cards">
                <div className="mission">
                    <div>
                        <h1 className="cards__heading">Test Blog 1</h1>
                        <p className="cards__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis euismod lacus.</p>
                    </div>                    
                </div>                   
                <div className="vision">
                    <h1 className="cards__heading">Test Blog 2</h1>
                    <p className="cards__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis euismod lacus.</p>
                </div>
            </div>
    )
}
export default BlogPosts
