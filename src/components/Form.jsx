import React from 'react'
import { useRef } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addPost } from '../action/Action.post';



function Form() {
const form=useRef();
const dispatch=useDispatch();
const post =useSelector((state)=>state.postReducer);
console.log(form)
const handleSubmit=async(e)=>{
   e.preventDefault();
   const postData={
   titre:form.current[0].value,
   post:form.current[1].value,
   likes:0,
   };
   dispatch(addPost(postData))
   form.current.reset();
}




  return (
    <div>
      <form ref={form} onSubmit={handleSubmit}>
        <input type="text" name=""  placeholder='Titre'/>
        <textarea name="" id="" cols="30" rows="10" placeholder='Article'></textarea>
        <button type='submit'>poster</button>
      </form>
    </div>
  )
}

export default Form
