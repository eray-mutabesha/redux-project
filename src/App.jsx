
import { useSelector } from 'react-redux'
import './App.css'
import Form from './components/Form'

function App() {
  // a comment that describe the userselector
 const posts = useSelector((state)=>state.postReducer);
 
  return (
    <>
       <Form/>
       <div className='all_flex'>
     
       <div className='all_post_div'>
        <div>
        <h1>{posts.titre}</h1>
        </div>
       <div>
         <h2></h2>
        <p>{posts.post}</p> 
       </div>
       <div className='like_and_delete_images_div'>
        <img src="public\images\black_like.png" alt="likeImage" />
        <img src="public\images\deleteimage.png" alt="likeImage" />
       </div>
       </div>
       <div className='auteur_div'>
          <img src="public\images\erayphoto.jpg" alt="profil" />
          <h2>Eratata</h2>
          <h3>Likes:35</h3>
        </div>
       </div>
      
    </>
  )
}

export default App
