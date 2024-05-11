import { GET_POST,ADD_POST } from "../action/Action.post";

const initialeState={}
export default function postReducer(state= initialeState,action){

  switch(action.type){
    case GET_POST:
      return action.payload;
    
    case ADD_POST:
        return [action.payload, ...state];
        default : return state;  
  }

}