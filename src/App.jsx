
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleComplete } from './redux/todoSlice';

function App() {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  return (
    <div
  style={{
    height: '100vh',
    width: '100%',
    backgroundImage: 'url(https://cdn.wallpaperhub.app/cloudcache/c/3/b/e/9/e/c3be9e6e8950054edbfb0369725453fd55362150.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
  }}
  className="d-flex flex-column justify-content-center align-items-center"
>
  

      <h1 className='text-light'>Your To-Do List</h1>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo} className='ms-2 bg-primary text-light rounded shadow'>Add Todo</button>
      </div>
      <ul className='mt-5'>
        {todos.map((todo) => (
          <li className='me-2 mb-3 text-light fw-4 fs-5' key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => handleToggleComplete(todo.id)} className='ms-2 me-2 bg-success text-light rounded shadow'>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)} className='bg-danger text-light rounded shadow'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

