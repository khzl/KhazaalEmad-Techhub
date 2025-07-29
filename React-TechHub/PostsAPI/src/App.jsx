import { BrowserRouter as Routes , Route , Link } from "react-router-dom"
import Home from './Pages/Home'
import Users from './Pages/Users'
import Todos from './Pages/Todos'
import Posts from './Pages/Posts'
import PostDetails from './Pages/PostDetails'
import NotFound from './Pages/NotFound'
import './App.css'

function App() {
 

  return (
    <div>
      <nav style={{marginBottom: '20px'}}>
        <Link to= "/">Home</Link> |{""}
        <Link to= "/users">Users</Link> |{""}
        <Link to= "/todos">Todos</Link> |{""}
        <Link to= "/posts">Posts</Link>
      </nav>

      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/users" element = {<Users/>}/>
        <Route path = "/todos" element = {<Todos/>}/>
        <Route path = "/posts" element = {<Posts/>}/>
        <Route path = "/posts/:id" element = {<PostDetails/>}/>
        <Route path = "/*" element = {<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App
