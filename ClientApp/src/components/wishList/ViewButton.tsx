import { useDispatch } from "react-redux";
import { requestWishItemDetails } from "src/behavior/wishItemDetails";

const ViewButton = ({ itemId }: { itemId: string }) => {
  const dispatch = useDispatch();

  const handleRequestWishItem = () => {
    itemId && dispatch(requestWishItemDetails(itemId));
  };

  return (
    <div>
      <button type="button" onClick={handleRequestWishItem}>View</button>
    </div>
  );
};

export default ViewButton;