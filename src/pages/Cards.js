import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import defaultImage from "../media/pic_3.jpg"
import img1 from "../media/pic_4.jpeg"
import img2 from "../media/pic_5.jpg"

function Cards() {
    return (
        <div className="cards">
                <div className="mission">
                    <div>
                        <h1 className="cards__heading">Our Mission</h1>
                        <p className="cards__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis euismod lacus.</p>
                    </div>
                    <div>
                        {/* <img src={img1}/> */}
                    </div>                      
                </div>                   
                <div className="vision">
                    <h1 className="cards__heading">Our Vision</h1>
                    <p className="cards__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis euismod lacus.</p>
                </div>
            <h1 className="cards__heading" id="univ">What we do in our University</h1>
            <p className="cards__p cards__p__extension">Lorem ipsum dolor sit amet, consectetur
             adipiscing elit. Nunc quis euismod lacus.</p>        
            <div className="cards__container">              
                <div className="cards__wrapper">               
                    <ul className="cards__items">                  
                        <CardItem 
                            src={defaultImage}
                            text="Lorem Ipsum"
                            label="Activity"
                            path="/"/>  
                        <CardItem 
                            src={img2}
                            text="Lorem Ipsum"
                            label="Activity"
                            path="/"/>                             
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src={defaultImage}
                            text="Lorem Ipsum"
                            label="Activity"
                            path="/"/>    
                        <CardItem 
                            src={img1}
                            text="Lorem Ipsum"
                            label="Activity"
                            path="/"/> 
                            <CardItem 
                            src={img2}
                            text="Lorem Ipsum"
                            label="Activity"
                            path="/"/>
                        <CardItem 
                            src={defaultImage}
                            text="Lorem Ipsum"
                            label="Activity"
                            path="/"/>                                                                    
                    </ul>                              
                </div>
            </div>
        </div>
    )
}

export default Cards
