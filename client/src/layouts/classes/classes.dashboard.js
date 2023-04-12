import React, { useState } from 'react';
import './classes.dashboard.css';
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';

import { faCalendarDay, faTimesCircle,faArrowRight,faArrowLeft,faSquare,faCircle } from "@fortawesome/free-solid-svg-icons";
import RoundChart from './round-charts';
import LineChart from './curve-charts';



const ClassAdmissionForm = () => {
  const [students, setStudents] = useState([]);
     const [csvFile, SetCsvFile] = useState();
     const [isLoading,setisLoading] = useState(false);
     const [presentStudent,setPresentStudents]=useState(0);
     const [absentStudent,setAbsentSudents]=useState(0);
     const [whichClass,setWhichClass]=useState(2)
     const fileReader = new FileReader();
     
console.log('presentStudent',presentStudent)
console.log('absentStudent',absentStudent)

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

    const todayClicked =async (e) =>{
     const textContent= e.target.textContent;
     const attendenceResult = await axios.get(
      `http://localhost:2000/api/v2/attendence/getattendence?name=${whichClass}&content=${textContent}`
    );
    setAbsentSudents(attendenceResult.data.data.studentAbsent[0].count)
    setPresentStudents(attendenceResult.data.data.studentsPresent[0].count)
    }

// Click Button
const handleButtonClick=async(e) =>{
  setisLoading(true)
  const name=e.target.textContent;
  setWhichClass(name)
  const res = await axios.get(
    `http://localhost:2000/api/v2/admission/getgrade?name=${name}`
  );
  const attendenceResult = await axios.get(
    `http://localhost:2000/api/v2/attendence/getattendence?name=${name}`
  );
  setPresentStudents(attendenceResult.data.data.studentAbsent[0].count)
  setAbsentSudents(attendenceResult.data.data.studentsPresent[0].count)
if(res.status ===200){
  setStudents(res.data.students);
  setisLoading(false)
}
  e.preventDefault()
  setisLoading(false)
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
   
  
  {
 
  isLoading ?
   <Spinner className='class_spinner'  animation="border" variant="primary" /> :
  students.length>0 ? students.map(item => (
          <tr>
            <td>{item.admissionId
}</td>
            <td>{item.firstName}</td>
            <td>{item.grade}</td>
            <td>{item.address}</td>
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

<div className='class_details_students_graph'>
    <h2>Attendence</h2>
    <div className='class_details_students_head'>
        <p className='class_details_students_heading'>No.of students</p>
        <div className='class_details_students_data'>
            <p onClick={todayClicked} className='class_details_students_head_heading'>Today</p>
            <p onClick={todayClicked} className='class_details_students_head_heading'>Monthly</p>
            <p onClick={todayClicked} className='class_details_students_head_heading' >Weekly</p>
            <p onClick={todayClicked} className='class_details_students_head_heading'>Yearly</p>
        </div>
    </div>
<div className='class_details_students_a'>

  <div className='class_display_student'>
 <div className='class_detils_students_attended_head'>
 <FontAwesomeIcon color='red' className="arrow_icon" icon={faSquare} />
    <p style={{marginLeft:'6px'}} >Attended</p>
 </div>

<div className='class_detils_students_attended_head'>
<FontAwesomeIcon color='blue' className="arrow_icon" icon={faSquare} />
    <p style={{marginLeft:'6px'}}> Not Attended</p>
</div>
  
    </div>  

    {/* Graph comes here */}
    {/* <canvas ref={chartRef} /> */}
 <RoundChart data={{ A: presentStudent, B: absentStudent  }} />

   

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

<br />
<br />
  {/* here curve graph comes */}
<div className='classes_footer_graph_main'>
<div className='classes_footer_graph_one'>
  <h1 className='classes_footer_graph_curve_heading'>Exams</h1>
  <div className='class_details_students_data_curve'>
            <p className='class_details_students_head__curve_heading'>Today</p>
            <p className='class_details_students_head__curve_heading'>Monthly</p>
            <p className='class_details_students_head__curve_heading' >Weekly</p>
            <p className='class_details_students_head__curve_heading'>Yearly</p>
        </div>
        <LineChart data={data}  />
</div>
</div>

<div className='classes_footer_exams_head'>
  <div className='classes_footer_exams_head_one'>
   <h3>English</h3>
   <div className='classes_footer_exams_head_one_flex'>
  <div className='classes_footer_exams_head_one_flex_main'>
  <FontAwesomeIcon color='green' className="date_icon" icon={faCircle} />
   <p>92% pass</p>
  </div>
  <div className='classes_footer_exams_head_one_flex_main'>
  <FontAwesomeIcon  color='red' className="date_icon" icon={faCircle} />
   <p>7% fail</p>
  </div>
  <div className='classes_footer_exams_head_one_flex_main'>
  <FontAwesomeIcon color='blue' className="date_icon" icon={faCircle} />
   <p>2% not-attended</p>
  </div>
   </div>
  </div>

  <div className='classes_footer_exams_head_one'>
   <h3>Maths</h3>
   <div className='classes_footer_exams_head_one_flex'>
  <div className='classes_footer_exams_head_one_flex_main'>
  <FontAwesomeIcon color='green' className="date_icon" icon={faCircle} />
   <p>92% pass</p>
  </div>
  <div className='classes_footer_exams_head_one_flex_main'>
  <FontAwesomeIcon  color='red' className="date_icon" icon={faCircle} />
   <p>7% fail</p>
  </div>
  <div className='classes_footer_exams_head_one_flex_main'>
  <FontAwesomeIcon color='blue' className="date_icon" icon={faCircle} />
   <p>2% not-attended</p>
  </div>
   </div>
  </div>
</div>
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

export default ClassAdmissionForm ;