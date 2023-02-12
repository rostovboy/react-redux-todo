const InputField = ({ text, handleInput, handleSubmit }) => {
  return (
    <label>
      <input value={text} onChange={(e) => handleInput(e.target.value)} />
      <button onClick={handleSubmit}>Add ToDo</button>
    </label>
  )
}

export default InputField