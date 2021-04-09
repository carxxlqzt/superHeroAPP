import React from "react";
import {Form,FormControl, Button} from 'react-bootstrap';
import {Results} from './Results.js'

import {searchHero} from "./api/getApiBySearch"
export const SearchHeroes = () =>{
    const [search,setSearch] = React.useState('');
    const [info, setHeroes] = React.useState([])
 
    const onChange =(e) => {
        setSearch(e.target.value)
    };
    
    const onClick = async (e) => {
      try{
        const data = await searchHero(search)
        setHeroes(data)
       }catch (e){
        console.log(e)
       }
    }
    console.log(info)

return <div >
      <Form inline >
      <FormControl onChange={onChange} type="text" placeholder="Search" className="mr-sm-2" />
      <Button onClick={onClick} variant="dark"> Search</Button>
    </Form>
   <Results prop={info} />
</div>


}