var Action={
    username(text){
        return{
            type:'USERNAME',
            text:text
        }
    },
    searchItem(str){
        return{
            type:"SEARCH",
            text:str
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