import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import { Navigate } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/Signin";
import NoteFound from "./pages/NoteFound";

function App() {
  const userLoggedIn = false; // Simulating user login status
  return (
    <Routes>
      {/* Navigate (Redirecting) */}
      <Route
        path="/login"
        element={userLoggedIn ? <Dashboard /> : <Navigate to="/signup" />}
      />
      {/* Basic Routing */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {/* Layout Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
      {/* Dynamic Routing */}
      <Route path="/user/:id" element={<User />} />
      {/* Nested Routing */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      {/* Catch-All Routing */}
      <Route path="*" element={<NoteFound />} />
    </Routes>
  );
}

export default App;
