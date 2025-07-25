import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCircleInfo, faBriefcase } from '@fortawesome/free-solid-svg-icons';

import '../styles/Nav.css';


export default function Nav() {

  return (
    <div className='nav'>
      <ul>
        <li>CV Application</li>
        <div className='nav-btns'>
            <li>
                <Button 
                    text='General Information'
                    icon={ <FontAwesomeIcon icon={ faCircleInfo } /> } 
                />
            </li>
            <li>
                <Button 
                    text='Educational Experience' 
                    icon={ <FontAwesomeIcon icon={ faGraduationCap } /> }
                />
            </li>
            <li>
                <Button 
                    text='Practical Experience'
                    icon={ <FontAwesomeIcon icon={ faBriefcase } /> } 
                
                />
            </li>
        </div>
      </ul>
    </div>
  )
}

function Button(props) {
    return (
        <>
            <button>{props.text} {props.icon}</button>
        </>
    )
}