import { FaEdit, FaTrash } from 'react-icons/fa'
import { useContext } from 'react';
import {TodoContext} from './Context';

const ListItems = () => {
  const { items, handleEdit, handleDelete} = useContext(TodoContext)
  return (
    <article>
      {items.length !== 0 ?
        <ul>
          {items.map((item) => {
            const { id, rating, task } = item;
            return (
              <li key={id}>
                <span className='rating'>{rating}</span>
                <p>{task}</p>
                <div className="icons">
                  <button onClick={() => handleEdit(id)}><FaEdit color='green' /></button>
                  <button onClick={() => handleDelete(id)}><FaTrash color='red' /></button>
                </div>
              </li>
            );
          })}
        </ul> : <h2>No feedback yet</h2>}
    </article>
  );
};

export default ListItems;
