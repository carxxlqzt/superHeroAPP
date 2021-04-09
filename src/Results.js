import React from 'react';
import {Button} from 'react-bootstrap'
import {TeamContext} from "./context/teamHeroes"
export const Results = ({prop})=>{
const {setTeam} = React.useContext(TeamContext)
const {team} = React.useContext(TeamContext)

const addHero = (hero) =>{
setTeam([...team, hero])}

if(prop.length === 0 ){
    return <div className="vh-75"> Search your favorite hero</div>
} else if (prop.response === 'error') {
    return <div className="vh-75"> 
    <div className="w-100 mt-2 border border-danger"> <p className='mb-0 p-1 text-danger'>Error: Heroe not found</p> </div>
    </div>
} else{
        return  <div className="h-results">
            {
        prop.results.map((e) =>{
          return <div key={e.id} className="d-flex justify-content-center h-25">
              
               <div className=" w-75 border h-50  m-3 p-2 d-flex justify-content-around flex-row">
            <img className="imageHero" src={e.image.url} alt={e.name} ></img> 
               <h3 className="fs-5"> {e.name} </h3> 
             
          <Button onClick={()=>addHero(e)} ovariant="link" variant="outline-secondary">+</Button>    
              </div> </div>  
        })} 
   
        </div>
}
}