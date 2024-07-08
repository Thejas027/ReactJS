import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSubmit(e) {
    // function that executes when the new item to be added to the list
    e.preventDefault(); // avoids the loading of the page

    const newItem = { description, quantity, packed: false, id: Date.now() }; // to add any new item to the list using input bar

    onAddItems(newItem); // rendering the added new item from input and displaying it on the list item
    // reset the input bar and the quantity list to default
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}
