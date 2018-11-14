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
    }
}



export default Action;