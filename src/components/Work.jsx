import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import '../styles/Work.css';

export default function Work(props) {

    function handleDisplay() {
        props.setWorkDisplay('none');
    }

    return (
        <div className='work-modal' style={{ display: props.workDisplay }}>
            <div className="work-modal-header">
                <h1>Edit Practical Experience</h1>
                 <button onClick={ handleDisplay }> 
                    <FontAwesomeIcon icon={ faXmark } />
                </button>
            </div>

            <div className="work-form-wrapper">
                <WorkForm 
                    workInfo={ props.workInfo }
                    setWorkInfo={ props.setWorkInfo }/>
        
            </div>

        </div>
    );
}

function WorkForm(props) {

    const [ companyInput, setCompanyInput ] = useState(props.workInfo.company);
    const [ startInput, setStartInput ] = useState(props.workInfo.startDate);
    const [ endInput, setEndInput ] = useState(props.workInfo.endDate);
    const [ positionInput, setPositionInput ] = useState(props.workInfo.position);
    const [ dutyInput, setDutyInput ] = useState(props.workInfo.duty);

    function handleCompanyChange(e) {
        setCompanyInput(e.target.value);
    }

    function handleStartChange(e) {
        setStartInput(e.target.value);
    }

    function handleEndChange(e) {
        setEndInput(e.target.value);
    }

    function handlePositionChange(e) {
        setPositionInput(e.target.value);
    }

    function handleDutyChange(e) {
        setDutyInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.setWorkInfo({
            company: companyInput,
            startDate: startInput,
            endDate: endInput,
            position: positionInput,
            duty: dutyInput
        });
    }


    return (
        <div className="work-form">
            <form onSubmit={ handleSubmit }>
                <label htmlFor="company">Company Name: </label>
                <input type="text" name="company" id="company" value={ companyInput } onChange={ handleCompanyChange }/>
                <br />
                <br />
                <label htmlFor="startDate">Start Date: </label>
                <input type="date" name="startDate" id="startDate" value={ startInput } onChange={ handleStartChange }/>
                <br />
                <br />
                <label htmlFor="endDate">End Date: </label>
                <input type="date" name="endDate" id="end-date" value={ endInput } onChange={ handleEndChange }/>
                <br />
                <br />
                <label htmlFor="position">Position: </label>
                <input type="text" name="position" id="position" value={ positionInput } onChange={ handlePositionChange }/>
                <br />
                <br />
                <div className='duty-textarea'>
                    <label htmlFor="duty">Main Responibilites:</label>
                    <textarea rows='10' cols='30' name='duty' id='duty' value={ dutyInput } onChange={ handleDutyChange }/>
                </div>
                <br />
                <br />
                <button type='submit'>Save</button>
            </form>
        </div>
    );
}