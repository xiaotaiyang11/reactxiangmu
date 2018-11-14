var Reducer=function (state,action) {
    if(typeof state==='undefined'){
        return ""
    }

    switch (action.type) {
        case 'USERNAME':
            state=action.text;
            return state;
        default:
            return state;
    }
}
export default Reducer;