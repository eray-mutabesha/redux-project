
import { useSelector } from 'react-redux'
import './App.css'
import Form from './components/Form'
import Post from './components/Post';
import Autheur from './components/Autheur'
import React from 'react'
import { isEmpty } from './components/Utils';




function App() {
  // a comment that describe the userselector
 const posts = useSelector((state)=>state.postReducer);
 const users = useSelector((state)=>state.userReducer);
  return (   
    <>
       <Form/>
      <section className='all_sections'>
        <section className='elements'>
          <section>{!isEmpty(posts)&&posts.map((post, index)=>(
            
        <Post post={post} key={index}/>
        
         ))}
         </section>
        <section>
        {!isEmpty(users)&&users.map((auth, index)=>(
        <Autheur user={auth} key={index}/>
        ))}
        </section>
        </section>
       
      </section>
       
      
    </>
  )
}

export default App
