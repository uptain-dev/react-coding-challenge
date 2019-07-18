const booksDefault=[];

export default (state = booksDefault, action)=>{
    switch(action.type){
        case 'SET_BOOKS':
            return action.books;
        default:
            return state;
    }
}