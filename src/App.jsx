
import { useSelector } from 'react-redux'
import './App.css'
import Form from './components/Form'

function App() {
 const posts = useSelector((state)=>state.postReducer);

  return (
    <>
       <Form/>
       <div>
       <h1>posts</h1>
       <div>
        <p>{posts}</p>
       </div>

       </div>
    </>
  )
}

export default App
