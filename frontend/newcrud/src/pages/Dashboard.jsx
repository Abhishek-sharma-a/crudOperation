import React, { useEffect, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import "../pages/dashboard.css";
import { toast } from "react-toastify";
import axios from "axios";

const Dashboard = () => {
  const nav= useNavigate()
  const token = localStorage.getItem("token");
useEffect(()=>{
if (!token) {
  nav("/")
}
})
  const [data, setData] = useState([]);
  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  const deleteContact = (id) => {
    if (window.confirm("Are you sure that you want to delete that contact ?")) {
      axios.delete(`http://localhost:5000/api/remove/${id}`);
      toast.success("contact deleted succussfully");
      setTimeout(() => loadData(), 500);
    }
  };
  return (
    <div style={{ marginTop: "105px" }}>
      <div className="mx-auto px-5">
      
        <Link to="/addContact">
          <button className="btn btn-primary">Add Contact</button>
        </Link>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAling: "center" }}>No.</th>
            <th style={{ textAling: "center" }}>Name</th>
            <th style={{ textAling: "center" }}>Email</th>
            <th style={{ textAling: "center" }}>Contact</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn btn-info">Edit</button>
                  </Link>

                  <button
                    className="btn btn-danger"
                    onClick={() => deleteContact(item.id)}
                  >
                    Delete
                  </button>

                  <Link to={`/view/${item.id}`}>
                    <button className="btn btn-secondary">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
