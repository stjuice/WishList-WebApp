import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestWishList } from '../../behavior/wishList/actions';


const WishListDetails = () => {
  const wishList = useSelector((state) => state.wishList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestWishList());
  }, []);


  return (
    <div>
      <h2>Wish List</h2>
      {(wishList && wishList.data) ? (
        wishList.loading ? (
          <p>Loading...</p>
        ) : wishList.error ? (
          <p>Error: {wishList.error}</p>
        ) : wishList.data.length > 0 ? (
          wishList.data.map((wishItem) => (
            <div key={wishItem.id}>
              <p>ID: {wishItem.id}</p>
              <p>Title: {wishItem.title}</p>
              <p>Price: {wishItem.priceInfo.price}</p>
              <p>Currency ID: {wishItem.priceInfo.currencyId}</p>
              <p>Link: {wishItem.link}</p>
              <p>Additional Info: {wishItem.additionalInfo}</p>
            </div>
          ))
        ) : (
          <p>No wishes found</p>
        )
      ) : 'No wishes'}
    </div>
  );
};

export default WishListDetails;