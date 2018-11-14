var Reducer=function (state,action) {
    if(typeof state==='undefined'){
        return {
            username:'',
            pinglun:[]
        }
    }

    switch (action.type) {
        case 'PINGLUN':
            state.pinglun=action.text;
            return state;
        case 'USERNAME':
            state.username=action.text;
            return state;
        default:
            return state;
    }
}

export default Reducer;