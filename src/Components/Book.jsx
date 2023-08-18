import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ name, author }) => {
  return (
    <section className="book">
      <h3>{name}</h3>
      <h5>{author}</h5>
      <button>Remove</button>
    </section>
  );
};

Book.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
