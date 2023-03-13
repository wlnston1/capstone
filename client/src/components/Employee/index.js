import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Employee({ user }) {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:8888/api/contact");
    setUser(response.data);
    console.log(response.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8888/api/contact/${id}`);
    getUsers();
  };

  return (
    <div>
      <div className="employee">
        <div className="">
          {users.map((user) => {
            return (
              <div id={user.id} className="employee-inner row my-2">
                <div
                  className="col col-4"
                  style={{
                    paddingRight: "80px",
                  }}
                >
                  <h4>{user.userName}</h4>
                </div>

                <div className="col col-3">
                  <p>{user.email}</p>
                </div>
             
                <div className="employee-bt col col-5 .text-right">
                  <button
                    className="btn btn-danger mx-4 my-2"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                  <Link to={`/api/contact/edit/${user._id}`}>
                    <button className="btn btn-secondary mx-4 my-2">
                      Edit
                    </button>
                  </Link>
                  <Link to={`/api/contact/${user._id}`}>
                    <button className="btn btn-info mx-4 my-2">select</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <hr></hr>
      </div>
    </div>
  );
}

export default Employee;
