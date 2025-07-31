import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import '../styles/EduExp.css';

export default function EduExp(props) {

    function handleDisplay() {
        props.setEduDisplay('none');
    }

    return(
        <div className="edu-exp-modal" style={{ display: props.eduDisplay }}>
            <div className="edu-exp-modal-header">
                <h1>Edit Educational Experience</h1>
                 <button onClick={ handleDisplay }> 
                    <FontAwesomeIcon icon={ faXmark } />
                </button>
            </div>

            <div className='edu-exp-form-wrapper'>
                <EduExpForm 
                eduExpInfo={ props.eduExpInfo }
                setEduExpInfo={ props.setEduExpInfo } />
            </div>
        </div>
    );
}

function EduExpForm(props) {

    const [ schoolInput, setSchoolInput ] = useState(props.eduExpInfo.school);
    const [ startDateInput, setStartDateInput ] = useState(props.eduExpInfo.startDate);
    const [ endDateInput, setEndDateInput ] = useState(props.eduExpInfo.endDate);
    const [ titleInput, setTitleInput ] = useState(props.eduExpInfo.title);

    function handleSchoolChange(e) {
        setSchoolInput(e.target.value);
    }

    function handleStartDateChange(e) {
        setStartDateInput(e.target.value);
    }

    function handleEndDateChange(e) {
        setEndDateInput(e.target.value);
    }

    function handleTitleChange(e) {
        setTitleInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.setEduExpInfo({
            school: schoolInput,
            startDate: startDateInput,
            endDate: endDateInput,
            title: titleInput
        });
    }

    return (
        <div className="edu-exp-form">
            <form onSubmit={ handleSubmit }>
                <label htmlFor="school">School Name: </label>
                <input type="text" name="school" id="school" value={ schoolInput } onChange={ handleSchoolChange }/>
                <br />
                <br />
                <label htmlFor="startDate">Start Date: </label>
                <input type="date" name="startDate" id="startDate" value={ startDateInput } onChange={ handleStartDateChange }/>
                <br />
                <br />
                <label htmlFor="endDate">End Date: </label>
                <input type="date" name="endDate" id="end-date" value={ endDateInput } onChange={ handleEndDateChange }/>
                <br />
                <br />
                <label htmlFor="title">Title of Study: </label>
                <input type="text" name="title" id="title" value={ titleInput } onChange={ handleTitleChange }/>
                <br />
                <br />
                <button type='submit'>Save</button>
            </form>
        </div>
    );
}