import React, { useState } from 'react';
import './admission.dashboard.css';
import axios from 'axios';
import { Navigate, useNavigate,Link } from "react-router-dom";

const AdmissionDashboardForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [grade, setGrade] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [showAdmission, setIsAdmission] = useState(false);

  const handleAdmissionSubmit = async(event) => {
    event.preventDefault();
  const admissionData={
    firstName,
    lastName,
    phoneNumber,
    fatherName,
    address,
    grade,
    gender,
    age
  }
  console.log('addd',admissionData)
  try {
    const res = await axios.post(
      "http://localhost:2000/api/v2/admission/create",
      admissionData
    );
  console.log('res',res)
  if (res.status == 200) {
    setIsAdmission(true)
  }
  } catch (error) {
    console.log('error',error)
  }

    
    // handle form submission logic here
  };

  return (
  <>
  {
    showAdmission ?  <Link to="/dashboard">
    <div className='container'>
      <form   className='form'>
          <h2>Student Admission Sucessfully Created</h2>
        </form>
      </div> 
      </Link>  :
     <form className='admission_form_container' onSubmit={handleAdmissionSubmit}>
     <label className='dashboard_label'>
       First Name:
       <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
     </label>
     <label className='dashboard_label'>
       Last Name:
       <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
     </label>
     <label className='dashboard_label'>
       Age:
       <input type="text" value={age} onChange={(event) => setAge(event.target.value)} />
     </label>
     <label className='dashboard_label'>
       FatherName:
       <input type="text" value={fatherName} onChange={(event) => setFatherName(event.target.value)} />
     </label>
     <label className='dashboard_label'>
       Phone Number:
       <input type="tel" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
     </label>
     <label className='dashboard_label'>
       Address:
       <textarea value={address} onChange={(event) => setAddress(event.target.value)} />
     </label>
     <label className='dashboard_label'>
       Grade:
       <select className='dashboard_select' value={grade} onChange={(event) => setGrade(event.target.value)}>
         <option value="">Please select a grade</option>
         <option value="1">Grade 1</option>
         <option value="2">Grade 2</option>
         <option value="3">Grade 3</option>
         <option value="4">Grade 4</option>
         <option value="5">Grade 5</option>
         <option value="6">Grade 6</option>
         <option value="7">Grade 7</option>
         <option value="8">Grade 8</option>
         <option value="9">Grade 9</option>
         <option value="10">Grade 10</option>
         <option value="11">Grade 11</option>
         <option value="12">Grade 12</option>
       </select>
       <label>
 Gender:
 <select className='dashboard_select' value={gender} onChange={(event) => setGender(event.target.value)} name="gender">
   <option value="">Select</option>
   <option value="male">Male</option>
   <option value="female">Female</option>
   <option value="other">Other</option>
 </select>
</label>
     </label>
     
     <button className='dashboard_button' type="submit">Submit</button>
   </form>
  }
  
  
  
  </>


   
  );
};

export default AdmissionDashboardForm ;