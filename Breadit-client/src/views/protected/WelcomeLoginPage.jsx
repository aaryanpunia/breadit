import React from 'react';
import "../../static/css/WelcomeLoginPage.css";
import LoafBar from '../../components/LoafBar';

function WelcomeLoginPage() {
    return (
        <div className="WelcomeLoginPage-container">
            <div className="welcome-container">
                <span>Welcome</span>
                <span className="welcome-username">Breditor.1.1</span>
                <span> Let's see what you've been doing!</span>
            </div>
            <LoafBar loafArr={["lorem", "ipsum", "dodder", "lorem", "ipsum", "dodder", "lorem", "ipsum"]} />
        </div>
    )
}

export default WelcomeLoginPage;