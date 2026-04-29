import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const [isAuthentified, setIsAuthentified] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [CartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartitems")) || [],
  );

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
  useEffect(() => {
    console.log("cartItemssss:", CartItems);

    const totalCart = CartItems?.reduce((acc, curr) => acc + curr?.quantity, 0);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCartCount(totalCart);
  }, [CartItems]);

  const HandleAddToCart = async (prod, size, quantity) => {
    try {
      if (!isAuthentified) {
        console.log("not user");
        let updatedCartItems;
        //get the stored cartItems
        const storedCartItems =
          JSON.parse(localStorage.getItem("cartitems")) || [];

        //check if item already exist(so that we can update the quantity if it exist or add if its not existing )
        const existingItem = storedCartItems?.find(
          (item) => parseInt(item?.id) === parseInt(prod?.id),
        );

        if (existingItem) {
          //update quantity before adding to cart
          updatedCartItems = storedCartItems.map((item) =>
            item.id === prod.id
              ? {
                  ...item,
                  defaultSize: size || existingItem.defaultSize,
                  quantity:
                    Number(existingItem.quantity) + Number(quantity) || 1,
                }
              : item,
          );

          setCartItems(updatedCartItems);
          localStorage.setItem("cartitems", JSON.stringify(updatedCartItems));
          toast.info("Existing item quantity updated in cart successfully!");
        } else {
          // add to cart
          updatedCartItems = [
            ...storedCartItems,
            { ...prod, defaultSize: size, quantity: Number(quantity) },
          ];

          setCartItems(updatedCartItems);
          localStorage.setItem("cartitems", JSON.stringify(updatedCartItems));
          toast.success("Items Added to cart successfully");
        }
      } else {
        console.log("Authentified");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const HandleUpdateCart = async (prod, quantity) => {
    try {
      if (!isAuthentified) {
        let updatedCartItems;
        //get the stored cartItems
        const storedCartItems =
          JSON.parse(localStorage.getItem("cartitems")) || [];

        //check if item exit before updating
        const existingItem = storedCartItems?.find(
          (item) => parseInt(item?.id) === parseInt(prod?.id),
        );

        if (existingItem) {
          updatedCartItems = storedCartItems.map((item) =>
            item.id === prod.id
              ? {
                  ...item,
                  quantity: Number(quantity),
                }
              : item,
          );

          setCartItems(updatedCartItems);
          localStorage.setItem("cartitems", JSON.stringify(updatedCartItems));
          toast.success("Items Updated successfully");
        } else {
          toast.error("Item does not exist in cart");
        }
      } else {
        console.log("Not Authentified");
      }
    } catch (err) {
      console.log("err:", err);
    }
  };

  const HandleDeleteCart = async (id) => {
    try {
      if (!isAuthentified) {
        let updatedCartItems;
        //get the stored cartItems
        const storedCartItems =
          JSON.parse(localStorage.getItem("cartitems")) || [];

        //check if item exit before updating
        const existingItem = storedCartItems?.find(
          (item) => parseInt(item?.id) === parseInt(id),
        );

        if (existingItem) {
          if (existingItem.quantity > 1) {
            updatedCartItems = storedCartItems.map((item) =>
              item.id === existingItem.id
                ? {
                    ...item,
                    quantity: Number(existingItem.quantity) - 1,
                  }
                : item,
            );
          } else {
            updatedCartItems = storedCartItems.filter(
              (item) => item?.id !== parseInt(id),
            );
          }

          setCartItems(updatedCartItems);
          localStorage.setItem("cartitems", JSON.stringify(updatedCartItems));
          toast.success("Items Deleted successfully");
        } else {
          toast.error("Item does not exit in cart");
        }
      } else {
        console.log("Authentified");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        HandleAddToCart,
        CartItems,
        HandleUpdateCart,
        cartCount,
        HandleDeleteCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
export { ProductContext };
