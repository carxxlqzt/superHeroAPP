
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './index.css';
import {Header} from "./Header" ;
import {Home} from "./Home"
import {MyTeam} from "./MyTeamOfHeroes"
import {Login} from "./Login"
import React from 'react'
import {TeamContext} from "./context/teamHeroes";
import {isAuth} from "./context/isAuth";

function App() {
  const [team,setTeam]= React.useState([])
  const [auth,setAuth]= React.useState([])
 
  return (
    <TeamContext.Provider value={{team,setTeam}}>
      <isAuth.Provider value={{auth,setAuth}}>
    <div  className="bg-sky App">
      <Router>
      
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
      </Router>
    </div>
    </ isAuth.Provider>
    </TeamContext.Provider>
  );
}

export default App;
