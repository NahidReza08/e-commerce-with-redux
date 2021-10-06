import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo2.png";
import { getTotalItems } from "../../helper/CartHelper";
import { showCart } from "../../redux/actions/CartActions";
import { hideMenubar, showMenubar } from "../../redux/actions/MenubarActions";

export default function Navbar() {
  const location = useLocation();
  //console.log("location:",location.pathname);
  const menubar = useSelector((state) => state.MenubarReducer.menubarDisplay);
  const { cartProducts } = useSelector((state) => state.CartReducer);
  const totalQuantity = getTotalItems(cartProducts);
  console.log("total", totalQuantity);
  const dispatch = useDispatch();
  const toggleMenubar = (e) => {
    console.log("Menubar Clicked", menubar);
    if (menubar === "hidden") dispatch(showMenubar());
    else dispatch(hideMenubar());
  };

  return (
    <div className="z-20 absolute h-screen">
      <nav className="p-6 bg-pink-900 flex flex-col md:flex-row fixed w-full">
        <div
          className="
            flex-initial flex flex-row
            font-semibold
            text-xl
            tracking-tight
            text-white
          "
        >
          <div className="flex-auto text-left md:hidden ">
            <i
              className="fas fa-bars hover:text-pink-600 focus:ring-4 "
              onClick={(e) => toggleMenubar(e)}
            ></i>
          </div>

          <div className="flex-auto">
            <img src={Logo} alt="logo" className="w-40 h-auto" />
          </div>

          <div className="mx-auto text-lg text-white p-1 md:hidden">
            <i
              className="fas fa-cart-arrow-down hover:text-pink-500 cursor-pointer text-lg"
              onClick={(e) => dispatch(showCart())}
            >
              <sup className="p-1 pb-2">
                {totalQuantity > 0 ? totalQuantity : null}
              </sup>
            </i>
          </div>
        </div>
        <div
          className={`flex-auto flex-col ${menubar} text-center text-lg text-white justify-center md:flex-row md:flex`}
        >
          <Link to="/">
            <div className={`flex-initial px-4 py-1 rounded-lg ${location.pathname==='/'?'text-pink-500':'hover:bg-pink-700'}`}>Home</div>
          </Link>
          <Link to="/about">
            <div className={`flex-initial px-4 py-1 rounded-lg ${location.pathname==='/about'?'text-pink-500':'hover:bg-pink-700'}`}>About Us</div>
          </Link>
          <Link to="/contact">
            <div className={`flex-initial px-4 py-1 rounded-lg ${location.pathname==='/contact'?'text-pink-500':'hover:bg-pink-700'}`}>Contact Us</div>
          </Link>
        </div>

        <div
          className={`flex-initial ${menubar} text-center justify-center md:flex`}
        >
          <div className="mx-auto text-lg text-white p-1 hidden md:block">
            <i
              className="fas fa-cart-arrow-down hover:text-pink-500 cursor-pointer text-lg"
              onClick={(e) => dispatch(showCart())}
            >
              <sup className="p-1 pb-2 ">
                {totalQuantity > 0 ? totalQuantity : null}
              </sup>
            </i>
          </div>
        </div>
      </nav>
    </div>
  );
}
