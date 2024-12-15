import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

const AppEffects = () => {
  const BASEURL = "https://jsonplaceholder.typicode.com";
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<User[]>(`${BASEURL}/users1`)
      .then((res) => {
        console.log(res);
        setUsers(res.data);
        setError("");
      })
      .catch((err) => setError(err.message));

    return () => {};
  }, []);

  return (
    <div className="container bg-light">
      {error && <p className="text-danger">{error}</p>}
      <h3 className="display-3 text-center">UseEffects</h3>
      <ul className="list-group ">
        {users.map((user) => (
          <li className="list-group-item" key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppEffects;
