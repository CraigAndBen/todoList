export function TodoItem({ completed, id, title, toggleTodo, deleteTodo}) {
  return (
    <li className="mt-2" key={id}>
      <label htmlFor="" className="mx-3">
        <input
          type="checkbox"
          checked={completed}
          className="mx-2"
            onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        onClick={() => deleteTodo(id)}
        className="btn btn-sm btn-danger"
      >
        Delete
      </button>
    </li>
  );
}
