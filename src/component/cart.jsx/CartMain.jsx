import "./Cart.css";
import { CiStar } from "react-icons/ci";

function Cart({ name, price, compareAt, image }) {
  return (
    <div className="CartMain">
      <div className="CartMain__media">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="CartMain__body">
        <h3>{name}</h3>
        <p className="CartMain__stars" aria-hidden>
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </p>
        <div className="Restes">
          {compareAt ? <p className="Rs">{compareAt}</p> : null}
          <p className="priceCurrent">{price}</p>
        </div>
        <div className="Addtocart">
          <button type="button">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
