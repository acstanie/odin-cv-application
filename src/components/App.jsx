import { useState } from 'react';
import Nav from './Nav.jsx';
import ContentDisplay from './ContentDisplay.jsx';
import GenInfo from './GenInfo.jsx';
import EduExp from './EduExp.jsx';
import Work from './Work.jsx';


export default function App() {

    const [ display, setDisplay] = useState('none');
    const [ genInfo, setGenInfo] = useState({
        name: 'John Doe',
        email: 'johndoe@email.com',
        phone: 'xxx-xxx-xxxx'
    });

    const [ eduDisplay, setEduDisplay ] = useState('none');
    const [ eduExpInfo, setEduExpInfo ] = useState({
        school: 'Prestigious Institute',
        startDate: '2006-06-24',
        endDate: '2007-06-21',
        title: 'Certificate in Education'
    });

    const [ workDisplay, setWorkDisplay ] = useState('none');
    const [workInfo, setWorkInfo ] = useState({
        company: 'Google Inc.',
        startDate: '2015-06-11',
        endDate: '2020-07-12',
        position: 'Junior Developer',
        duty: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `
    });

    return (
        <>
            <Nav 
                setWorkDisplay={ setWorkDisplay }
                setEduDisplay={ setEduDisplay }
                setDisplay={ setDisplay }  />
            <ContentDisplay 
                genInfo={ genInfo } 
                eduExpInfo={ eduExpInfo }
                workInfo={ workInfo }/>
            <GenInfo
                display={ display } 
                setDisplay={ setDisplay }
                genInfo= { genInfo }
                setGenInfo = { setGenInfo } />
            <EduExp
                eduDisplay={ eduDisplay } 
                setEduDisplay={ setEduDisplay }
                eduExpInfo={ eduExpInfo }
                setEduExpInfo={ setEduExpInfo } />
            <Work 
                workDisplay={ workDisplay }
                setWorkDisplay={ setWorkDisplay }
                workInfo={ workInfo }
                setWorkInfo={ setWorkInfo }/>
        </>
        

    )
}

