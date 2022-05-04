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

    return state;
}

export default reducer;





// let action = {
//     type: "ADD_STUDENT_DATA",
//     students: students
// }

// action.type
// action.students
