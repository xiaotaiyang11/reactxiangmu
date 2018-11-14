

var Reducer=function (state,action) {
    if(typeof state==='undefined'){
        return {
            username:'',
            str:'',
            pinglun:[],
            list:[]
        }
    }

    switch (action.type) {
        case 'PINGLUN':
            state.pinglun=action.text;
            return state;
        case 'USERNAME':
            state.username=action.text;
            return state;
        case 'SEARCH':
             state.str=action.text;
        return state
        case 'GETLIST' :
            state.list = action.text
        default:
            return state;
    }
}
export default Reducer;