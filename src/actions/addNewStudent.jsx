

export const addNewStudent = (id, fName, city) => {
    return {
        type : 'ADD_NEW_STUDENT',
        data: {
            id,
            fName,
            city
        }
    }
}
