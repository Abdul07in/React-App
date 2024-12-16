import React, { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

const AppEffects = () => {
  const BASEURL = "https://jsonplaceholder.typicode.com";
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    axios
      .get<User[]>(`${BASEURL}/users`, { signal: controller.signal })
      .then((res) => {
        setUsers(res.data);
        // console.log(res);
        setError("");
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => {
      controller.abort();
    };
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    axios.delete(`${BASEURL}/users/${user.id}`).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Majeed Kanoor" };
    setUsers([...users, newUser]);
    axios
      .post(`${BASEURL}/users`, newUser)
      .then(({ data: savedUser }) => {
        setUsers([...users, savedUser]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + " 😀 !" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    axios.patch(`${BASEURL}/users/${user.id}`, updateUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <div className="container">
      {error && <p className="text-danger">{error}</p>}
      <h3 className="display-3 text-center">UseEffects</h3>
      <button className="btn btn-sm btn-primary mb-2" onClick={addUser}>
        Add
      </button>
      <ul className="list-group ">
        {isLoading && <div className="spinner-border text-center"></div>}
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}

            <div>
              <button
                className="btn btn-sm btn-secondary mx-2"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppEffects;
