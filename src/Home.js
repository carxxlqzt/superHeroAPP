import './index.css';
import { Button} from 'react-bootstrap';
import Hero1 from './img/hero1.png'
import Hero2 from './img/hero2.png'
import Hero3 from './img/hero3.png'
import React from 'react';
import {useHistory} from "react-router-dom"


export const Home = () => {
const history = useHistory();
const toLogin = ()=>{
    history.push("/Login")
}

// const toMyTeam = () =>{
//     history.push("/myTeam")
// };

    return <div className="vh-100">
        <div className="vh-50 d-flex justify-content-around">

            <img className="w-25 hero1" src={Hero1}></img>
            <img className="w-25 hero2" src={Hero2}></img>
            <img className="w-25 hero3" src={Hero3}></img>

        </div>
        <div className="d-flex justify-content-center  w-100 vh-50">
        <div className="  p-3 flex-column d-flex cardHome justify-content-center">
       <div><div className=" w-100 mt-4">
        <h1 className="text-center"> Create your favorite team of superheroes</h1></div></div> 
      <div>
      <div className="mt-4 w-100 d-flex justify-content-center">
        <Button onClick={toLogin} size="lg" variant="success"> Start!</Button></div></div></div></div>
    
    </div>
}