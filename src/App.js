
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './index.css';
import {Header} from "./components/Header" ;
import {Home} from "./components/Home"
import {MyTeam} from "./components/MyTeamOfHeroes"
import {Login} from "./components/Login"
import React from 'react'
import {Provider} from 'react-redux'
import generateStore from './redux/store'
function App() {

 const store = generateStore()
  return (
   
    <div  className="bg-header">
      <Router>
      <Provider store={store}>
      <Switch>
      <Route path="/" exact>
      <Header/>
            <Home />

          </Route>
          <Route path="/myTeam">
      <Header/>

            <MyTeam />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
      </Switch>
      </Provider>
      </Router>
    </div>
    
  );
}

export default App;
