import React, { useEffect } from 'react';
import Book from "./Book";
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../Redux/books/booksSlice';
import styles from './books.module.css';

const Books = ()=> {
  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.books.loading);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if(loading){
    return <div>Loading...</div>;
  }

  return (
  <div className={styles.books}>
      {Object.entries(books).map(([key, bookItems]) => bookItems.map((book) => (
        <Book
          key={key}
          id={key}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      )))}
  </div>);
}

export default Books;
