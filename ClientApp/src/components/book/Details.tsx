import React, { useEffect } from 'react';
import { useSelector, useDispatch, DefaultRootState } from 'react-redux';
import { queryBookRequest } from '../../behavior/book/actions';


const BookDetails = () => {
  const book = useSelector((state) => state.book); // Access the book data from the Redux store
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the action to query the book
    console.log('useEffect');
    
    dispatch(queryBookRequest('1'));
  }, []);
  console.log('book', book);

  return (
    <div>
      <h2>Book Details</h2>
      {(book && book.data) ? (
        <div>
          <p>Title: {book.data.title}</p>
          <p>Author ID: {book.data.authorId}</p>
        </div>
      ) : 'no books'}
    </div>
  );
};

export default BookDetails;