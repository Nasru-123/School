import jwt from 'jsonwebtoken';
import { Attendence } from './attendence.model'


// Create attendence routes


const create = async (request) => {
  try {
    console.log('req',request.body)
const attendence = await Attendence.query().insert(request.body);
  return attendence;
  } catch (error) {
    console.log(error)
  }
}


const calculateAttendence = async (name,content) =>{
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  console.log('formated',formattedDate)
  const regex = /Grade (\d+)/;
const match = name.match(regex);
const schoolGrade=match[1];

 const studentsPresented= Attendence.query().where('class', schoolGrade).where('present', 'true')


 if(content == 'Monthly'){
  studentsPresented.where((builder) => {
    builder.whereRaw(`date_trunc('month', "createdAt")::date = date_trunc('month','${formattedDate}'::date)`)
  })
 }else if(content == 'Weekly'){
  studentsPresented.where((builder) => {
    builder.whereRaw(`date_trunc('week', "createdAt")::date = '${formattedDate}'`)
  })
 }else if(content == 'Yearly'){
  studentsPresented.where((builder) => {
    builder.whereRaw(`date_trunc('year', "createdAt")::date = date_trunc('year','${formattedDate}'::date)`)
  })
 }else if(content == 'Today'){
  studentsPresented.where((builder) => {
    builder.whereRaw(`date_trunc('day', "createdAt")::date = '${formattedDate}'::date`)
  })
 }
 


 const studentAbsented= Attendence.query().where('class', schoolGrade).where('present', 'false')

 

 if(content == 'Monthly'){
  studentAbsented.where((builder) => {
    builder.whereRaw(`date_trunc('month', "createdAt")::date = date_trunc('month','${formattedDate}'::date)`)
  })
 }else if(content == 'Weekly'){
  studentAbsented.where((builder) => {
    builder.whereRaw(`date_trunc('week', "createdAt")::date = '${formattedDate}'`)
  })
 }else if(content == 'Yearly'){
  studentAbsented.where((builder) => {
    builder.whereRaw(`date_trunc('year', "createdAt")::date = date_trunc('year','${formattedDate}'::date)`)
  })
 }
 else if(content == 'Today'){
  studentsPresented.where((builder) => {
    builder.whereRaw(`date_trunc('day', "createdAt")::date = '${formattedDate}'::date`)
  })
 }
 const studentAbsent=await studentAbsented.count().as('totalPresent')
 const studentsPresent=await studentsPresented.count().as('totalPresent');

return {
  studentsPresent,
  studentAbsent
}
}

export default {
    create,
    calculateAttendence
}