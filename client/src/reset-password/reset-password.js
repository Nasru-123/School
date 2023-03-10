import './reset-password.css';
import { useEffect, useState } from "react";
import { useLocation,Navigate, useNavigate,Link} from "react-router-dom";


import axios from "axios";

const ResetPassword = () => {
    const [resetPassword, setResetPassword] = useState("");
    const [showReset,showResetPassword] = useState(true);
    const [conformPassword, setConformPassword] = useState("");
   const url = useLocation().search
  const [message,setMessage]=useState('');

const handlingResetPassword = async(e) =>{
  e.preventDefault()
  if(conformPassword !== resetPassword){
    setMessage("Reset and confirm password must match")
  }
    try {
        const data = {
            resetPassword,
            conformPassword,
            email:url.split("=")[1]
          };
       
        showResetPassword(false)
        const res = await axios.post(
            "http://localhost:2000/api/v2/auth/reset-password",
            data
          );
        
         
    } catch (error) {
        
    }
    e.preventDefault()
}

    return (
        <>
        {
          showReset ? 
          <div class="reset_container">
          {message && <p>{message}</p>}
          <h2 style={{marginLeft: '28px'}}>New Password</h2>
          <form className='reset_form'  onSubmit={handlingResetPassword}>
          <label for="password"><b>New Password</b></label>
          <input type="password" placeholder="Enter New Password" name="password"  onChange={(event) => setConformPassword(event.target.value)} required  />
  
          <label for="confirmPassword"><b>Confirm Password</b></label>
          <input  type="password" placeholder="Enter Confirm Password" name="confirmPassword"  onChange={(event) => setResetPassword(event.target.value)} required />
  
          <button type="submit">Save Changes</button>
        </form>
  
   
      </div> :
 <Link to="/login">
 <div className='container'>
   <form   className='form'>
       <h2>Reset Password Updated</h2>
     </form>
   </div> 
   </Link>
        }
      
        
        </>
      );
    

};

export default ResetPassword;