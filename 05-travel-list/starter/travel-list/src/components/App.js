import { useState } from 'react';
import Logo from '../components/Logo';
import Form from '../components/Form';
import PackingList from '../components/PackingList';
import Stats from '../components/Stats';

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    // then its time to use setItems to update our setItems array
    // this new items arry will be current items array plus the new item added to the end.

    // so the new state depends on the current state (items)
    // he re we'll need to place a callback function
    setItems((items) => [...items, item]);
    // to enable the form to update the state is to pass in this function handleAddItems
  }
  // we will pass in the id when we call this function
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
    //
    // item.id is different from the id
    // so whenever this item is true itll end up in the new array
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?'
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className='app'>
      <Logo />
      {/* convention name of prop=onAdditems handleAddItems-the function */}
      {/* ex: on add items call handleadditems */}
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        // must add items to the packing list
        // prop is 'item=' {items}-we pass the items array
        // next accept prop in the PackingList comp.
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
