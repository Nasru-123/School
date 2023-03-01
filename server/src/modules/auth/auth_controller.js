import jwt from 'jsonwebtoken';
import { User } from '../users/user.model'
import bcrypt from 'bcryptjs';

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


export default {
  login
}