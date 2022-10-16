import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const About = () => {
  const [users, setUsers] = useState([]);
  const [input, setInout] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [editTodo, setEditTodo] = useState(0);

  const changeHandler = (e) => {
    setInout(e.target.value);
  };

  const addHandler = (e) => {
    e.preventDefault();

    if (editTodo) {
      const edit = users.find((i) => i.id === editTodo);
      const updatedTodos = users.map((t) =>
        t.id === edit.id
          ? (t = { id: t.id, name: input })
          : { id: t.id, name: t.name }
      );
      setUsers(updatedTodos);
      setEditTodo(0);
      setInout("");
      return;
    }
    if (input !== "") {
      setUsers([...users, { id: uuidv4(), name: input }]);
      setInout("");
    }
  };

  const deleteHandler = (value) => {
    let result = users.filter((item) => item !== value);
    setUsers(result);
  };

  const editHadler = (id) => {
    const editTodo = users.find((i) => i.id === id);
    setInout(editTodo.name);
    setEditTodo(id);
    setIsUpdate(true);
  };

  return (
    <div>
      <form onSubmit={addHandler}>
        <input
          type="text"
          placeholder="Enter the todo..."
          value={input}
          onChange={changeHandler}
        />
        <button type="submit">{isUpdate ? "Update" : "Add"}</button>
      </form>
      {users.map((user, idx) => {
        return (
          <div key={idx} className="todo-item">
            <h3 key={idx}>{user.name}</h3>
            <div>
              <button
                onClick={() => deleteHandler(user)}
                className="delete-btn"
              >
                Delete
              </button>
              <button onClick={() => editHadler(user.id)} className="edit-btn">
                Edit
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default About;
