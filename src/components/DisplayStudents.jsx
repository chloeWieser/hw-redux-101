
import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {useDispatch, useSelector} from 'react-redux'//added

const DisplayStudents = () => {

    //display the current students
    const [fName, setFName] = useState("")
    const [city, setCity] = useState("")
    const studentList = useSelector(state => state.students)  //added
  return (
    <>
    Display Students
    <ul>
        {studentList.map(student =>{
          return <li>{student.fName} {student.city}</li>
        })}
      </ul>
    </>
  )
}

export default DisplayStudents
