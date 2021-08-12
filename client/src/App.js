import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Profile from "./pages/Profile"


function App() {
  
  
  return(
    <>
    <Router>
      <Navbar />
      <Route path="/register" exact render={() => <Register />} />
      <Route path="/" exact render={() => <Home />} />
      <Route path="/login" exact render={() => <Login />} />
      <Route path="/profile/:username" exact render={() => <Profile />} />
    </Router>
    </>
  );
}

export default App;
