import { useState } from "react"
export default function newTodoForm({onSubmit}) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="row w-50 text-center m-3">
        <div className="row">
          <label>New Item</label>
        </div>
        <div className="row">
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
          />
        </div>
        <div className="row mt-1">
          <button className="btn btn-primary">Add</button>
        </div>
      </div>
    </form>
  );
}
