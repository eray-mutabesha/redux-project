
import { useSelector } from 'react-redux'
import './App.css'
import Form from './components/Form'

function App() {
  // a comment that describe the userselector
 const posts = useSelector((state)=>state.postReducer);
 
  return (
    <>
       <Form/>
       <div>
       <h1>posts</h1>
       <div>
         <h1>{posts.titre}</h1>
        <p>{posts.post}</p> 
       </div>

       </div>
    </>
  )
}

export default App
