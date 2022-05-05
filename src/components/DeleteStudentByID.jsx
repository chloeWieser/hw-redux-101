import React from 'react'
import {useDispatch, useSelector} from 'react-redux'//added
import {deleteStudentByID} from '../actions/deleteStudentByID'

const DeleteStudentByID = () => {
  const dispatch = useDispatch()  //dispatch is used to run the action
  const studentList = useSelector(state => state.students)
    //Delete student by and ID
  return (
    <>
      Delete Student By ID
      <ul>
        {studentList.map((student, index) =>{
          return <li key={index}>{student.fName} {student.city}<a href="#" 
          onClick={()=>dispatch(deleteStudentByID(student.id))}>X</a></li>
        })}
      </ul>

    </>
  )
}

export default DeleteStudentByID
