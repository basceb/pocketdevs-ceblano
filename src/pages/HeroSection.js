import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import homeVideo from "../media/video.mp4"
function HeroSection() {
    return (
        <div className="hero-container">
            <video controls autoPlay loop muted> 
                <source src={homeVideo} type="video/mp4"></source>
            </video>
            <h1>ADMISSIONS ARE NOW OPEN</h1>
            <div className="hero-btns">
                <Button 
                    className="btns" 
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"                                       
                >
                    <b>GET STARTED</b>            
                </Button>
                <Button 
                    className="btns" 
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                >
                   <b>PORTAL</b>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
