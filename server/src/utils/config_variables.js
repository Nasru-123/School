const dotenv = require('dotenv')
dotenv.config();





const configObject = {
  port: process.env.PORT,

}

export {
  configObject
}