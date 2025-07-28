import { useState } from 'react';
import '../styles/ContentDisplay.css';

export default function ContentDisplay(props) {

    return (
        <div className="content-display">
            <div className="left-content">
                <div className='display-header'>
                    <h1>{ props.genInfo.name }</h1>
                    <p>{ props.genInfo.email } | { props.genInfo.phone }</p>
                </div>
            </div>
            <div className="right-content">
                <h1>Hello</h1>
            </div>
        </div>
    );
}

