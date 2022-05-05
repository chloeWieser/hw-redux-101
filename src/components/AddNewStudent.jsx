import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {useDispatch, useSelector} from 'react-redux'//added
import {addNewStudent} from '../actions/addNewStudent'

const AddNewStudent = () => {

  const [fName, setfName] = useState("")
  const [city, setCity] = useState("")

  const dispatch = useDispatch()  //dispatch is used to run the action
  const students = useSelector(state => state.students)

    //add Kanye West to the global state of students
    // show the current student count

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewStudent(uuidv4(),fName, city))

  }

  return (
    <>
      Add New Student 
      <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder="First Name" value={fName} onChange={e => setfName(e.target.value)} />
        <input type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
        <button type="submit">Add New Student</button>
      </form>

      <br /> 

    </>
  )
}

export default AddNewStudent
