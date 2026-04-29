import { useContext } from "react";
import Hero from "../Components/Home/Hero";

import Layout from "../shared/Layout";
import { ProductContext } from "../Context/ProductProvider";
import Products from "../shared/Products";

const Home = () => {
  const { products } = useContext(ProductContext);
  return (
    <Layout>
      <div className="min-h-screen ">
        <Hero />

        <div className="px-6">
          <Products products={products} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
