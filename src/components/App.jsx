import { useState } from 'react';
import Nav from './Nav.jsx';
import ContentDisplay from './ContentDisplay.jsx';
import GenInfo from './GenInfo.jsx';

export default function App() {

  const [ display, setDisplay] = useState('none');
  const [ genInfo, setGenInfo] = useState({name: 'John Doe',
                                          email: 'johndoe@email.com',
                                          phone: 'xxx-xxx-xxxx'})

  return (
    <>
      <Nav setDisplay={ setDisplay }  />
      <ContentDisplay genInfo={ genInfo } />
      <GenInfo
        display={ display } 
        setDisplay={ setDisplay }
        genInfo= { genInfo }
        setGenInfo = { setGenInfo }  
        />
    </>
  )
}

