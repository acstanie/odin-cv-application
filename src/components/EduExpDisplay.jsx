import { useState } from "react";

import '../styles/EduExpDisplay.css';

export default function EduExpDisplay(props) {
    return (
        <div className="edu-exp">
            <h2>Education Experience</h2>
            <hr />
            <EduExpContent eduExpInfo={ props.eduExpInfo } />
        </div>
        
    );
}

function EduExpContent(props) {
    return (
        <div className="edu-exp-content">
            <h3>{ props.eduExpInfo.school }</h3>
            <p>{ props.eduExpInfo.startDate } to { props.eduExpInfo.endDate}</p>
            <h4>{ props.eduExpInfo.title }</h4>
        </div>
    );
}