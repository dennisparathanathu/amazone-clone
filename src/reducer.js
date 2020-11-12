export const initialState = {
    basket:[],
    users:null,
};

 function reducer(state, action){
     console.log(action);
     switch(action.type){

         case 'ADD_TO_BASKET':
             return {
                  ...state,
                  basket: [...state.basket, action.basket],
                };
             break;
         case 'REMOVE_FROM_BASKET':
             return { state };
             break;
         default:
             return state;
        
     }
 }
 export default reducer;