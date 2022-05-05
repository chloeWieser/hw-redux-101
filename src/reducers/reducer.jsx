import students from "../data/students";

const reducer = (state, action) => {
    //if no state has been defined yet, then reducer needs to define it
    // console.log('here')
    if (state === undefined){
        state = {
            students: [],
            count:0,
        }
    }

    switch(action.type){
        case "ADD_STUDENT_DATA":
            return{
                ...state,
                students: action.students,
                count: action.students.length 
            }
    }
    switch(action.type){
        case "ADD_NEW_STUDENT":
            return{
                ...state,
                students: state.students.concat(action.data),
                count: state.count + 1
            }
    }
    switch(action.type){
        case "DELETE_STUDENT_ID":
            return{
                ...state,
                students: state.students.filter(student =>{
                    return student.id!== action.id
                }),
                count: state.count - 1
            }
    }
    switch(action.type){
        case "DELETE_STUDENT_NAME":
            return{
                ...state,
                students: state.students.filter(student =>{
                    return student.fName!== action.fName
                }),
                count: state.count - 1
            }
    }


    return state;
}

export default reducer;





// let action = {
//     type: "ADD_STUDENT_DATA",
//     students: students
// }

// action.type
// action.students
