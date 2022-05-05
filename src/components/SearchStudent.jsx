// import React, {useState, useEffect} from 'react'

// const SearchStudent = () => {

//     // search for a student by name, if nothing found, return empty array

//     // save the search results for the last 3 searches
//   return (
//     <>
//       Search Student
//     </>
//   )
// }

// export default SearchStudent


import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'; 

const SearchStudent = () => {

  const students = useSelector(state => state.students)
  const [filteredStudents, setFilteredStudents] = useState([])

  const [filteredText, setFilteredText] = useState("")

  const handleChange = (e) => {
    setFilteredText(e.target.value)

    let filteredStudents = students.filter(student =>{
        return student.fName.toLowerCase().includes(filteredText.toLowerCase())
    })

    setFilteredStudents(filteredStudents)
}

    // search for a student by name, if nothing found, return empty array

    // save the search results for the last 3 searches
  return (
    <>
      Search Student
      <input type="text" value={filteredText} onChange={handleChange} /> 
      <ul>
        {filteredStudents.map((student) =>{
            return <li key={student.id}>
                    <h2>{student.fName}, {student.city}</h2>

                </li>
        })}
    </ul>
    </>
  )
}

export default SearchStudent
