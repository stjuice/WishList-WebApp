import React from 'react';
import { useSelector } from 'react-redux';

const WishItemDetails = () => {
  const itemDetails = useSelector((state) => state.wishItemDetails);

  return (
    <div>
      <h2>Wish Item</h2>
      {(itemDetails && itemDetails.data) ? (
        itemDetails.loading ? (
          <p>Loading...</p>
        ) : itemDetails.error ? (
          <p>Error: {itemDetails.error}</p>
        ) : itemDetails.data ? (
          <div>
            <p>ID: {itemDetails.data.id}</p>
            <p>Title: {itemDetails.data.title}</p>
            <p>Price: {itemDetails.data.priceInfo.price}</p>
            <p>Currency ID: {itemDetails.data.priceInfo.currencyId}</p>
            <p>Link: {itemDetails.data.link}</p>
            <p>Additional Info: {itemDetails.data.additionalInfo}</p>
          </div>
        ) : (
          <p>No items found</p>
        )
      ) : 'no items for not'}
    </div>
  );
};

export default WishItemDetails;