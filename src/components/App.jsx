import { useState } from 'react';
import Nav from './Nav.jsx';
import ContentDisplay from './ContentDisplay.jsx';
import GenInfo from './GenInfo.jsx';
import EduExp from './EduExp.jsx';


export default function App() {

    const [ display, setDisplay] = useState('none');
    const [ genInfo, setGenInfo] = useState({name: 'John Doe',
                                            email: 'johndoe@email.com',
                                            phone: 'xxx-xxx-xxxx'});


    const [ eduDisplay, setEduDisplay ] = useState('none');
    const [ eduExpInfo, setEduExpInfo ] = useState({
        school: 'Prestigious Institute',
        startDate: '2006-06-24',
        endDate: '2007-06-21',
        title: 'Certificate in Education'
    });

    return (
        <>
        <Nav 
            setEduDisplay={ setEduDisplay }
            setDisplay={ setDisplay }  />
        <ContentDisplay 
            genInfo={ genInfo } 
            eduExpInfo={ eduExpInfo }/>
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
        </>
    )
}

