import React, { useState } from 'react';
import './classes.dashboard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCalendarDay, faTimesCircle,faArrowRight,faArrowLeft,faSquare } from "@fortawesome/free-solid-svg-icons";
import RoundChart from './round-charts';



const ClassAdmissionForm = () => {
 
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
    <button className='details_button'>KG</button>
    <button className='details_button'>Grade 1</button>
    <button className='details_button'>Grade 2</button>
    <button className='details_button'>Grade 3</button>
    <button className='details_button'>Grade 4</button>
    <button className='details_button'>Grade 5</button>
    <button className='details_button'>Grade 6</button>
    <button className='details_button'>Grade 7</button>
    <button className='details_button'>Grade 8</button>
    <FontAwesomeIcon className="arrow_icon" icon={faArrowRight} />
</div>
<div className='class_details_students'>
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
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>001</td>
      <td>John Doe</td>
      <td>john.doe@example.com</td>
      <td>(555) 555-1234</td>
    </tr>
    <tr>
      <td>002</td>
      <td>Jane Smith</td>
      <td>jane.smith@example.com</td>
      <td>(555) 555-5678</td>
    </tr>

    <tr>
      <td>002</td>
      <td>Jane Smith</td>
      <td>jane.smith@example.com</td>
      <td>(555) 555-5678</td>
    </tr>

    <tr>
      <td>002</td>
      <td>Jane Smith</td>
      <td>jane.smith@example.com</td>
      <td>(555) 555-5678</td>
    </tr>

    <tr>
      <td>002</td>
      <td>Jane Smith</td>
      <td>jane.smith@example.com</td>
      <td>(555) 555-5678</td>
    </tr>

    <tr>
      <td>002</td>
      <td>Jane Smith</td>
      <td>jane.smith@example.com</td>
      <td>(555) 555-5678</td>
    </tr>

    <tr>
      <td>002</td>
      <td>Jane Smith</td>
      <td>jane.smith@example.com</td>
      <td>(555) 555-5678</td>
    </tr>

    <tr>
      <td>002</td>
      <td>Jane Smith</td>
      <td>jane.smith@example.com</td>
      <td>(555) 555-5678</td>
    </tr>

    <tr>
      <td>002</td>
      <td>Jane Smith</td>
      <td>jane.smith@example.com</td>
      <td>(555) 555-5678</td>
    </tr>
    <tr>
      <td>002</td>
      <td>Jane Smith</td>
      <td>jane.smith@example.com</td>
      <td>(555) 555-5678</td>
    </tr>
  </tbody>
</table>
</div>

<div className='class_details_students_graph'>
    <h2>Attendence</h2>
    <div className='class_details_students_head'>
        <p className='class_details_students_heading'>No.of students</p>
        <div className='class_details_students_data'>
            <p className='class_details_students_head_heading'>Today</p>
            <p className='class_details_students_head_heading'>Monthly</p>
            <p className='class_details_students_head_heading' >Weekly</p>
            <p className='class_details_students_head_heading'>Yearly</p>
        </div>
    </div>
<div className='class_details_students_a'>

  <div className='class_display_student'>
 <div className='class_detils_students_attended_head'>
 <FontAwesomeIcon color='red' className="arrow_icon" icon={faSquare} />
    <p>Attended</p>
 </div>

<div className='class_detils_students_attended_head'>
<FontAwesomeIcon color='blue' className="arrow_icon" icon={faSquare} />
    <p> Not Attended</p>
</div>
  
    </div>  

    {/* Graph comes here */}
    {/* <canvas ref={chartRef} /> */}
    <RoundChart data={{ A: 10, B: 20  }} />

</div>
<div className='class_details_students_head'>
        <p className='class_details_students_heading'>Exam Attandence</p>
        <div className='class_details_students_data'>
            <p className='class_details_students_head_heading'>Today</p>
            <p className='class_details_students_head_heading'>Monthly</p>
            <p className='class_details_students_head_heading' >Weekly</p>
            <p className='class_details_students_head_heading'>Yearly</p>
        </div>
    </div>
    <div className='class_details_students_a'>

<div className='class_display_student'>
<div className='class_detils_students_attended_head'>
<FontAwesomeIcon color='red' className="arrow_icon" icon={faSquare} />
  <p>Attended</p>
</div>

<div className='class_detils_students_attended_head'>
<FontAwesomeIcon color='blue' className="arrow_icon" icon={faSquare} />
  <p> Not Attended</p>
</div>

  </div>  

  {/* Graph comes here */}
  {/* <canvas ref={chartRef} /> */}
  <RoundChart data={{ A: 10, B: 20  }} />

</div>
    
    <div>

    </div>
</div>



  </div>
</div>
  
  
  </>


   
  );
};

export default ClassAdmissionForm ;