import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list) {
    return JSON.parse(localStorage.getItem('list'))
  }
  else {
    return []
  }
}

function App() {

  const [name, setname] = useState('');
  const [list, setlist] = useState([]);
  const [isEditing, setisEditing] = useState(false);
  const [editID, seteditID] = useState(null);
  const [alert, setalert] = useState({
    show: false,
    msg: '',
    type: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name) {
      showAlert(true, 'danger', 'Please enter a value');
    }
    else if (name && isEditing) {
      setlist(list.map((item) => {
        if(item.id === editID) {
          return {...item, title: name}
        }
        return item
      }))
      setname('');
      seteditID(null);
      setisEditing(false);
      showAlert(true, 'success', 'Value changed')
    }
    else {
      showAlert(true, 'success', 'Item addded to the list')
      const newItem = { 
        id: new Date().getTime().toString(),
        title: name
      }
      setlist([ ...list, newItem ]);
      setname('');
    }
  }

  const showAlert = (show=false, type='', msg='') => {
    setalert({ show, type, msg })
  }

  const clearList = () => {
    showAlert(true, 'danger', 'Empty List');
    setlist([]);
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'Item Removed');
    setlist(list.filter((item) => item.id !== id));
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setisEditing(true);
    seteditID(id);
    setname(specificItem.title);
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        { alert.show && 
          <Alert 
            {...alert}
            removeAlert = {showAlert}
            list={list}
          /> 
        }

        <h3>Grocery Bud</h3>

        <div className='form-control'>
          <input 
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            onChange={(e) => setname(e.target.value)}
            value={name}
          />

          <button type='submit' className='submit-btn'>
            { isEditing ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>

      { list.length > 0 && (
        <div className='grocery-container'>
          <List 
            items={list} 
            removeItem={removeItem}
            editItem={editItem}
          />
          <button className='clear-btn' onClick={clearList}>Clear items</button>
        </div>
      )}
    </section>
  )
}

export default App
