import jwt from 'jsonwebtoken';
import { User } from '../modules/users/user.model'
const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader) {
      const token = authHeader.split(' ')[0];
      const decoded = await jwt.verify(token, 'fskjvhjks');
      if (decoded.length == 0) {
        return res.send('you have a invalid token')
      }
      const token_email = decoded.email;

      const is_exist = await User.query().where({ email: token_email });
      if (is_exist.length === 0) {
        res.send('invalid email address please signup')
      } else {
        next();
      }

    } else {
      res.send(401).send('invalid token');
    }

  } catch (error) {
    console.log(error)
  }
}


const checkUserExist = async (req, res, next) => {
  let email = req.body.email;

  try {
    const userExist = await User.query().where({ email: email });

    if (userExist.length == 0) {
      next();

    } else {
      res.json({
        message: "email already exist with these credentials"
      })
    }
  } catch (error) {
    console.log(error)
  }
}
export default {
  verifyToken,
  checkUserExist
}