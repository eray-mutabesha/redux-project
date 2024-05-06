import axios from "axios";

export const GET_USER="GET_USER";

export const getPost=()=>{
    return (dispatch)=>{
        return axios.get("http://localhost:3000/user").then((res)=>{
            dispatch({type:GET_USER,payload:res.data[0]})
        })
    }
}