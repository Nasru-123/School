import React, { useState } from 'react';
import './attendence.css';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCalendarDay, faTimesCircle,faArrowRight,faArrowLeft,faSquare,faCircle } from "@fortawesome/free-solid-svg-icons";




const AttendencePage = () => {
  const [students, setStudents] = useState([]);
  const [attendence,setAttendence] = useState([])
     const [csvFile, SetCsvFile] = useState();
     const fileReader = new FileReader();
     

const SubmitAttendence = (e) =>{
  
    e.preventDefault()
    console.log('attendence',attendence)
}
    const SubmitCSVFile=(e)=>{
      e.preventDefault();
      let formData = new FormData();
      formData.append('name', "FILENAME");
      formData.append('file', csvFile); 
      console.log('ssss',csvFile)
      const url = 'http://localhost:2000/api/v2/admission/getcsvfile';
      axios({
          method: 'POST',
          url: url,
          headers: {
              ContentType: 'multipart/form-data'
          },
          body: formData
      })
  
    }


// Click Button
const handleButtonClick=async(e) =>{
  const name=e.target.textContent;
  const res = await axios.get(
    `http://localhost:2000/api/v2/admission/getgrade?name=${name}`
  );
  console.log('000',res.status)
if(res.status ===200){
  setStudents(res.data.students)
}
  e.preventDefault()
}


  const data = [
    {  fail: 1000, pass: 500,not_attempted:2000 },
    {  fail: 15000, pass: 6000,not_attempted:2000 },

  ];
 
    const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

    // Get the current date
    const now = new Date();
    
    // Extract the day, month, and year from the current date
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    
    // Format the date as "day month year"
    const date = `${day} ${month} ${year}`;

    let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

// Convert hours to 12-hour format and determine whether it's AM or PM
let amOrPm = hours >= 12 ? "PM" : "AM";
hours = hours % 12;
hours = hours ? hours : 12; // handle midnight (0 hours) as 12

// Add leading zeroes to minutes and seconds if they are less than 10
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

// Output the current time in "hh:mm:ss AM/PM" format
const currentTime = hours + ":" + minutes + ":" + seconds + " " + amOrPm;

  return (
  <>
 <div className='class_dashboard_container'>

   {
     
 <>
 <div className='date_icon_grid'>
 <FontAwesomeIcon className="date_icon" icon={faCalendarDay} />
 <p>{date}</p>
 </div>

 <div className='date_icon_grid'>
 <FontAwesomeIcon className="date_icon" icon={faTimesCircle} />
 <p>{currentTime}</p>
 </div>
 </> 
   }
 </div>

{/* Class Details */}

<div className='date_class_details'>
<h2 className='date_class_detail_heading'>Class Details</h2>
<div className='class_details_button_head'>
<FontAwesomeIcon className="arrow_icon" icon={faArrowLeft} />
    <button onClick={handleButtonClick}  className='details_button'>Grade 1</button>
    <button onClick={handleButtonClick}  className='details_button'>Grade 2</button>
    <button onClick={handleButtonClick}  className='details_button'>Grade 3</button>
    <button onClick={handleButtonClick}  className='details_button'>Grade 4</button>
    <button onClick={handleButtonClick}  className='details_button'>Grade 5</button>
    <button onClick={handleButtonClick}  className='details_button'>Grade 6</button>
    <button onClick={handleButtonClick}  className='details_button'>Grade 7</button>
    <button onClick={handleButtonClick}  className='details_button'>Grade 8</button>
    <button onClick={handleButtonClick} className='details_button'>Grade 9</button>
    <FontAwesomeIcon className="arrow_icon" icon={faArrowRight} />
</div>
<div className='class_details_students'>
<form className='test' onSubmit={SubmitAttendence}>
<div className='class_details_students_table'>
<h2 style={{marginTop:'25px'
}}>Students</h2>
  <table>
  <thead>
    <tr>
    <th>ID</th>
      <th>Name</th>
      <th>Class</th>
      <th>Description</th>
      <th>Attendence</th>
    </tr>
  </thead>
  <tbody>
   
  {students.length>0 ? students.map(item => (
          <tr>
            <td>{item.admissionId
}</td>
            <td>{item.firstName}</td>
            <td>{item.grade}</td>
            <td>{item.address}</td>
            <input name='attendence[]' onChange={(event) => setAttendence({
                name:item.firstName,
                grade:item.grade,
              
            })}  className='attendence_checkbox' type="checkbox"  />
          </tr>
        ))
      :

     <div>
       <h4 className='hidden_student_not_found'>No Record Found !!</h4>
     </div>
 
      }
  </tbody>
</table>

</div>
<button className='attendence_button'>Take Attendence</button>
</form>





  </div>

<br />
<br />


 {/* <div className="flex flex-col gap-6 justify-center items-center h-screen">
        <h1> Page Title</h1>
        <form onSubmit={SubmitCSVFile}>
          <input type="file" accept=".csv" onChange={(event) =>  SetCsvFile(event.target.files[0])} />
          <button type="submit" className="bg-blue-500 px-4 py-2 rounded-md font-semibold">fetch</button>
        </form>
      </div> */}
</div>
  
  
  </>


   
  );
};

export default AttendencePage ;

 
 
 
 