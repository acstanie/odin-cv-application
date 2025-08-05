import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCircleInfo, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import '../styles/Nav.css';


export default function Nav(props) {
    function handleClick() {
        props.setDisplay('flex');
        props.setEduDisplay('none');
        props.setWorkDisplay('none')
    }

    function handleEduClick() {
        props.setEduDisplay('flex');
        props.setDisplay('none');
        props.setWorkDisplay('none')
    }

    function handleWorkClick() {
        props.setWorkDisplay('flex')
        props.setDisplay('none');
        props.setEduDisplay('none');
       
    }

    return (
        <div className='nav'>
        <ul>
            <li>CV Application</li>
            <div className='nav-btns'>
                <li>
                    <Button 
                        text='General Information'
                        icon={ <FontAwesomeIcon icon={ faCircleInfo } /> } 
                        handleClick={ handleClick }
                    />
                </li>
                <li>
                    <Button 
                        text='Educational Experience' 
                        icon={ <FontAwesomeIcon icon={ faGraduationCap } /> }
                        handleClick={ handleEduClick }
                    />
                </li>
                <li>
                    <Button 
                        text='Practical Experience'
                        icon={ <FontAwesomeIcon icon={ faBriefcase } /> } 
                        handleClick={ handleWorkClick }
                    
                    />
                </li>
            </div>
        </ul>
        </div>
    );
}

function Button(props) {
    return (
        <>
            <button onClick={props.handleClick}>{props.text} {props.icon}</button>
        </>
    )
}