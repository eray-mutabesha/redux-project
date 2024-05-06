
import { GET_USER } from "../action/User.action";

 const initialeState={}
export default function userReducer(state= initialeState,action){
 switch(action.type){
 case GET_USER:
     return action.payload;
     default:
          return state;
 }
}