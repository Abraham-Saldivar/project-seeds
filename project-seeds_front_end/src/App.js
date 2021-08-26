// These are the imports for components
import './App.css';
import Home from './Home';
import PlantList from './PlantList'

// These are the imports for functionality
import { useState, useEffect} from "react"
import {BrowserRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'



// Main APP
function App() {

  
const [data, setData] = useState([]); 
useEffect(() => {
fetch("http://localhost:9292/plants")
.then((r) => r.json())
.then((data) => setData(data))
},[])
 

  return (
<BrowserRouter>
  <Switch>
    <Route path="/plants">
      <PlantList data={data}/>
        </Route>
          <Route exact path="/">
        <Home />
      </Route>
  </Switch>
</BrowserRouter>

);
}

export default App;



// import Header from "./Header"
// import logo from './logo.svg';
// import PlantList from './PlantList'