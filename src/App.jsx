
import { useSelector } from 'react-redux'
import './App.css'
import Form from './components/Form'

function App() {
 const posts = useSelector((state)=>state.postReducer);
 console.log(posts)
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
