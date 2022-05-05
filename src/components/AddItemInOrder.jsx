
// import React from 'react'

// const AddItemInOrder = () => {
//     //add an item in alphabetical order (not to the end of the list)
//   return (
//     <>
//       ADd Item In Order
//     </>
//   )
// }

// export default AddItemInOrder


import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';   //need that to make the random id #2
import {addNewItemInOrder} from '../actions/addNewItemInOrder'

const AddItemInOrder = () => {
  //add an item in alphabetical order (not to the end of the list)
  const [fName, setFName] = useState('');  //need bc we're creating a new student, which will be an object that will have key, fName and city  #1--this sets the default value , it's what they type
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);  //importing from database bc will need to add and map #3
  let allStudents = []; //#4 set to an empty array so we can add the the new student- this is same as below but not sorted
  let [allSorted, setAllSorted] = useState([]);  //#5 this will be an array of objects of all students- these are all students including the new student, but sorted- its like the 2 above but together
//had to do this so ul can map through the arraye, but after executing the function, bc in the function is where we assign values to the array


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewItemInOrder(uuidv4(),fName, city))

    if (!fName || !city) {
      return alert('please fill in all fields')
    }  //if you don't put anything in the input

    const newStudent = {  //this is when they click we take the value and we assign it to the keys below
      id: uuidv4(), 
      fName,
      city
    }
    // console.log(newStudent);

    allStudents = [...students, newStudent] //we take all the students fromt he data plus the new student, and we alredy have it on line 12 and we append the new students to the old array
    console.log("all students", allStudents);


    let allSorted = allStudents.sort((a, b) => a.fName.toLowerCase() > b.fName.toLowerCase() ? 1 : -1);  //thie sorts the array on line 30 and assigns it to allSorted on line 13
    console.log("all sorted", allStudents);
    setAllSorted(allSorted);  //this is where we modify the state
    setCity('');
    setFName('');  //this is where we empty the input
  }
  //   dispatch({
  //     type: "ADD_STUDENT",
  //     payload: newStudent
  //   });
  //   setCity('');
  //   setFName('');
  // }


  // let student1 = students.sort((a, b) =>
  //   a.fName.toLowerCase() > b.fName.toLowerCase() ? 1 : -1
  // );
  // console.log(student1);
  //add Kanye West to the global state of students
  // show the current student count
  return (
// on submit we take allSorted, which now has a value and we map through it
    <>
      Add New Student in Order
      <br />
      <form onSubmit={handleSubmit}>  
        <input type='text' placeholder='first name' value={fName} onChange={e => setFName(e.target.value)} />
        <input type='text' placeholder='city' value={city} onChange={e => setCity(e.target.value)} />
        <button type='submit'>Add New Student</button>
        <h1>Sorted</h1>
        <ul > {allSorted.map(name => {
          return <li>{name.fName},{name.city}</li>
        })}</ul>
      </form>

    

    </>
  )
}
export default AddItemInOrder

//it's like you're tellling the mapping function, don't go line by line....go through the function first
//problem, when we input somethin, it doesn't stay, it gets replaced with the new

