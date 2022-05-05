
import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {useDispatch, useSelector} from 'react-redux'//added



const DisplayStudents = () => {

    //display the current students
    const studentList = useSelector(state => state.students)  //added
    const counter = useSelector(state => state.count)


  
  return (
    <>
    Display Students
      <ul>
        {studentList.map((student, index) =>{
          return <li key={index}>{student.fName} {student.city}</li>
        })}
      </ul>
      <h1>{counter}</h1>
    </>
  )
}

export default DisplayStudents



// studentList.map((el, index)=>{
//   console.log(el)
//   return el 
// })

// studentList.map(func1)

// const func1 = (el)=>{
//   console.log(el)
//   return el 
// }



// a callback funciton is any function given as an argument to another function 

// anonymous arrow function ---- ()=>{}
// anonymous standard function ----- function(){}

// named arrow function const addNums = ()=>{}
// named standard function function addNums(){}
