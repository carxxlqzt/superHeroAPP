import { Navbar,Nav} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
export const Header = () => {
  const history = useHistory();
const toHome = ()=>{
    history.push("/")
}
const toInit = ()=>{
  history.push("/Login")
}
   return <div>
        <Navbar bg="info" expand="lg">
  <Navbar.Brand  onClick={toHome}>
    <div className="d-flex "> <i className="fas fa-rocket golden m-2"></i>   <h2 className="text-light m-1"> SUPERHERO APP</h2></div>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link onClick={()=>toInit()} >Login</Nav.Link>
   
  
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
   </div> 
}