import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { remove } from "../Redux/books/booksSlice";

const Book = ({ id , title , author , category}) => {
  const dispatch = useDispatch();

  return (
    <section className="book">
      <h3>{title}</h3>
      <h5>{author}</h5>
      <p>{category}</p>
      <button type='submit' onClick={() => {
          dispatch(remove({ id }));
        }}>
        Remove
        </button>
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
