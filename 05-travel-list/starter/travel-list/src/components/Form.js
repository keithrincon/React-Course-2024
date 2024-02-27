// passed in the prop name, then call the function of this prop

import { useState } from 'react';
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  // will recieve an new item object which will the n add to the items array

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    // if no description den return immideatly
    const newItem = { description, quantity, packed: false, id: Date.now() };

    // lets call the function inside the handleSubmit event
    // with the new item we just create
    onAddItems(newItem);

    setDescription('');
    setQuantity(1);
  }

  // by default they should not be packed

  return (
    <form className='add-form' onSubmit={handleSubmit}>
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
        type='text'
        placeholder='Item...'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
