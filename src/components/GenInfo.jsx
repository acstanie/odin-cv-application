import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import '../styles/GenInfo.css';

export default function GenInfo(props) {
    function handleClick() {
        props.setDisplay('none');
    }

    return (
        <div className="gen-info" style={{ display: props.display }}>
            <div className='header'>
                <h1>Edit General Infromation</h1>
                 <button onClick={ handleClick }> 
                    <FontAwesomeIcon icon={ faXmark } />
                </button>
            </div>

            <GenInfoForm 
                setGenInfo={ props.setGenInfo }
                genInfo={ props.genInfo }
                />
        </div>
    );
}

function GenInfoForm(props) {

    const [nameInput, setNameInput] = useState(props.genInfo.name);
    const [emailInput, setEmailInput] = useState(props.genInfo.email);
    const [phoneInput, setPhoneInput] = useState(props.genInfo.phone);

    function handleNameChange(e) {
        setNameInput(e.target.value);
    }

    function handleEmailChange(e) {
        setEmailInput(e.target.value);
    }

    function handlePhoneChange(e) {
        setPhoneInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.setGenInfo({name: nameInput, 
                        email: emailInput, 
                        phone: phoneInput });
    }

    return (
        <div className="gen-info-form" onSubmit={ handleSubmit }>
            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" value={ nameInput } onChange={ handleNameChange }/>
                <br />
                <br />
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" value={ emailInput } onChange={ handleEmailChange }/>
                <br />
                <br />
                <label htmlFor="phone">Phone: </label>
                <input type="text" name="phone" id="phone" value={ phoneInput } onChange={ handlePhoneChange }/>
                <br />
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}