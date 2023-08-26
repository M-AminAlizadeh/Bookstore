import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { removeBook, fetchBooks } from "../Redux/books/booksSlice";
import ProgressBar from "./ProgressBar";
import styles from "./book.module.css";

const Book = ({ id , title , author , category}) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook({ itemId: id }));
    dispatch(fetchBooks());
  };

  return (
    <section className={styles.bookContainer}>
      
      <div>
        <div className={styles.bookInfo}>
          <p>{category}</p>
          <h3>{title}</h3>
          <h5>{author}</h5>
        </div>
        
        <div className={styles.btnsContainer}>
          <p>Comments</p>
          <p onClick={handleRemove}>
            Remove
            </p>
          <p>Edit</p>
        </div>
      </div>

      <div className={styles.progressContainer}>
        <ProgressBar/>
        <div className={styles.progressPercentage}>
          <p className={styles.value}>{Math.floor(Math.random() * 100)}%</p>
        <br/> completed </div>
      </div>

      <div className={styles.moreInfo}>
        <p className={styles.chapterLabel}>Current Chapter</p>
        <p className={styles.chapterValue}>Chapter {Math.floor(Math.random() * 20)}</p>
        <button className={styles.moreInfoBtn}>Update progress</button>
      </div>

    </section>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
