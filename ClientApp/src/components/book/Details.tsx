import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { queryBookRequest } from '../../behavior/book/actions';


const BookDetails = () => {
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(queryBookRequest('1'));
  }, []);
  console.log('book', book);

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
    </div>
  );
};

export default BookDetails;