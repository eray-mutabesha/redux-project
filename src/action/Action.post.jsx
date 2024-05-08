import axios from "axios";

export const GET_POST="GET_POSTS";
export const ADD_POST="ADD_POSTS";

export const getPosts=()=>{
    return (dispatch)=>{
        return axios.get("http://localhost:3000/post").then((res)=>{
            dispatch({type:GET_POST,payload:res.data})
        })
    }
}
export const addPost=(data)=>{
    return (dispatch)=>{
        return axios.post("http://localhost:3000/post",data).then((res)=>{
            dispatch({type:ADD_POST,payload:data})
        })
    }
}