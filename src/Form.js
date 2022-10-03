import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Form2 = () => {
  const [user, setuser] = useState({});
  const [data, setData] = useState([]);
  localStorage.setItem('data', JSON.stringify(data))

  
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setuser( (prevState) => {
        return {
            ...prevState,
            [name]: value
        }
        
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
    setData((prevState)=>{
        return [
            ...prevState,
            user
        ]
    })

    localStorage.setItem('data', JSON.stringify(data) )

    

  }


  return (
    <div className="form-register">
      <Form className="form register" onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" name="email" onChange={handleChange} />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" placeholder="Password" name='password'onChange={handleChange} />
        </Form.Group>

        <Button id="button" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Form2;
