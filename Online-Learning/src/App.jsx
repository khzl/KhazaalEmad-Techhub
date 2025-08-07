import { BrowserRouter as Router , Routes , Route , Navigate } from "react-router";
import { AuthProvider , useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";


function PrivateRoute({children})
{
  const {user} = useAuth();
  return user ? children : <Navigate to={"/"}/>;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
          <Route path="/resources" element={<PrivateRoute><Resources/></PrivateRoute>}/>
        </Routes>
      </Router>
    </AuthProvider>
  ); 
}

export default App
