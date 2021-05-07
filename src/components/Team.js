import React from 'react'
import HeroIcon from '../img/hero-icon.png'
import {motion} from 'framer-motion'

import '../index.css';
import {Container,Row,Col,Button,Modal} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {deleteHero} from '../redux/ducks'

 export const Team = () => {
  const team = useSelector(store=>store.superheroes.myTeam)
 const dispatch = useDispatch()
  console.log(team)
  const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

const powerstats = (power) =>{
    let aux= 0
    let aux2=0
  team.forEach(element => {
      if (element.powerstats.intelligence==='null') {
     
        aux2=0   
      } else {
          aux2+=parseInt(element.powerstats[power]) 
      }
      aux+=aux2
  });
  return aux
}

console.log(powerstats('intelligence'))
const avgHeightWeight = (prop)=>{
let avg = 0
let adder = 0
team.forEach((e)=>{
  adder+=parseInt(e.appearance[prop][1])
})
avg = adder/team.length;
return avg



}
     
if( team.length=== 0 ){
    return <div>
       <motion.img  initial={{y:-200, opacity:0}} animate={{y:-250,opacity:1}} transition={{delay:0.5,duration:0.9, yoyo:Infinity}} className='heroIcon' src={HeroIcon}></motion.img>
    </div>
} else{
   return <Container>
  <Row>
    <Col xs={6}>
     
    <div className="card bg-lightblue text-dark p-2">
      <Row>
        <Col  sm={6}> <p> intelligence : {powerstats('intelligence')} </p>
        <p> strength : {powerstats('strength')} </p>
        <p> speed : {powerstats('speed')} </p>
        <p> durability : {powerstats('durability')} </p>
        <p> power : {powerstats('power')} </p>
        <p> combat : {powerstats('combat')} </p>
</Col>
<Col className='d-none d-sm-inline' sm={6}><i className="fas fa-bolt power"></i></Col></Row>
    </div>
    
    <div className="card mt-2">
      <Row className='p-2'>
        <Col>   <p> Average Height: {avgHeightWeight('height')}</p>
      <p> Average Weight: {avgHeightWeight('weight')} </p></Col>

      <Col className='d-none d-sm-inline'><i className="icon-height  fas fa-sort-numeric-up-alt"></i></Col>
 </Row>
    </div>
    </Col>
    <Col xs={6}>
           <div>
       {team.map((heroe) => {
 return <div key={heroe.id} className=" w-100 border h-50  mb-2 p-2 d-flex justify-content-around flex-row">
   <img className="imageHero"  onClick={handleShow} src={heroe.image.url} alt={heroe.name} ></img> 
      <h3  onClick={handleShow} className="fs-5"> {heroe.name} </h3>
       <Button className='bg-danger delete d-flex justify-content-center m-0'onClick={()=>dispatch(deleteHero(heroe))}  > <p>X</p></Button>  
          <Modal show={show} onHide={handleClose}>
        
          <Modal.Body>
            
          
             <div className="card" >
             <img src={heroe.image.url} className="card-img-top" alt="..."></img>
             <div className="card-body">
               <h5 className="card-title"> {heroe.name} </h5>
               <p className="card-text">Full Name : {heroe.biography['full-name']} </p>
                <p className="card-text">
                Height: {heroe.appearance.height[1]} </p>
                <p className="card-text">
                Weight: {heroe.appearance.weight[1]} </p>
                <p className="card-text">
                Eye Color: {heroe.appearance['eye-color']} </p>
                <p className="card-text">
                Hair Color: {heroe.appearance['hair-color']} </p>
                <p className="card-text">
                Work Base: {heroe.work.base} </p>

             </div>
             </div>
          
          </Modal.Body>
         
        </Modal>
        </div>
          
    
    
  
       
  
       })}
   </div>
    </Col>
  </Row>

  
</Container>


}

  
     
       
  

    
 }


