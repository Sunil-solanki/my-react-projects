import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const cartquantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const cartShowHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={cartShowHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartquantity}</span>
    </button>
  );
};

export default CartButton;
