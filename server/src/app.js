import express from 'express'
const app = express();
import cors from 'cors';
import mainroutes from './route'
import { configObject } from './utils/config_variables'
app.use(express.urlencoded({ extended: 'false' }))
app.use(express.json())
app.use(cors())
app.use('/api/v2', mainroutes);





app.listen(configObject.port, () => {
  console.log(`App running on port ${configObject.port}`)
})