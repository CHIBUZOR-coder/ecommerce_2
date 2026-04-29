import { useContext, useEffect, useState } from "react";
import Layout from "../shared/Layout";
import Products from "../shared/Products";
import { ProductContext } from "../Context/ProductProvider";

const Women = () => {
  const { products } = useContext(ProductContext);
  const [Women, setWomen] = useState([]);

  useEffect(() => {
    const women = products.filter((item) => item?.category === "women");
    if (women) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setWomen(women);
    }
  }, [products]);
  return (
    <Layout>
      <div className="min-h-screen bg-green-500">
        <p className="text-lg font-semibold">Women</p>

        <Products products={Women} />
      </div>
    </Layout>
  );
};

export default Women;
