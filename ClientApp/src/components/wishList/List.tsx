import style from './WishItem.module.scss'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestWishList } from 'src/behavior/wishList/actions';
import WishItem from './WishItem';
import AddNewWish from './buttons/AddNewWishButton';

const WishList = () => {
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
        ) : wishList.data.length > 0 ?
          <div className={style.gridContainer}>{(
            wishList.data.map((wishItem) => (
              <WishItem
                id={wishItem.id}
                title={wishItem.title}
                priceInfo={wishItem.priceInfo}
                link={wishItem.link}
                key={wishItem.id}
              />
            ))
          )}</div> : (
            <p>No wishes found</p>
          )
      ) : 'No wishes'}
      <div>
        <AddNewWish />
      </div>
    </div>
  );
};

export default WishList;
