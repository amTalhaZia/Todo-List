import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './TodoList/Todo';

const App = () => {
  const [text, setText] = useState('')
  const [store, setStore] = useState([])
  const [items, setitems] = useState('')
  const [toggled, setToggled] = useState(false)

  const addHandler = (e) => {
    if (toggled) {
      const update = store.map((item) => {
        if (item.id === items) {
          return { ...item, itemName: text };
        }
        return item;
      });
      setStore(update);
      setText([]);
      setToggled(false);
    } else {
      e.preventDefault();
      const obj = { id: uuidv4(), itemName: text };
      setStore((prev) => [...prev, obj]);
      setText('');
    }
  };


  const deletFunc = (id) => {
    const filtering = store.filter((todo) => (
      todo.id !== id
    ))
    setStore(filtering)
  }

  const editFunc = (id) => {
    const finding = store.find((find) => (
      find.id === id
    ))
    setText(finding.itemName)
    setitems(id)
    setToggled(true)
  }

  const clearAll = () => {
    setStore([])
  }

  return (
    <div>
      <div className='wrapper'>
        <div className="outer">
          <input type="text" placeholder="Enter text" className="placeholder" value={text} onChange={(e) => { setText(e.target.value) }} />
          <button onClick={addHandler} className="add-button" >{toggled ? 'Update' : 'Add'}</button>
          <button  className='deletall-button' onClick={clearAll} >Delete All</button>
        </div>
      </div>
      <div>
        <Todo store={store} deletFunc={deletFunc} editFunc={editFunc} />
      </div>
    </div>
  );
}

export default App;
