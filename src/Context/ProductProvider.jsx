import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const HandleGetAllProducts = async () => {
    try {
      const res = await fetch("http://localhost:8000/products", {
        method: "GET",
      });
      const data = await res.json();

      if (res.ok) {
        setProducts(data);
        toast.success("Product received Successfully!");
      }
    } catch (err) {
      console.log(err);
      toast.error("Unable to retrieve products!");
    }
  };

  useEffect(() => {

    // eslint-disable-next-line react-hooks/set-state-in-effect
    HandleGetAllProducts();
  }, []);

  useEffect(() => {
    console.log("prod:", products);
  }, [products]);

  
  return (
    <ProductContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
export { ProductContext };
