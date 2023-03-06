import './forget-password.css';
import { useEffect, useState } from "react";
import { Navigate, useNavigate,Link } from "react-router-dom";
import axios from "axios";

const ForgetPassword = () => {
    const [showReset,setResetPassword] = useState(true);
    const [email, setEmail] = useState("");
    const handlingSubmit=async(e)=>{

        setResetPassword(false);
        const data = {
            email:email
          };
        try {
            console.log('runnnn',data)
            const res = await axios.post(
              "http://192.168.1.15:2000/api/v2/auth/forget-password",
              data
            );
      console.log('res',res)
            // if (res.status == 200) {
            //   localStorage.setItem("authenticated", false);
            //   navigate("/dashboard");
            // }
          } catch (error) {
            console.log(error)
            // navigate("/login");
            // localStorage.setItem("authenticated", true);
            // setIsAlertVisible(true);
            // setIsTrue(true);
            // setUserName("");
            // setPassword("");
          }
        e.preventDefault()
    }
  return (
  <>
{
    showReset ? 
     <div class="container">
     <form onSubmit={handlingSubmit} className='form'>
       <h2>Reset Password</h2>
       <p>Please enter your email address below and we'll send you instructions on how to reset your password.</p>
       <div class="form-group">
         <label for="email">Email</label>
         <input  onChange={(event) => setEmail(event.target.value)} type="email" id="email" name="email" required />
       </div>
       <button type="submit">Reset Password</button>
     </form>
   </div>
   :
   <Link to="/login">
 <div className='container'>
   <form   className='form'>
       <h2>Reset Password Sent Sucessfully</h2>
     </form>
   </div> 
   </Link>
  
}
 
  </>
  );
};

export default ForgetPassword;
