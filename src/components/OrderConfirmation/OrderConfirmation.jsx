import React from "react";
import { useDispatch } from "react-redux";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { getTotalAmount } from "../../helper/CartHelper";
import { removeAll } from "../../redux/actions/CartActions";

export default function OrderConfirmation() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  if(!location.state){
    console.log("Here");
    return <Redirect to="/" />
  }
  console.log(location.state);
  dispatch(removeAll());

  const {userDetails,cartItems,trackID} = location.state;
  const totalAmount = getTotalAmount(cartItems);

  const {firstName,lastName,email,contact,address,city,union,postCode} = userDetails;
  // console.log(finalCartItems);

  return (
    <div className="h-auto flex flex-col">
      <div className="flex justify-center items-center mb-2 mx-auto h-auto">
        <h1 className="text-5xl font-bold text-pink-900">Successful!</h1>
      </div>
      <div className="h-auto lg:mb-4">
        <p className="p-2 bg-white text-blue-900 rounded-full mx-auto max-w-max text-center text-xs sm:text-base">
          Congratulations! Your order has been successfully placed. Our team
          will contact you soon whenever the product become ready. Thanks for
          shopping with us.
        </p>
      </div>
      <div className="h-full mt-2 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div>
            <h1 className="font-bold text-xl">Order Summary</h1>
          </div>

          {/* col-span-4 sm:col-span-6 md:col-span-7 lg:
          col-span-7 sm:col-span-5 md:col-span-4 lg: */}

          <div className="flex flex-col w-full bg-white m-2">
            <div className="grid grid-cols-12 justify-items-start border-2 border-black">
              <div></div>
              <div className="col-span-8 font-bold">Tracking ID</div>
              <div className="col-span-3 border-l-2 border-black font-bold text-vw-1 sm:text-vh-1">
                {trackID}
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-white">
            <div className="grid grid-cols-12 justify-items-start border-2 border-black">
              <div></div>
              <div className="col-span-8 font-bold text-sm md:text-base lg:text-xl">Product Details</div>
              <div className="col-span-3 border-l-2 border-black font-bold text-sm md:text-base lg:text-xl">
                Unit Total
              </div>
            </div>
            {cartItems.map((product) => (
              <div className="grid grid-cols-12 justify-items-start border-2 border-t-0 border-black">
                <div></div>
                <div className="col-span-8 ">
                  <div className="grid grid-cols-7 grid-rows-2 grid-flow-col">
                    <div className="row-span-4 col-span-1">
                      <img
                        src={product.image}
                        alt="product image"
                        className="w-1/2 h-auto"
                      />
                    </div>
                    <div className="col-span-6 row-span-1 text-sm md:text-base lg:text-xl ">
                      {product.title}
                    </div>
                    <div className="row-span-3 col-span-2 text-sm md:text-base lg:text-xl">
                      Unit Price: ${product.price}
                    </div>
                    <div className="row-span-3 col-span-5 text-sm md:text-base lg:text-xl">
                      Quantity: x{product.quantity}
                    </div>
                  </div>
                </div>
                <div className="col-span-3 border-l-2 border-black">
                  <span className="text-right text-xxs xs:text-base"> ${(product.price*product.quantity).toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-full bg-white m-2">
            <div className="grid grid-cols-12 justify-items-start border-2 border-black">
              <div></div>
              <div className="col-span-8 font-bold">Total Amount to be paid:</div>
              <div className="col-span-3 border-l-2 border-black font-bold text-xxs xs:text-base">
                $4000.00
              </div>
            </div>
          </div>
          
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div>
            <h1 className="font-bold text-xl">User Details</h1>
          </div>
          <div className="w-full lg:w-3/5 h-auto bg-white flex flex-col">
            <div className="grid grid-rows-7 border-2 border-black">
              <div className="row-span-1 grid grid-cols-2 border-b-2 border-black">
                <div className="">
                  <span className="font-bold text-sm md:text-base lg:text-xl">First Name: </span>
                  <span className="text-sm md:text-base lg:text-xl">{firstName}</span>
                </div>
                <div className="">
                  <span className="font-bold text-sm md:text-base lg:text-xl">Last Name: </span>
                  <span className="text-sm md:text-base lg:text-xl">{lastName}</span>
                </div>
              </div>
              <div className="row-span-1  border-b-2 border-black">
                <span className="font-bold text-sm md:text-base lg:text-xl">Email: </span>
                <span className="text-sm md:text-base lg:text-xl">{email}</span>
              </div>
              <div className="row-span-1 border-b-2 border-black">
                <span className="font-bold text-sm md:text-base lg:text-xl">Contact No: </span>
                <span className="text-sm md:text-base lg:text-xl">{contact}</span>
              </div>
              <div className="row-span-3 border-b-2 border-black">
                <span className="font-bold text-sm md:text-base lg:text-xl">Address: </span>
                <span className="text-sm md:text-base lg:text-xl">{address}</span>
              </div>
              <div className="row-span-1 grid grid-cols-3">
                <div className="">
                  <span className="font-bold text-sm md:text-base lg:text-xl">City: </span>
                  <span className="text-sm md:text-base lg:text-xl">{city}</span>
                </div>
                <div className="">
                  <span className="font-bold text-sm md:text-base lg:text-xl">Union: </span>
                  <span className="text-sm md:text-base lg:text-xl">{union}</span>
                </div>
                <div className="">
                  <span className="font-bold text-sm md:text-base lg:text-xl">Post Code: </span>
                  <span className="text-sm md:text-base lg:text-xl">{postCode}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/5 h-auto">
            <b className="mt-4 pt-2">Delivery Location</b>
          <iframe src={`https://maps.google.com/maps?q=${address}&t=&z=13&ie=UTF8&iwloc=&output=embed`} className="border-0 pt-2 w-full h-full mb-2" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
