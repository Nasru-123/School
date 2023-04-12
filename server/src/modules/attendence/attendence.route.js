import express from 'express';
import attendence from './attendence.controller'
const router = express.Router();;



// create api
router.post('/create', async (req, res, next) => {
  let requestBody = req.body;

  try {

    const data = await attendence.create(requestBody);
    console.log('data',data)
    if(!data){
        return res.status(404).json({
          message: "attendence failed inserted"
        })
      }
      return res.status(201).json({
        message: "attendence inserted",
        data: data
      })

  } catch (error) {
    console.log(error)
  }
})

// API for create Attendence


router.get('/getattendence', async (req, res, next) => {
  let requestBody = req.query;
  console.log('req',requestBody)

  try {

    const data = await attendence.calculateAttendence(requestBody.name,requestBody.content);
    console.log('data',data)
    if(!data){
        return res.status(404).json({
          message: "attendence failed inserted"
        })
      }
      return res.status(200).json({
        message: "attendence calculated for the class",
        data: data
      })

  } catch (error) {
    console.log(error)
  }
})



export default router;