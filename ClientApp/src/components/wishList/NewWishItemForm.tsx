import type { WishItemInput } from "src/behavior/wishItemDetails";
import type { ChangeEvent, FormEvent} from "react";
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

export default NewWishItemForm;