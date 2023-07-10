import styles from './WishItem.module.scss'
import type { WishItemInput } from "src/behavior/wishItemDetails";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewWishItem } from "src/behavior/wishItemDetails";

const NewWishItemForm = () => {
  const [formData, setFormData] = useState<WishItemInput>({
    title: '',
    priceInfo: { price: 0, currencyId: '' },
    link: '',
    additionalInfo: '',
  });
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(addNewWishItem(formData));
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

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.newWishForm}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className={`${styles.priceInfo}`}>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name='price'
            value={formData.priceInfo.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="currencyId">Currency ID:</label>
          <select name="currencyId">
            <option value="USD">USD</option>
            <option value="UAH">UAH</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="link">Link:</label>
        <input
          type="text"
          name='link'
          value={formData.link}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="additionalInfo">Additional Info:</label>
        <textarea
          name='additionalInfo'
          value={formData.additionalInfo}
          onChange={handleTextAreaChange}
        >
        </textarea>
      </div>
      <div className={styles.submitButton}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default NewWishItemForm;