// These are the imports for components
import './App.css';
import Home from './Home';
import PlantList from "./PlantList"
import User from './User';

// These are the imports for functionality
import { useState, useEffect} from "react"
import {BrowserRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'




// Main APP
function App() {
  // users 
  const [userData, setUserData] = useState([]); 
  useEffect(() => {
  fetch("http://localhost:9292/users")
  .then((r) => r.json())
  .then((data) => setUserData(data))
  },[])

  
 
 
 // plants  
const [data, setData] = useState([]); 
useEffect(() => {
fetch("http://localhost:9292/plants")
.then((r) => r.json())
.then((data) => setData(data))
},[])
 


return (
<BrowserRouter>
<div id="clock">

</div>
{ userData !== [] && <User userData={userData} />}
  <Switch>
    <Route path="/plants">
      <PlantList data={data} userData={userData}/>
        </Route>
          <Route exact path="/">
        <Home />
      </Route>
  </Switch>
</BrowserRouter>

);
}

export default App;

