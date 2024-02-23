import React, { useState } from 'react';
import './Name.css'

function NameForm() {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
  });

 
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <form className='FormInput' onSubmit={handleSubmit}>
        <label htmlFor="fName">FName:</label>
        <input
          type='text'
          name='fName'
          placeholder='Enter First Name'
          value={formData.fName}
          onChange={handleInputChange}
        /><br/><br/>
        <label htmlFor="lName">LName:</label>
        <input
          type="text"
          name='lName'
          placeholder='Enter your Last Name'
          value={formData.lName}
          onChange={handleInputChange}
        /><br/>
        <button type="submit">Submit</button>
      </form>

      
      {submitted && (
        <div>
          <h2>Submitted Data:</h2>
          <p>First Name: {formData.fName}</p>
          <p>Last Name: {formData.lName}</p>
        </div>
      )}
    </>
  );
}

export default NameForm;

