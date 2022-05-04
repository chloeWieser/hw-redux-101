
import React from 'react'
import initialStudentData from '../data/students';    //ADDED THIS TO GLOBAL STATE BY CREATING ACTION: ADD_STUDENT_DATA (object) and a correcponding case in the reducer, then imported below 2 things, created the dispatch method/function inside an object and then called that in a button event listener (below)
import {useDispatch, useSelector} from 'react-redux'//added
import {addStudentData} from '../actions/addStudentData'

const AddStudents = () => {
  const dispatch = useDispatch()  //dispatch is used to run the action


  // dispatch(addStudentData(initialStudentData))

    // add the list of students from data/students to the global state
    // show the current student count

  return (
    <>
      Add Students 
      <br />

      <button onClick={() => dispatch(addStudentData(initialStudentData))}>Add Students</button>
    </>
  )
}

export default AddStudents
