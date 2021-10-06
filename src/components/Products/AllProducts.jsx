import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchData } from "../../Hook/useFetchData";
import Product from "../Products/Product";

export default function AllProductsDemo() {
  const dispatch = useDispatch();
  const { loader, products, error } = useSelector(
    (state) => state.ProductsReducer
  );
  console.log("rendering...",products.length)
  useEffect(() => {
    if(products.length===0)
      dispatch(useFetchData())
  } , []);

  return (
    <div>
      <div className={`${loader ? "block" : "hidden"}`}>
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-96 w-96 border-t-4 border-pink-900"></div>
        </div>
      </div>
      <div className={`${error === "" ? "hidden" : "block"}`}>
        <div className="w-5/6 md:w-2/4 h-auto bg-white rounded-sm mx-auto py-10">
          <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-5xl text-bold text-pink-900 mb-2 border-1 border-solid border-pink-900">
            Error!
          </h1>
          <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-4xl text-bold ">
            {error}
          </h2>
          <h3 className="text-center text-lg sm:text-xl md:text-2xl lg:text-4xl text-bold ">
            😰
          </h3>
        </div>
      </div>
      <div className={`${products.length === 0 ? "hidden" : "block"}`}>
        <div className="mx-10">
          <div
            className="
              mt-4
              grid grid-cols-1
              gap-y-10 gap-x-6
              sm:grid-cols-2
              lg:grid-cols-4
              xl:gap-x-10
              space-x-1
              xl:container
              xl:mx-auto
            "
          >
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
}
