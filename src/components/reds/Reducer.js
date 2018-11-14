

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

export default Reducer;