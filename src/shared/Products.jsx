import { useContext, useState } from "react";
import { ProductContext } from "../Context/ProductProvider";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Products = ({ products }) => {
  const { HandleAddToCart } = useContext(ProductContext);

  const [few, setFew] = useState(true);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-24">
        {few ? (
          <>
            {products &&
              products?.slice(0, 15).map((item, i) => (
                <div
                  key={i}
                  className="bg-white text-black rounded-md shadow-2xl overflow-hidden hover:scale-105 transition ease-in-out duration-500"
                >
                  <Link
                    to={`/single_product/${item?.id}`}
                    style={{ backgroundImage: `url("${item?.image}")` }}
                    className="bg-center bg-cover w-full h-[300px] block"
                  ></Link>

                  <div className="flex justify-between w-full items-center p-2">
                    <div>
                      <p>{item?.name}</p>
                      <p>{item?.price}</p>
                    </div>

                    <span
                      onClick={() =>
                        HandleAddToCart(item, item?.defaultSize, 1)
                      }
                      className=" cursor-pointer"
                    >
                      <FaShoppingCart className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              ))}
          </>
        ) : (
          <>
            {products &&
              products?.map((item, i) => (
                <div
                  key={i}
                  className="bg-white text-black rounded-md shadow-2xl overflow-hidden hover:scale-105 transition ease-in-out duration-500"
                >
                  <Link
                    to={`/single_product/${item?.id}`}
                    style={{ backgroundImage: `url("${item?.image}")` }}
                    className="bg-center bg-cover w-full h-[300px] block"
                  ></Link>

                  <div className="flex justify-between w-full items-center p-2">
                    <div>
                      <p>{item?.name}</p>
                      <p>{item?.price}</p>
                    </div>

                    <span
                      onClick={() =>
                        HandleAddToCart(item, item?.defaultSize, 1)
                      }
                      className=" cursor-pointer"
                    >
                      <FaShoppingCart className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>

      <div className="flex justify-center items-center py-4">
        <span
          onClick={() => setFew((prv) => !prv)}
          className="bg-black text-white font-semibold inline-block text-center p-2 rounded-md cursor-pointer"
        >
          {few ? "View More" : "View less"}
        </span>
      </div>
    </div>
  );
};

export default Products;
