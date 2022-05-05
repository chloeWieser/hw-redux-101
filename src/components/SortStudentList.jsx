import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


const SortStudentList = () => {

    //sort studentlist in alphabetical order

  const dispatch = useDispatch();
  const students = useSelector(state => state.students);
  // const [arr, setArr] = useState('');


  const handleSortByName = () => {
    const mapFirstName = students.map(student => {
      return `${student.fName} , ${student.city}`
    })
    const sortedStudents = mapFirstName.sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    console.log(sortedStudents);
  }


  const handleSortByCity = () => {
    const mapCity = students.map(student => {
      return `${student.city}, ${student.fName}`
    })
    const sortedCities = mapCity.sort(function (a, b) {
      // return a.toLowerCase().localeCompare(b.toLowerCase());
      const sortedCities1 = a.toLowerCase().localeCompare(b.toLowerCase());
      // setArr(sortedCities1)
      return sortedCities1
    });
    console.log(sortedCities);}

  return (
    <>
      <h1>Display Students</h1>
      <button onClick={handleSortByName}>sort by name</button>
      <button onClick={handleSortByCity}>sort by city</button>
      
    </>
    //CONDITIONAL RENDERING
  )
}

export default SortStudentList