import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestWishList } from 'src/behavior/wishList/actions';
import ViewButton from './ViewButton';
import { addNewWishItem } from 'src/behavior/wishItemDetails/actions';
import { WishItemInput } from 'src/behavior/wishItemDetails/types';

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
        ) : wishList.data.length > 0 ? (
          wishList.data.map((wishItem) => (
            <div key={wishItem.id}>
              <p>ID: {wishItem.id}</p>
              <p>Title: {wishItem.title}</p>
              <p>Price: {wishItem.priceInfo.price}</p>
              <p>Currency ID: {wishItem.priceInfo.currencyId}</p>
              <p>Link: {wishItem.link}</p>
              <ViewButton itemId={wishItem.id} />
            </div>
          ))
        ) : (
          <p>No wishes found</p>
        )
      ) : 'No wishes'}
      <div>
        <MyForm />
      </div>
    </div>
  );
};

export default WishList;

const MyForm = () => {
  const [formData, setFormData] = useState<WishItemInput>({
    title: '',
    priceInfo: { price: 0, currencyId: '' },
    link: '',
    additionalInfo: '',
  });
  const dispatch = useDispatch();

  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // Handle form submission here
  //   console.log(event);
  // };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Dispatch the action with the form data
    dispatch(addNewWishItem(formData));
    // Reset the form data
    setFormData({
      title: '',
      priceInfo: { price: 0, currencyId: '' },
      link: '',
      additionalInfo: '',
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevData) => {
      if (name === 'price') {
        return {
          ...prevData,
          priceInfo: {
            ...prevData.priceInfo,
            price: parseFloat(value),
          },
        };
      }

      if (name === 'currencyId') {
        return {
          ...prevData,
          priceInfo: {
            ...prevData.priceInfo,
            currencyId: value,
          },
        };
      }

      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name='price'
          value={formData.priceInfo.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Currency ID:</label>
        <input
          type="text"
          name='currencyId'
          value={formData.priceInfo.currencyId}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Link:</label>
        <input
          type="text"
          name='link'
          value={formData.link}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Additional Info:</label>
        <textarea
          name='additionalInfo'
          value={formData.additionalInfo}
          onChange={handleTextAreaChange}
        >
        </textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
