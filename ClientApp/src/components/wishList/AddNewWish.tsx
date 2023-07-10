import { useHistory } from "react-router";

const AddNewWish = () => {
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

export default AddNewWish;