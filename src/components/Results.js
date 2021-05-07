import React from 'react';
import {Button} from 'react-bootstrap'
import {addHero} from '../redux/ducks'
import {useDispatch,useSelector} from 'react-redux'
import '../index.css';
import {motion} from 'framer-motion'
export const Results = ({prop})=>{
  const dispatch = useDispatch()
console.log(prop)

if(prop.array.length === 0 ){
    return <div className="vh-75"> Search your favorite hero</div>
} else if (prop.array.response === 'error') {
    return <div className="vh-75"> 
    <div className="w-100 mt-2 border border-danger"> <p className='mb-0 p-1 text-danger'>Error: Heroe not found</p> </div>
    </div>
} else{
        return  <div className="h-results">
            {
        prop.array.results.map((e) =>{

          return <motion.div transition={{duration:0.7}} initial={{x:'-100vw'}} animate={{x:0}} whileHover={{scale:1.3}} key={e.id} className="d-flex justify-content-center h-25">
              
          <div className=" w-75 border h-50  m-3 p-2 d-flex justify-content-around flex-row">
       <img className="imageHero" src={e.image.url} alt={e.name} ></img> 
          <h3 className="fs-5"> {e.name} </h3> 
        
     <Button className='rounded-circle' onClick={()=>dispatch(addHero(e))} ovariant="link" variant="outline-secondary">+</Button>    
         </div> </motion.div>  
   })} 
     
   
        </div>
}
}