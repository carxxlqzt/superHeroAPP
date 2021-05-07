import '../index.css';

import React from "react";
import {SearchHeroes} from "./Search";
import {Team} from './Team'
import {Modal} from 'react-bootstrap'
import {motion} from 'framer-motion'

export const MyTeam = ()=>{
 
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return <div className='myTeam'> 
    <div className="mt-3 mb-4 w-100 d-flex justify-content-center">
       <motion.button className='btn bg-btn text-light' 
       initial={{y:200}} animate={{y:0}} transition={{duration:0.8}}
       onClick={handleShow}>
        <i className="fab fa-searchengin"></i> Search Hero
        </motion.button></div>
       
       
        
          <Team/>
          <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <SearchHeroes/>
          </Modal.Body>
         
        </Modal>

    </div>
       
  
  
  

}