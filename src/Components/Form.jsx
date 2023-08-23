import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../Redux/books/booksSlice';

const Form = ()=>{
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleClickAddBtn = (e) => {
    e.preventDefault();
    dispatch(add({ title, author }));
    // reset form
    setTitle('');
    setAuthor('');
  };

  return (
    <form>
      <header>ADD NEW BOOK</header>
      <input type="text" 
          placeholder="Book title" 
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }} 
          />
      <input type="text" placeholder="Book author" value={author}
          onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit" onClick={(e) => handleClickAddBtn(e)}>ADD BOOK</button>
    </form>
  );
}

export default Form;