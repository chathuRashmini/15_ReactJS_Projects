import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({ items, removeItem, editItem }) => {
  return(
    <div className='grocery-list'>
      { items.map((item) => {
        const { id, title } = item;

        return (
          <article className='grocery-item' id={id}>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button type='button' className='edit-btn'>
                <FaEdit 
                  onClick={() => editItem(id)}
                />
              </button>
              <button type='button' className='delete-btn'>
                <FaTrash onClick={() => removeItem(id)} />
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List
