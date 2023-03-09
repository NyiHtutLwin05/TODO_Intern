import { useState } from 'react'

function App() {

const [todos, setTodos] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      title: e.target.title.value,
      
    };
    setTodos([...todos, newTodo]);
    e.target.title.value = '';
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (id, title) => {
    const EditTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title };
      }
      return todo;
    });
    setTodos(EditTodos);
  };
  return (
     <>
    
      <div className='todoInput'>
      <h1>What is your Plan for today?</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" id="title" name="title" className='inputBtn'/>
        <button type="submit" className='btn'>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title} </span>
            <button onClick={() => handleDeleteTodo(todo.id)} >Delete</button> 
            <button onClick={() => handleEditTodo(todo.id, prompt('Enter new title', todo.title))}>Edit</button>
          </li>
        ))}
      </ul>
    </div>

     </>
  )
}

export default App
