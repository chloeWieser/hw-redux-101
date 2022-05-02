
const reducer = (state, action) => {
    //if no state has been defined yet, then reducer needs to define it
    if (state === undefined){
        state = {
            students: [],
            count:0,
        }
    }

}

export default reducer;