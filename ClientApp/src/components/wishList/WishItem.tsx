import styles from './WishItem.module.scss';
import ViewButton from "./ViewButton";

type Props = {
  id: string;
  title: string;
  priceInfo: {
    price: number;
    currencyId: string;
  };
  link: string;
}

const WishItem = ({
  id,
  title,
  priceInfo,
  link,
}: Props) => {

  return (
    <div className={styles.wishItem}>
      <div>Title: {title}</div>
      <div>Price: {priceInfo.price}</div>
      <div>Currency ID: {priceInfo.currencyId}</div>
      <div>Link: {link}</div>
      <ViewButton itemId={id} />
    </div>
  )
}

export default WishItem;