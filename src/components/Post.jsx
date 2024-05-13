import React from 'react'


const Post=({post})=> {
  return (
   
    <div className='all_post_div'>
     <h1>{post.titre}</h1>
     
    <p>{post.post}</p>
    
    <div className='like_and_delete_images_div'>
     <img src="public\images\black_like.png" alt="likeImage" />
     <img src="public\images\deleteimage.png" alt="likeImage" />
    </div>
    </div>
    
  )
}

export default Post




