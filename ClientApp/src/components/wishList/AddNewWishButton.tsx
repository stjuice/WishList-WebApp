import { useHistory } from "react-router";

const AddNewWishButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/new-wish');
  };

  return (
    <div>
      <button onClick={handleClick}>Add New Wish</button>
    </div>
  );
}

export default AddNewWishButton;