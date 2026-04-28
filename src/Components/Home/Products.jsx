import { useContext } from "react";
import { ProductContext } from "../../Context/ProductProvider";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Products = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-24">
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

              <span className="">
                <FaShoppingCart className="h-5 w-5" />
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Products;
