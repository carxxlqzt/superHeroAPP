import './index.css';

import React from "react";
import {SearchHeroes} from "./Search";
import {Team} from './Team'
import {Button,Modal} from 'react-bootstrap'

export const MyTeam = ()=>{
 
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return <div className='myTeam'> 
    <div className="mt-3 mb-4 w-100 d-flex justify-content-center"> <Button variant="primary" onClick={handleShow}>
        <i class="fab fa-searchengin"></i> Search Hero
        </Button></div>
        <Team/>   <Modal show={show} onHide={handleClose}>
        
          <Modal.Body>
            <SearchHeroes/>
          </Modal.Body>
         
        </Modal>
    </div>
       
  
  
  
  //   return <div>
      
  // 
  //
  //   </div>
}