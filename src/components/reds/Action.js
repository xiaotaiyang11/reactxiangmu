var Action={
    username(text){
        return{
            type:'USERNAME',
            text:text
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