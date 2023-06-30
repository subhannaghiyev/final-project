import "./index.scss";
import { AiFillStar } from "react-icons/ai";
import { FaCcAmazonPay } from "react-icons/fa";
import { removeFromFav } from "../../../redux/slice/FavSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { Button } from "antd";
const Wishlist = () => {
  const data = useSelector((state) => state.addToFav.value);
  const dispatch = useDispatch();
  let totalPrice = 0;
  data.forEach((d) => {
    totalPrice += d.price;
  });
  return (
    <>
      <div>
        <div className="sect-offers-column">
          {data &&
            data.map((d) => (
              <div className="sect-offers" key={d.id}>
                <div className="images-offers">
                  <img className="img" src={d.img} alt="" />
                </div>
                <div className="offers-column">
                  <p className="dollar">From ${d.price}</p>
                  <p className="country">{d.country}</p>
                  <p className="count">{d.info}</p>
                  <div className="stars">
                    <AiFillStar className="icon-star" />
                    <AiFillStar className="icon-star" />
                    <AiFillStar className="icon-star" />
                    <AiFillStar className="icon-star" />
                    <AiFillStar className="icon-star" />
                  </div>
                  <p className="offers-text">{d.description}</p>
                  <button onClick={()=>{
                                dispatch(removeFromFav(d.id))
                            }} className="btn-offers-wishlist">
                  <FaTrashAlt className="fa-icons"/>
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className="total-price">
            <h2 className="total">Total Price : {totalPrice}</h2>
            <Button type="primary" className="payment">Payment  <FaCcAmazonPay className="payment-icon"/></Button>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
