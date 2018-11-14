

var Reducer=function (state,action) {
    if(typeof state==='undefined'){
        return {
            username:"",
            list:[]
        }
    }

    switch (action.type) {
        case 'USERNAME':
            state.username = action.text;
            return state;
        case 'GETLIST' :
            state.list = action.text
        default:
            return state;
    }
}
<<<<<<< HEAD

=======
>>>>>>> 524d526ed5f8065fa9167ead00a13257086e92ef
export default Reducer;