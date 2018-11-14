var Action={
    username(text){
        return{
            type:'USERNAME',
            text:text
        }
    },
    pinglun(ping){
        return{
            type:'PINGLUN',
            text:ping
        }
    }
}



export default Action;