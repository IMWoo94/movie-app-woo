import React from 'react';
import './About.css';

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                "Your life is free"
            </span>
            <span>
                - IMWoo_94 1994 
            </span>
        </div>
    );
    
}

export default About;