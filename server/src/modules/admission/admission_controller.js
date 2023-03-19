import jwt from 'jsonwebtoken';
import { Admission } from './admission.model'


// Create Admission routes


const create = async (request) => {
  try {
console.log('request',request)

const student = await Admission.query().insert({
    firstName: request.firstName,
    lastName: request.lastName,
    fatherName:request.fatherName,
    phoneNumber:request.phoneNumber,
    address:request.address,
    grade:request.grade,
    age:Number(request.age),
    gender:request.gender
    
  });
  return student;
  } catch (error) {
    console.log(error)
  }
}


const getGradeByName = async (name) => {
  try {

const regex = /Grade (\d+)/;
const match = name.match(regex);
const schoolGrade=match[1];
 const classDetails=await Admission.query().where('grade', schoolGrade);
 return classDetails;


  } catch (error) {
    console.log(error)
  }
}


export default {
    create,
    getGradeByName
}