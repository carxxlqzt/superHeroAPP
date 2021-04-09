import {Form, Button} from 'react-bootstrap';
import React from 'react';
import {isAuth} from "./context/isAuth"

import axios from 'axios';
import {useLocalStorageState} from "./hooks/useLocalStorage"
import {useHistory} from "react-router-dom"


export const Login =()=>{
const {setAuth} = React.useContext(isAuth)
const {auth} = React.useContext(isAuth)
    const [password,setPassword]= React.useState('')
const [token,setToken]=React.useState('')
const [users,setUsers]= useLocalStorageState("users",[])
 const [email,setEmail]= React.useState('')
 
    const history = useHistory();

const toMyTeam = ()=>{
   
    history.push("/myTeam")
  
}
   
   const handleUserChange = (e)=> {
    setEmail(e.target.value)
}


const handlePasswordChange = (e)=> {
 setPassword(e.target.value)
}
const isOk = (e) => {
    toMyTeam()
    console.log('is OKAYY')
}
const submitHandler = (e) => {
    e.preventDefault();
    const isAuthenticated = users.find((user)=>{
        return user.email === email && user.password=== password&& user.token ===token
    // if(user.token===token){
    //     history.push("/myTeam")
    

    });
    console.log('is',isAuthenticated)

    axios
        .post(`http://challenge-react.alkemy.org/?email=${email}&password=${password}`)
        .then(response => {
            
            setToken(response.data.token)    
    const iuser = {
        email,
        password,
        token
    };

    setUsers([ ...users,iuser])
        isOk()    
        })
        .catch(error => {
            console.log(error)
    
        })
}
console.log(token)
    return <div className="Login vw-100 vh-100 d-flex justify-content-center align-items-center">
    <div className="w-75 responsiveLogin border p-4 h-50">
        <h1>Login</h1>
    <Form onSubmit={submitHandler}>
  <Form.Group className="mb-3" controlId="formBasicEmail">

    <Form.Control type="email" placeholder="Email" name="email" onChange={handleUserChange}/>
    <Form.Text className="text-muted">
   
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" name="password"  onChange={handlePasswordChange} />
  </Form.Group>
 
  <Button  className="w-100" variant="primary" type="submit">
    SignIn
  </Button>
</Form>
</div>
    </div>
}
    