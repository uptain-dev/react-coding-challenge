const subjectsDefault=[];

export default (state = subjectsDefault, action)=>{
    switch(action.type){
        case 'SET_SUBJECTS':
            return action.subjects;
        default:
            return state;
    }
}