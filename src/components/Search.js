import React from "react";
import {Form,FormControl, Button} from 'react-bootstrap';
import {Results} from './Results.js'
import {getApiAction} from '../redux/ducks'
import {useDispatch,useSelector} from 'react-redux'
import {motion} from 'framer-motion'

export const SearchHeroes = () =>{
    const [search,setSearch] = React.useState('');
  const dispatch = useDispatch()
  const heroes = useSelector(store=>store.superheroes)
  console.log(heroes.moreSixMembers)
  
    const onChange =(e) => {
        setSearch(e.target.value)
    };
    
return <div >
      <Form inline >
      <FormControl  onKeyPress={event => {
                if (event.key === 'Enter') {
                  event.preventDefault()
                  dispatch(getApiAction(search))
                }
              }} onChange={onChange} type="text" placeholder="Search" className="mr-sm-2" />
      <Button onClick={()=> dispatch(getApiAction(search))} variant="dark"> Search</Button>
    </Form>
      {heroes.moreSixMembers===true?  <motion.div initial={{y:-200,opacity:0}} transition={{duration:1}} animate={{opacity:1, y:0, type:'spring'} } > Ups! your team can only have 6 members</motion.div> : <div></div>}
   <Results prop={heroes} />
 
  
</div>


}