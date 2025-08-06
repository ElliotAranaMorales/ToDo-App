import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import * as database from '../../database';
import './Form.scss';
import Saving from "../Saving";

function Form({ onAddTask }) {
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('open');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleFormSubmission = async (event) => {
    event.preventDefault();

    // Validate the user input.
    if (description === '') {
      setErrorMessage('Enter a description.');
    }
    else {
      setIsSaving(true);
      // Add the task.
      const savedID = await database.save(description, status);
      setIsSaving(false)
      if (savedID) {
        console.log('Saved Id: ', savedID);
        onAddTask(savedID);
        
        
        // Reset the form state.
        setDescription('')
        setStatus('open');
        setErrorMessage('');
      } else {
        setErrorMessage('Failed to save data.');
      }
    }
  } 

  return (
    <>
    {isSaving 
    ? <Saving/>
    : (
    <form className='form-component' onSubmit={handleFormSubmission}>
      <h2>Add a new task:</h2>

      <div className='content'>
        {/* Conditional render of the error message */}
        {errorMessage !== '' && (
          <div className='error-message'>{errorMessage}</div>
        )}

        {/* Description Field */}
        <label>
          <span>Description:</span>
          <input
            type='text'
            maxLength={150}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>

        {/* Status Field */}
        <label>
          <span>Status:</span>
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value='open'>Open</option>
            <option value='completed'>Completed</option>
          </select>
        </label>

        {/* Submission Button */}
        <button>
          <IoMdAddCircle /> Add
        </button>
      </div>
    </form>
    )}
    </>
  );
}

export default Form;