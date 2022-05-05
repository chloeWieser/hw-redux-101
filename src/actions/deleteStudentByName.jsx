

export const deleteStudentByName = (fName) => {
    return {
        type : 'DELETE_STUDENT_NAME',
        fName
    }
}