import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, requestBookDetails } from '../../behavior/book/actions';
import { BookInput } from '../../behavior/book/types';


const BookDetails = () => {
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestBookDetails('1'));
  }, []);

  const handleAddBook = () => {
    const newBook: BookInput = {
      title: 'New Book Title',
      authorId: 'Author ID',
    };

    dispatch(addBook(newBook));
  };

  return (
    <div>
      <h2>Book Details</h2>
      {(book && book.data) ? (
        book.loading ? (
          <p>Loading...</p>
        ) : book.error ? (
          <p>Error: {book.error}</p>
        ) : book.data ? (
          <div>
            <p>Title: {book.data.title}</p>
            <p>Author ID: {book.data.authorId}</p>
          </div>
        ) : (
          <p>No books found</p>
        )
      ) : 'no books'}
      <div>
        <button type="button" onClick={handleAddBook}>Add New Book</button>
      </div>
    </div>
  );
};

export default BookDetails;