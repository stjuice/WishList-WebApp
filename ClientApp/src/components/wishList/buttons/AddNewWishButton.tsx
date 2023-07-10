import styles from './WishButton.module.scss';
import { useHistory } from "react-router";

const AddNewWishButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/new-wish');
  };

  return (
    <div className={styles.addNewWishButton}>
      <button onClick={handleClick} className={styles.lightButton}>Add New Wish</button>
    </div>
  );
}

export default AddNewWishButton;