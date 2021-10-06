import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../About/About";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import OrderConfirmation from "../OrderConfirmation/OrderConfirmation";
import AllProducts from "../Products/AllProducts";

export default function Main() {
  return (
    <Router>
      <div>
        <Navbar />
        <div
          className={`z-10 relative antialiased bg-blue-200 text-gray-900 font-sans p-6 min-h-screen pt-32 md:pt-28`}
        >
          <Switch>
            <Route exact path="/">
              <AllProducts />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>

            <Route exact path="/confirmation">
              <OrderConfirmation />
            </Route>
          </Switch>
        </div>
        <Footer />
        <Cart />
      </div>
    </Router>
  );
}
