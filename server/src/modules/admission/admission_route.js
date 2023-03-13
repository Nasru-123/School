import express from 'express';
import admission from './admission_controller'
const router = express.Router();;



// login api
router.post('/create', async (req, res, next) => {
  let requestBody = req.body;

  try {

    const students = await admission.create(requestBody);
    if (Object.keys(students).length == 0) {
      return res.status(500).json({
        message: "Admission not Created"
      })
    } else {
      return res.status(200).json({
        message: "sucessfully admission created",
        students: students
      })
    }
  } catch (error) {
    console.log(error)
  }
})



export default router;