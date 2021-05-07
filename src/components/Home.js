import '../index.css';
import Hero1 from '../img/hero1.png'
import Hero2 from '../img/hero2.png'
import Hero3 from '../img/hero3.png'
import React from 'react';
import {useHistory} from "react-router-dom"

import {motion} from 'framer-motion'

export const Home = () => {
const history = useHistory();
const toLogin = ()=>{
    if(localStorage.getItem('token')){
        history.push('/myTeam')
    }else{  history.push("/Login")}
  
}


    return <div className="vh-100">
         {/* <motion.h2 className='text-center' animate={{scale:1.2}} transition={{duration:2}}> Holaa</motion.h2> */}
        <div className="vh-50 d-flex justify-content-around">

            <img className="w-25 hero1" src={Hero1}></img>
            <img className="w-25 hero2" src={Hero2}></img>
            <img className="w-25 hero3" src={Hero3}></img>

        </div>
        <motion.div className="d-flex justify-content-center  w-100 vh-50" 
        initial={{y:-150}} animate={{y:0}} transition={{duration:0.5,type:'spring'}}>
        <div className="  p-3 flex-column d-flex cardHome justify-content-center">
       <div><div className=" w-100 mt-4">
           <motion.h1  className="text-center">Create your favorite team of superheroes</motion.h1>
       </div></div> 
      <div>
      <div className="mt-4 w-100 d-flex justify-content-center">
        <motion.button className='btn lila btn-lg text-light ' initial={{opacity:0}}
         animate={{opacity:1}} transition={{duration:0.5}}
          whileHover={{boxShadow:'0px 0px 11px  white',scale:1.2}}  onClick={toLogin} > Start!</motion.button></div>
        </div>
        </div>
        </motion.div>

   
    </div>
}