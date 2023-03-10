import jwt from 'jsonwebtoken';
import { User } from '../users/user.model'
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer'

// Login routes


const login = async (request) => {
  try {

    const userObject = {
      username: request.username,
      password: request.password
    }
    const checkUserExist = await User.query()
      .where({ username: userObject.username,password:userObject.password })
    if (checkUserExist.length === 0) {
      return {

      }
    } else { 
  
        return {
          checkUserExist
        }
    }
  } catch (error) {
    console.log(error)
  }
}


const ForgetPasswordService = async(email) =>{
try {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nukhan55@gmail.com',
        pass: 'lqrbzmlnukrztucv'
    }
 
    });

    const mailData = {
      from: 'faizanquba1@gmail.gmail.com',  // sender address
        to: email,   // list of receivers
        subject: 'Reset Password',
        html: '<p>You requested for reset password, kindly use this <a href="http://localhost:3000/api/v2/auth/reset-password?token=' + email + '">link</a> to reset your password</p>'
               
      };

   const data=  await transporter.sendMail(mailData);
   if(data){
    return data;
   }
} catch (error) {
  console.log(error)
}
}

const ResetPassword = async(password,email) => {
try {
        const userUpdated = await User.query()
        .patch({ password: `${password}` })
        .where('email', `${email}`);
        console.log('user',userUpdated)
        if(userUpdated == 1){
          return userUpdated
        }else{
          return null
        }
} catch (error) {
  console.log(error)
}
}

export default {
  login,
  ForgetPasswordService,
  ResetPassword
}