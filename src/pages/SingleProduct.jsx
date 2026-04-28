import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductProvider";
import { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const SingleProduct = () => {
  const { products } = useContext(ProductContext);
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const found = products?.find((item) => parseInt(item?.id) === parseInt(id));

    if (found) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSingleProduct(found);
    }
  }, [products, id]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActive(singleProduct?.defaultSize);
  }, [singleProduct]);
  useEffect(() => {
    console.log("active:", active);
  }, [active]);

  return (
    <div className="p-6">
      <div className="flex lg:gap-3 gap-8 flex-col lg:flex-row">
        <div className="bg-white text-black rounded-md shadow-2xl overflow-hidden hover:scale-105 transition ease-in-out duration-500 lg:w-1/4 w-full">
          <div
            style={{ backgroundImage: `url("${singleProduct?.image}")` }}
            className="bg-center bg-cover w-full h-[300px] block"
          ></div>

          <div className="flex justify-between w-full items-center p-2">
            <div>
              <p>{singleProduct?.name}</p>
              <p>{singleProduct?.price}</p>
            </div>

            <span className="">
              <FaShoppingCart className="h-5 w-5" />
            </span>
          </div>
        </div>

        <div className=" flex flex-col justify-end gap-3">
          <div className="flex  gap-3 items-end  lg:w-1/4 w-full md:w-[40%]">
            {singleProduct?.sizes?.map((size, i) => (
              <span
                key={i}
                onClick={() => setActive(size)}
                className={`  ${active === size ? "text-white bg-black hover:bg-white hover:text-black" : ""} text-black font-semibold border-[2px] border-black p-3 rounded-md hover:bg-black hover:text-white transition ease-in-out duration-500 cursor-pointer`}
              >
                {size}
              </span>
            ))}
          </div>

          <div className=" flex items-center gap-3">
            <input type="number" className="border-[2px] p-2 outline-none" />

            <button className="bg-black rounded-md text-white  hover:bg-black hover:text-white transition ease-in-out duration-500 p-2">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
