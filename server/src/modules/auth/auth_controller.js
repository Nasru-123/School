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
  let testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    service: 'gmail',
auth: {
  user: testAccount.user,
  pass: testAccount.pass,
  },
 
    });

    const mailData = {
      from: 'faizanqubaSSS@gmail.com',  // sender address
        to: email,   // list of receivers
        subject: 'Reset Password',
        html: '<p>You requested for reset password, kindly use this <a href="http://localhost:2000/reset-password?token=' + email + '">link</a> to reset your password</p>'
               
      };
      console.log('email',email)
   const data=  await transporter.sendMail(mailData);
   console.log('data',data)
} catch (error) {
  console.log(error)
}
}

export default {
  login,
  ForgetPasswordService
}