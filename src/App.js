import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import ListContent from './Components/ListContent';
import CreateContact from './Components/CreateContact';

function App() {
  return (
    <div className="App">
       <Router>
       <div className='container'>
      <Header />
              <div className="container">
          <Switch> 
              <Route path="/" exact component={ListContent}></Route>
              <Route path="/address" component ={ListContent}></Route>
              <Route path="/create-contact" component ={CreateContact}></Route>
              </Switch>
     </div>
   
    </div>
    </Router>
    </div>
  );
}

export default App;