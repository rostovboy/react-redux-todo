import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        }
      ])
      setText('');
    }
    console.log(todos)
  }

  const toggleTodoCompleted = (todoId) => {
    setTodos(
      todos.map(
        todo => {
          if (todo.id !== todoId) return todo;
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
      )
    )
  }

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTodo} />

      <TodoList todos={todos}
        toggleTodoCompleted={toggleTodoCompleted}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
