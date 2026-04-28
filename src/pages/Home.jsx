import Hero from "../Components/Home/Hero";
import Products from "../Components/Home/Products";
import Layout from "../shared/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen ">
        <Hero />

        <div className="px-6">
          <Products />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
