
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Destination from './Components/Destination/Destination';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login'

function App() {
  return (
    <Router>
     <Header></Header>
     <Switch>
       <Route path='/home'>
       <Home></Home>
       </Route>
       <Route path='/blog'>
       <Blog/>
       </Route>
       <Route path='/contact'>
     <Contact />
       </Route>
       <Route path='/login'>
       <Login></Login>
       </Route>
       <Route exact path='/'>
       <Home></Home>
       </Route>
       <Route exact path='/destination'>
        <h1>Please select a ride!</h1>
       </Route>
       <Route path ='/destination/:rideId'>
         <Destination></Destination>
       </Route>
       <Route exact path='*'>
<h1>404 Not found</h1>
       </Route>
     </Switch>
      
    </Router>
  );
}

export default App;
