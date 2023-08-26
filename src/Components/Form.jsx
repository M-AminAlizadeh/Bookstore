import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../Redux/books/booksSlice';
import Error from './Error';
import styles from './form.module.css';

const Form = ()=>{
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [addedBooks, setAddedBooks] = useState([]);
  const [error,setError] = useState(false);
  const dispatch = useDispatch();

  const handleClickAddBtn = async(e) => {
    e.preventDefault();

    if(title && author){
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
      setError(false);
    }else{
      // error
      setError(true);
    }
  };

  return (
    <>
      <form className={styles.formContainer}>
        <header className={styles.header}>ADD NEW BOOK</header>
        <input type="text" 
            placeholder="Book title" 
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }} 
            className={`${styles.input} ${styles.inputBookTitle}`}
            />

        <input type="text" placeholder="Book author" value={author}
            onChange={(e) => setAuthor(e.target.value)} className={`${styles.input} ${styles.inputBookAuthor}`} required/>

        <select className={styles.input}>
          <option> Category </option>
        </select>

        <button type="submit" onClick={handleClickAddBtn} className={styles.addBookBtn}>ADD BOOK</button>
      </form>
      { error ? <Error/> : false} 
    </>
  );
}

export default Form;