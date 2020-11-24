import './App.css';
import { BrowserRouter as Router, Route, NavLink, Redirect} from "react-router-dom";
import {useSelector} from 'react-redux'
import Login from "./pages/Login/Login"
function App() {
 const isLoggined = useSelector(state => state.isLoggined);
  return(
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/profile">Profile</NavLink>

        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/news">
          <h1>News</h1>
        </Route>
        <Route path="/profile">
          {isLoggined?<h1>Profile</h1>:<Redirect to="login"/>}
        </Route>
  
      </div>
  )
}
export default App;