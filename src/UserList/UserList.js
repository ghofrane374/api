import React, { useEffect, useState } from "react";
import "./UserList.css";
import Axios from "axios";

export default function UserList() {
  const [name, setName] = useState("");
  const [username, setuserName] = useState("");

  const [phone, setPhone] = useState("");
  const [users, setusers] = useState([]);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        setusers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const envoyer = (event) => {
    event.preventDefault();
    Axios.post("https://jsonplaceholder.typicode.com/users", {
      nom: name,
      username: username,
      phone: phone,
    })
      .then((reponse) => {
        console.log(reponse);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <div className="addUser">
        <form>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Enter name"
              onChange={(element) => {
                setName(element.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(element) => {
                setuserName(element.target.value);
              }}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="phone">phone</label>
            <input
              type="number"
              className="form-control"
              id="phone"
              placeholder="phone"
              onChange={(element) => {
                setPhone(element.target.value);
              }}
            />
          </div>
          <button onClick={envoyer} type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="listUser">
        {users.length > 0
          ? users.map((elt, ind) => (
              <p key={ind}>
                {elt.nom} {elt.username} {elt.phone}
              </p>
            ))
          : null}
      </div>
    </div>
  );
}
