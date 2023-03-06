import express from 'express';
import middlewares from '../../middleware/auth_middleware';
import user from './auth_controller'
const router = express.Router();;



// login api
router.post('/login', async (req, res, next) => {
  let requestBody = req.body;
  try {

    const users = await user.login(requestBody);
    if (Object.keys(users).length == 0) {
      return res.status(500).json({
        message: "Failed login"
      })
    } else {
      return res.status(200).json({
        message: "sucessfully users LogedIn!!!",
        user: users
      })
    }
  } catch (error) {
    console.log(error)
  }
})

router.post('/forget-password',(req,res)=>{
  let email = req.body.email;
  user.ForgetPasswordService(email);
})


export default router;