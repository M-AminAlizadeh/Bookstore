import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../Redux/books/booksSlice';

const Form = ()=>{
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [addedBooks, setAddedBooks] = useState([]);
  const dispatch = useDispatch();

  const handleClickAddBtn = async(e) => {
    e.preventDefault();

    const newItem = {
    item_id: `item${Math.floor(Math.random() * 10000)}`,
    title,
    author,
    category: 'Fiction',
  };
    await dispatch(addBook(newItem));
    setAddedBooks([...addedBooks, newItem]);
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
      
      <button type="submit" onClick={handleClickAddBtn}>ADD BOOK</button>
    </form>
  );
}

export default Form;