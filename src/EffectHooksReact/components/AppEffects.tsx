import userService, { User } from "../services/user-service";
import useUsers from "../hooks/userUsers";

const AppEffects = () => {
  const { users, error, isLoading, setUsers, setError } = useUsers();

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Majeed Kanoor" };
    setUsers([...users, newUser]);
    userService
      .create(newUser)
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
    userService.update(updatedUser).catch((err) => {
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
