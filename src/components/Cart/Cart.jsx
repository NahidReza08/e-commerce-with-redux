import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo2.png";
import { getTotalAmount, getTotalItems } from "../../helper/CartHelper";
import { hideCart, removeAll } from "../../redux/actions/CartActions";
import CartItem from "../Cart/CartItem";


export default function Cart() {
  const cartIndex = useSelector((state) => state.CartReducer.cartIndex);
  const { cartProducts } = useSelector((state) => state.CartReducer);
  const totalQuantity = getTotalItems(cartProducts);
  const dispatch = useDispatch();
  
  const totalAmount = getTotalAmount(cartProducts);

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-1/6 sm:w-3/6 lg:w-4/6 h-screen bg-opacity-70 bg-black ${cartIndex}`}
        onClick={(e) => dispatch(hideCart())}
      ></div>
      <div className={`fixed top-0 right-0 w-5/6 sm:w-3/6 lg:w-2/6 ${cartIndex}`}>
        <div className="bg-pink-900  ml-auto h-screen flex flex-col justify-between border-0 border-l-2 border-black">
          <div className="flex-initial flex flex-row border-b-2 flex-nowrap border-black">
            <div className="flex-grow pr-2 ">
              <img src={Logo} alt="logo" className="w-auto sm:w-1/2 h-auto" />
            </div>
            <div className="flex-initial text-white font-bold ml-auto">
              <i
                className="fas fa-times text-left mr-2 text-xs md:text-base lg:mt-4 cursor-pointer hover:text-pink-700"
                onClick={(e) => dispatch(hideCart())}
              ></i>
            </div>
          </div>

          <div className="flex-initial bg-gray-100 h-full overflow-auto ">
            <div className="border-b">
              <h1 className="text-sm font-bold text-black md:text-lg  ">
                Selected Items:
              </h1>
            </div>

            <div className={`bg-white shadow-2xl m-2 rounded-lg py-4 ${totalQuantity !== 0 ? "hidden" : "block"}`}>
              <h1 className="text-center text-gray-800">No Item Slected</h1>
            </div>

            <div className={`${totalQuantity === 0 ? "hidden" : "flex"} flex-row flex-shrink justify-between rounded-lg`}>
              <span className="flex-auto text-xxs md:text-base lg:text-lg font-bold text-black text-center  ">
                Product
              </span>
              <span className="flex-auto text-xxs md:text-base lg:text-lg font-bold text-black text-center ">
                Quantity
              </span>
              <span className="flex-auto text-xxs md:text-base lg:text-lg font-bold text-black text-center ">
                Price<span className="text-xxs">(unit)</span>
              </span>
              <span className="flex-auto text-xxs md:text-base lg:text-lg font-bold text-black text-center ">
                Total
              </span>
            </div>

            {cartProducts.map((product) => (
              <CartItem key={product.id} cartItem={product} />
            ))}
          </div>

          <div className="flex-initial">
            <div
              className={`${totalQuantity === 0 ? "hidden" : "flex"} flex-row justify-between py-2`}>
              <span className="text-white font-bold text-lg">Total Amount</span>
              <span className="text-white font-bold text-lg">
                 = ${totalAmount.toFixed(2)} 
              </span>
            </div>
            <div
              className={`${totalQuantity === 0 ? "hidden" : "flex"} flex flex-row justify-center pb-2`}>
              <button
                className="p-2 mx-2 bg-pink-600 border-solid rounded-lg text-lg text-white font-bold hover:bg-pink-700"
                onClick={(e) => dispatch(removeAll())}
              >
                Clear Cart
              </button>
              <Link to="/checkout"><button className="p-2 mx-2 bg-pink-600 border-solid rounded-lg text-lg text-white font-bold hover:bg-pink-700" onClick={(e) => {
                  dispatch(hideCart())
                }
              }>
                Order Now
              </button></Link>
            </div>
            <div className="bg-pink-900 mb-2">
              <span
                className="text-white font-bold text-center block"
                role="img"
              >
                Thanks for staying with DSI E-Commerce 😍
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
