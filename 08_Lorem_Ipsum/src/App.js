import React, { useState } from 'react';
import data from './data';

function App() {

  const [count, setcount] = useState(0);
  const [text, settext] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if(count <= 0) {
      amount = 1;
    }
    if(count > 8) {
      amount = 8;
    }
    settext(data.slice(0, amount));
  }

  return (
    <section className='section-center'>
      <h3>Tired of Boring Lorem Ipsum</h3>
      <form className='lorem-forum' onSubmit={handleSubmit}>
        <label htmlFor='amount'>
          paragraphs:
        </label>

        <input 
          type='number' 
          name='amount' 
          id='amount' 
          value={count} 
          onChange={(e) => setcount(e.target.value)}
        />

        <button type='submit' className='btn'>Generate</button>
        
        <article className='lorem-text'>
          { text.map((item, index) => {
            return <p key={index}>{item}</p>
          })}
        </article>
      </form>
    </section>
  )
}

export default App;
