var Reducer=function (state,action) {
    if(typeof state==='undefined'){
        return {
            username:'',
            str:''
        }
    }

    switch (action.type) {
        case 'USERNAME':
            state.username=action.text;
            return state;

        case 'SEARCH':
        state.str=action.text;
        return state
            
        default:
            return state;
    }
}

export default Reducer;