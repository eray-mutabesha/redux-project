import axios from "axios";



export const GET_POST="GET_POSTS";
export const getPosts=()=>{
    return (dispatch)=>{
        return axios.get("http://localhost:3000/post").then((res)=>{
            console.log(res)
        })
    }
}