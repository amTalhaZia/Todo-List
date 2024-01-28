import React from 'react';

const Todo = ({ store, deletFunc, editFunc }) => {
  return (
    <ul className='todo-list'>
      {store.map((todos) => (
        <li key={todos.id} className='todo-item'>
          <p>{todos.itemName}</p>
          <div className="button-container">
            <button className="edit-button" onClick={()=>{editFunc(todos.id)}} >Edit</button>
            <button className="delete-button" onClick={() => { deletFunc(todos.id) }}>Delete</button>
          </div>

        </li>
      ))}
    </ul>
  );
}

export default Todo;
