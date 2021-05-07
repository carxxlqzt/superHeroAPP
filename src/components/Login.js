import {Form, Button} from 'react-bootstrap';
import React from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom"


export const Login =()=>{

    const [password,setPassword]= React.useState('')
 const [email,setEmail]= React.useState('')
 const [error,setError] = React.useState('')
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
const submitHandler = async(e)=> {
    e.preventDefault();
    // const isAuthenticated = users.find((user)=>{
    //     return user.email === email && user.password=== password&& user.token ===token
    

    // });
    // console.log('is',isAuthenticated)
  
 await axios.post('http://challenge-react.alkemy.org',{email,password})
        .then(response => {

        isOk() 
   
     localStorage.setItem('token',JSON.stringify(response.data.token ))
        }
       
        )
    .catch(e => {
            console.log(e)
            setError('Invalid email or password. Please try again')
    
        })
}

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
 <p className="error">{error}</p>
  <Button  className="w-100" variant="primary" type="submit">
    SignIn
  </Button>
</Form>
</div>
    </div>
}
    