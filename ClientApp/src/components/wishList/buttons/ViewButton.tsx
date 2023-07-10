import styles from './WishButton.module.scss';
import { useDispatch } from "react-redux";
import { requestWishItemDetails } from "src/behavior/wishItemDetails";

const ViewButton = ({ itemId }: { itemId: string }) => {
  const dispatch = useDispatch();

  const handleRequestWishItem = () => {
    itemId && dispatch(requestWishItemDetails(itemId));
  };

  return (
    <div className={styles.viewButton}>
      <button type="button" onClick={handleRequestWishItem} className={styles.contrastButton}>View</button>
    </div>
  );
};

export default ViewButton;