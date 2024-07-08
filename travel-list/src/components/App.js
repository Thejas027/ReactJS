import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";


export default function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    // global function to add the new item to the list
    setItems((items) => [...items, item]);
  }

  function handelDeleteItems(id) {
    // global function, used to delete the added item
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // function, used to tick mark the list items
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // function used to clear the list item 
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onDeleteItems={handelDeleteItems}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

//
