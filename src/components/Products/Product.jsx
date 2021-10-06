import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuantity } from "../../helper/CartHelper";
import { addProduct, changeQuantity, removeProduct } from "../../redux/actions/CartActions";

export default function Product({ product }) {
  const {id,title,price,category,image,rating: { rate, count }} = product;
  const {cartProducts} = useSelector(state=>state.CartReducer);
  const dispatch = useDispatch();
  const quantity = getQuantity(product,cartProducts);
  
  return (
    <div
      className="
                flex flex-col
                bg-white
                p-4
                shadow
                rounded-lg
                justify-between
                hover:shadow-2xl
              "
    >
      <div
        className="
                  w-full
                  min-h-20
                  bg-gray-200
                  aspect-w-1 aspect-h-1
                  rounded-md
                  overflow-hidden
                  lg:h-80 lg:w-auto lg:aspect-none
                  md:h-60 md:w-auto md:aspect-none
                  sm:h-40 sm:w-auto sm:aspect-none
                "
      >
        <img
          className="h-full w-full object-center object-fill"
          src={image}
          alt=""
        />
      </div>
      <div className="p-4">
        <span
          className="
                    inline-block
                    px-2
                    py-1
                    leading-none
                    bg-orange-200
                    text-orange-800
                    rounded-full
                    font-semibold
                    uppercase
                    tracking-wide
                    text-xs
                  "
        >
          {category}
        </span>
        <h2 className="mt-2 mb-2 font-bold">{title}</h2>
        

        <div className="mt-3 flex flex-col xs:flex-wrap xs:flex-row items-center">
          <div className="flex-initial">
            <i className="fas fa-dollar-sign text-blue-400"></i>
            <span className="font-bold text-xl">{price}</span>
          </div>
          <div className="flex-initial xs:ml-auto">
            <i className="fas fa-star text-yellow-400 text-sm font-semibold">
              <span className="font-bold text-xl text-black">{rate}</span>/5
            </i>

            <i className="fas fa-users pl-2 text-gray-800">{count}</i>
          </div>
        </div>
      </div>
      {quantity === 0 ? (
        <div
          className="
                  p-4
                  flex
                  items-center
                  text-sm text-gray-600
                  border-2
                  rounded-lg
                  bg-pink-700
                  hover:ring-8
                  hover:bg-pink-900
                  focus:outline-black
                  cursor-pointer
                "
          onClick={(e) =>dispatch(addProduct({...product,quantity:quantity+1}))}
        >
          <button className="mx-auto text-white font-semibold text-base">
            Add to Cart
          </button>
        </div>
      ) : (
        <div
          className="
                  p-4
                  flex
                  flex-row
                  items-center
                  text-sm text-gray-600
                  rounded-lg
                  bg-white
                  justify-center
                "
        >
          <div
            className="text-3xl text-pink-700 mr-2 cursor-pointer"
            onClick={(e) => (quantity>1)?dispatch(changeQuantity({...product,quantity:quantity-1})):dispatch(removeProduct(product))}
          >
            <i
              className="fas fa-minus-square hover:ring-8
            hover:bg-pink-900
            focus:outline-black"
            ></i>
          </div>
          <div className="text-xl text-pink-700 mx-2">{quantity}</div>
          <div
            className="text-3xl text-pink-700 ml-2 cursor-pointer"
            onClick={(e) => dispatch(changeQuantity({...product,quantity:quantity+1}))}
          >
            <i
              className="fas fa-plus-square hover:ring-8
            hover:bg-pink-900
            focus:outline-black"
            ></i>
          </div>
        </div>
      )}
    </div>
  );
}
