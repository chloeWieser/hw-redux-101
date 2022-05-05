import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {useDispatch, useSelector} from 'react-redux'//added
import {deleteStudentByName} from '../actions/deleteStudentByName'

const DeleteStudentByName = () => {

    //delete student by name
    const [fName, setfName] = useState("")
    const [city, setCity] = useState("")
  
    const dispatch = useDispatch()  //dispatch is used to run the action
    const students = useSelector(state => state.students)

    const handleOnSubmit = (e) => {
      e.preventDefault();
  
      dispatch(deleteStudentByName(fName))


      
    }
  return (
    <>
    Delete Student By Name     
      <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder="First Name" value={fName} onChange={e => setfName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default DeleteStudentByName



