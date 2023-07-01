// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addToCart,
//   clearCart,
//   decreaseCart,
//   getTotals,
//   removeFromCart,
// } from "../../../redux/slice/cartSlice";
// import "./style.scss";
// import { Link } from "react-router-dom";
// import PayButton from "./PayButton/index";
// import { decrement, increment, removeValue } from "../../../redux/slice/countSlice";
// // import useToken from "../../../Hooks/useToken";
// // import PayButton from "./PayButton";
// const Cart = () => {
//   const cart = useSelector((state) => state.cart);
//   const users = useSelector((state) => state.users);
// //   const [token] = useToken();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(getTotals());
//   }, [cart, dispatch]);

//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//     // dispatch(increment())
//   };
//   const handleDecreaseCart = (product) => {
//     dispatch(decreaseCart(product));
//     // dispatch(decrement())
//   };
//   const handleRemoveFromCart = (product) => {
//     dispatch(removeFromCart(product));
//   };
//   const handleClearCart = () => {
//     dispatch(clearCart());
//     // dispatch(removeValue())
//   };
//   return (
//     <div className="full-cart">
//       <div className="cart-container">
//         <h2 style={{ fontFamily: "chillax" }}>Shopping Cart</h2>
//         {cart.cartItems.length === 0 ? (
//           <div className="cart-empty">
//             <p style={{ fontFamily: "chillax", color: "white" }}>
//               Your cart is currently empty
//             </p>
//             <div className="start-shopping" style={{ display: "flex",paddingTop:10 }}>
//               <Link
//                 to="/shop"
//                 style={{
//                   display: "flex",
//                   gap: 10,
//                   textDecoration: "none",
//                   color: "white",
//                   alignItems: "center",
//                 }}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   fill="currentColor"
//                   className="bi bi-arrow-left"
//                   viewBox="0 0 16 16"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
//                   />
//                 </svg>
//                 <p className="main">Start Shopping</p>
//               </Link>
//             </div>
//           </div>
//         ) : (
//           <div>
//             <div className="titles">
//               <h3 className="product-title">Product</h3>
//               <h3 className="price">Price</h3>
//               <h3 className="quantity">Quantity</h3>
//               <h3 className="total">Total</h3>
//             </div>
//             <div className="cart-items">
//               {cart.cartItems &&
//                 cart.cartItems.map((cartItem) => (
//                   <div className="cart-item" key={cartItem._id}>
//                     <div className="cart-product">
//                       <img src={cartItem.image} alt={cartItem.name} />
//                       <div>
//                         <h3 className="name">{cartItem.name}</h3>
//                         <p className="about ">{cartItem.about}</p>
//                         <button onClick={() => handleRemoveFromCart(cartItem)}>
//                           Remove
//                         </button>
//                       </div>
//                     </div>
//                     <div className="cart-product-price">${cartItem.price}</div>
//                     <div className="cart-product-quantity">
//                       <button onClick={() => handleDecreaseCart(cartItem)}>
//                         -
//                       </button>
//                       <div className="count">{cartItem.cartQuantity}</div>
//                       <button onClick={() => handleAddToCart(cartItem)}>
//                         +
//                       </button>
//                     </div>
//                     <div className="cart-product-total-price">
//                       ${cartItem.price * cartItem.cartQuantity}
//                     </div>
//                   </div>
//                 ))}
//             </div>
//             <div className="cart-summary">
//               <button className="clear-btn" onClick={() => handleClearCart()}>
//                 Clear Cart
//               </button>
//               <div className="cart-checkout">
//                 <div className="subtotal">
//                   <span>Subtotal</span>
//                   <span className="amount">${cart.cartTotalAmount}</span>
//                 </div>
//                 <p style={{ fontFamily: "chillax-regular", fontSize: "12px" }}>
//                   Taxes and shipping calculated at checkout
//                 </p>
               
//                 {users?.user ? (
//                    <PayButton cartItems={cart.cartItems} />
//                  ) : (
//                   <button
//                   style={{fontFamily:'chillax'}}
//                     className="cart-login"
//                     onClick={() => navigate("/login")}
//                   >
//                     Login to Check out
//                   </button>
//                 )}
//                 <div className="continue-shopping">
//                   <Link
//                     to="/shop"
//                     style={{
//                       display: "flex",
//                       gap: 10,
//                       textDecoration: "none",
//                       color: "white",
//                       alignItems: "center",
//                       paddingTop: 15,
//                     }}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       fill="currentColor"
//                       className="bi bi-arrow-left"
//                       viewBox="0 0 16 16"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
//                       />
//                     </svg>
//                     <span>Continue Shopping</span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };