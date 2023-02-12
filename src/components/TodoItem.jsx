const TodoItem = ({ id, text, completed, toggleTodoCompleted, removeTodo }) => {
  return (
    <li>
      <input type="checkbox"
        checked={completed}
        onChange={() => toggleTodoCompleted(id)} />
      <span>{text}</span>
      <span className='delete' onClick={() => removeTodo(id)}>&times;</span>
    </li>
  )
}

export default TodoItem