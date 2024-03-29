import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {
  const { user } = useContext(AuthContext);
  
  console.log('user', user);
  return (
    <Router>
      <Routes>

        <Route exact path="/" element={user ? <Home /> : <Register/>}/>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}/>
       

    


      </Routes>
    </Router>
  );
}

export default App;
