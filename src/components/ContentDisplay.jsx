import { useState } from 'react';
import EduExpDisplay from './EduExpDisplay.jsx';

import '../styles/ContentDisplay.css';

export default function ContentDisplay(props) {

    return (
        <div className="content-display">
            <div className="content">
                <div className='display-header'>
                    <h1>{ props.genInfo.name }</h1>
                    <p>{ props.genInfo.email } | { props.genInfo.phone }</p>
                </div>
                <EduExpDisplay eduExpInfo={ props.eduExpInfo }/>
            </div>
        </div>
    );
}

