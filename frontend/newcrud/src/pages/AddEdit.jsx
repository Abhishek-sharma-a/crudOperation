import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./addEdit.css";
import axios from "axios";
import { toast } from "react-toastify";
const initialState = {
  name: "",
  email: "",
  contact: "",
  password:"",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const { name, email, contact,password } = state;
  const navegate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get/${id}`)
      .then((res) => setState({ ...res.data[0] }));
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact || !password) {
      toast.error("provide all value");
    } else {
      if (!id) {
        axios
          .post("http://localhost:5000/api/post", {
            name,
            email,
            contact,
            password,
          })
          .then(() => {
            
            setState({ name: "", email: "", contact: "" ,password:"" });

          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Contact added successfully");
        setTimeout(() => navegate("/dashboard"), 1000);
      } else {
        axios
          .put(`http://localhost:5000/api/update/${id}`, {
            name,
            email,
            contact,
            password,
          })
          .then(() => {
            setState({ name: "", email: "", contact: "" ,password:"" });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Contact updated successfully");
        setTimeout(() => navegate("/dashboard"), 1000);
      }
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="yourname..."
          value={name || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email..."
          value={email || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          id="contact"
          name="contact"
          placeholder="contact..."
          value={contact || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="password..."
          value={password || ""}
          onChange={handleInputChange}
        />
        <input type="submit" value={id ? "update" : "Save"} />
        <br />
        <br />
        
        <Link to="/dashboard">
          <input type="button" value="Go back" />
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;
