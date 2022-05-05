import React, {useState} from 'react'
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

      if (students.find(nameObj => nameObj.fName === fName)) {
        // console.log(typeof fName);

        dispatch(deleteStudentByName(fName))
      } else {
        setfName("")
        return alert('Name was not found')
      }
      }

      // dispatch(deleteStudentByName(fName))
      // let student1 = students.find(nameObj => nameObj.fName != fName);
      // console.log(student1,"this is definitely it"); 
    
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



