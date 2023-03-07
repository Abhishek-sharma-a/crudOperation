import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./addEdit.css";
import axios from "axios";
import { toast } from "react-toastify";
const initial={
  email: "",
  password: "",
}

const Home = () => {

  const [stat, setStat] = useState(initial);
  const {email,password } = stat;
  const navegate = useNavigate();
  const { id } = useParams();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStat({ ...stat, [name]: value });
    console.log(stat);
  };
  const token = localStorage.getItem("token");
  const handleSubmit = async(e) => {
    e.preventDefault()
    const response = await axios.post("http://localhost:5000/login", {
      email,
      password,
    });
    const {token}=response.data
    localStorage.setItem("token",token);
    // console.log(response.data);
    navegate("/dashboard")
  }
  useEffect(() => {
    if (token) {
        navegate("/dashboard")
    }
}, [handleSubmit])
  return (
<>
<div className="container">
<Form className='col-md-4 mx-auto my-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email " name='email' id='email' value={email || ""} onChange={handleInputChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' id='password' value={password || ""} onChange={handleInputChange}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
       Log in
      </Button>
    </Form>
</div>
</>
  )
}

export default Home