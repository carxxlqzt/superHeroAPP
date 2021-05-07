import { Navbar,Nav} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import {motion} from 'framer-motion'
import '../index.css';

export const Header = () => {
  const history = useHistory();
const toHome = ()=>{
    history.push("/")
}
const toInit = ()=>{
  history.push("/Login")
} 
if(localStorage.getItem('token')){
  return   <div>
  <Navbar className='bg-info' expand="lg">
<Navbar.Brand  onClick={toHome}>
<div className="d-flex ">  
<motion.h2 initial={{x:'-100vw'}} animate={{x:0}}  className="text-light m-2"> SUPERHERO APP</motion.h2></div>
</Navbar.Brand>

<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
<motion.Nav > 
<motion.h4 className='m-0' initial={{y:-200}} animate={{y:0,textShadow:'0px 0px 8px  white'}} transition={{delay:1}}>Welcome!</motion.h4 ></motion.Nav>


</Nav>

</Navbar.Collapse>
</Navbar>
</div> 
}
else{ return  <div>
        <Navbar bg="info" expand="lg">
  <Navbar.Brand  onClick={toHome}>
    <div className="d-flex ">  <h2 className="text-light m-2"> SUPERHERO APP</h2></div>
  </Navbar.Brand>
 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link onClick={()=>toInit()} >Login</Nav.Link>
   
  
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
   </div> 
}}

  