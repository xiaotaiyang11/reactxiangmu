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
    },
    getList(data){
        return{
            type:"GETLIST",
            text:data
        }
    }
}
export default Action;