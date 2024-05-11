import React from 'react'
import { useState } from 'react'




const Post=({post})=> {
const [editpost,setEditpost]=useState(false)

  return (
   
    <div className='all_post_div'>
     <h1>{post.titre}</h1>
     
    {editpost ?(
      <form action="">
        <textarea autoFocus={true}  placeholder='edit' defaultValue={post.post}>

        </textarea>
        <button type='submit'>valder</button>
      </form>
    ):<p>{post.post}</p>}
    
    <div className='like_and_delete_images_div'>
     <img src="public\images\black_like.png" alt="likeImage" />
     <img src="public\images\deleteimage.png" alt="likeImage" />
     {/* <img src="public\images\editPhoto.png"/> */}
    </div>
    </div>
    
  )
}

export default Post




